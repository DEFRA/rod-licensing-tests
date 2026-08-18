FROM ubuntu:latest
ENV TEST_CONFIG ./src/conf/docker.conf.js

ENV DEBIAN_FRONTEND="noninteractive"
ENV TZ=Europe/London

# Install packages required by this script
RUN set -ex; \
	apt-get update; \
	apt-get upgrade -y; \
	apt-get install -y --no-install-recommends wget curl gnupg git default-jdk g++ build-essential

# Install google-chrome repo
RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/google-linux-signing-keyring.gpg
RUN /bin/sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/google-linux-signing-keyring.gpg] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'

# Install Chrome
RUN	apt-get update; \
    apt-get install -y google-chrome-stable

# Cleanup after install
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 20

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Install node 20 with npm (via nodesource)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@11.19.0 \
    && node -v && npm -v

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Create app directory
RUN mkdir -p /app/logs
WORKDIR /app
VOLUME /app/logs

# Install packages (--ignore-scripts=false overrides .npmrc to allow only the packages approved in allowScripts)
COPY packages/frontend-acceptance-tests/package*.json packages/frontend-acceptance-tests/.npmrc /app/
RUN npm install --ignore-scripts=false

# Copy resources
COPY packages/frontend-acceptance-tests /app/

ENTRYPOINT [ "node_modules/.bin/wdio", "conf/docker.conf.js"]
CMD [ "" ]
