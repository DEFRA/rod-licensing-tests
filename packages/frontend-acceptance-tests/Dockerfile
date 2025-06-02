FROM ubuntu:24.04
ENV TEST_CONFIG ./src/conf/docker.conf.js

ENV DEBIAN_FRONTEND="noninteractive"
ENV TZ=Europe/London

# Install packages required by this script
RUN set -e; \
    apt-get update -qq; \
    apt-get install -y ca-certificates; \
    sed -i 's|http://archive.ubuntu.com|https://archive.ubuntu.com|g' /etc/apt/sources.list; \
    printf 'Acquire::Retries "3";\nAcquire::http::Pipeline-Depth "0";\n' > /etc/apt/apt.conf.d/80-retries; \
    apt-get update -qq; \
    apt-get dist-upgrade -y; \
    apt-get update -qq --allow-releaseinfo-change; \
    apt-get install -y --no-install-recommends wget curl gnupg git default-jdk g++ build-essential xvfb

# Install google-chrome repo
RUN mkdir -p /usr/share/keyrings && \
    wget -qO - https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/google-linux.gpg
RUN echo "deb [arch=amd64 signed-by=/usr/share/keyrings/google-linux.gpg] https://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list

# Install Chrome
RUN apt-get update -qq && \
    apt-get install -y google-chrome-stable

# Install Firefox using apt-get and configure to avoid incompatible Snap version
RUN apt-get update -qq && \
    apt-get install -y software-properties-common
RUN add-apt-repository -y ppa:mozillateam/ppa
RUN printf 'Package: firefox\nPin: release o=LP-PPA-mozillateam\nPin-Priority: 1500\n' > /etc/apt/preferences.d/mozilla-firefox
RUN apt-get update -qq && \
    apt-get install -y firefox

# Cleanup after install
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 18.17.1

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Install nvm with node and npm
RUN mkdir -p /usr/local/nvm && \
    curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash && \
    . $NVM_DIR/nvm.sh && \
    nvm install $NODE_VERSION && \
    nvm alias default $NODE_VERSION && \
    nvm use default

ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Create app directory
RUN mkdir -p /app/logs
WORKDIR /app
VOLUME /app/logs

# Install packages
COPY packages/frontend-acceptance-tests/package*.json /app/
RUN npm install

# Copy resources
COPY packages/frontend-acceptance-tests /app/

ENTRYPOINT [ "node_modules/.bin/wdio", "conf/docker.conf.js" ]
CMD [ "" ]
