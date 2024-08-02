[![Lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Dependabot](https://api.dependabot.com/badges/status?host=github&repo=DEFRA/rod-licensing-tests)](https://dependabot.com/)
[![GitHub issues](https://img.shields.io/github/issues/DEFRA/rod-licensing-tests.svg)](https://github.com/DEFRA/rod-licensing/issues/)
[![Repo size](https://img.shields.io/github/languages/code-size/DEFRA/rod-licensing-tests.svg)]()
[![Repo size](https://img.shields.io/github/repo-size/DEFRA/rod-licensing-tests.svg)]()
[![Licence](https://img.shields.io/badge/licence-OGLv3-blue.svg)](http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3)

# Rod Licensing Digital Service Tests

Mono-repo for the rod licensing digital service quality assurance tests

## Prerequisites

- Node v18+
- Docker v18.06.0+

## Cloning

Cloning via SSH from behind a firewall which blocks port 22:

```
git clone ssh://git@ssh.github.com:443/DEFRA/rod-licensing-tests
```

## Using Lerna

This project uses [Lerna](https://lerna.js.org/) to simplify the management and versioning of multiple packages which comprise the rod licensing digital
service.

Running `npm install` in the root project will automatically run the `lerna bootstrap` command. The result is that any local packages which depend on
one another will be linked locally (using symbolic links).

Running `npm run lerna:clean` will remove all local node_modules.

Running `lernaupdate` will enter an interactive wizard to allow updates of each packages dependencies.

Running `lernaupdate --non-interactive --dependency "aws-sdk@latest"` will update the aws-sdk dependency in all packages which use it.

## Package structure

packages/

- [frontend-acceptance-tests](packages/frontend-acceptance-tests/README.md)
  > Acceptance tests for the Get a Fishing Licence frontend
- [frontend-performance-tests](packages/frontend-performance-tests/README.md)
  > Performance tests for the Get a Fishing Licence frontend

## Running Acceptance Tests Locally

1. Install the package dependencies
 ```
    npm install
    ```

2.  Navigate to the `frontend-acceptance-tests` package

    ```
    cd packages/frontend-acceptance-tests
    ```

3.  Install the package dependencies

    ```
    npm install
    ```

    Note: The first `npm install` in the root does not install the dependencies inside each module.

4.  Create a `.env` file in the `frontend-acceptance-tests` directory and copy the values from the gitlab repo fish/rod-catch-returns-env-vars (excluding proxy settings)

    ```
    touch .env
    ```

5.  Run the tests using:

    ```
    npm run local
    ```

## Contributing to this project

Please read our [contribution guidelines](CONTRIBUTING.md)

## License

THIS INFORMATION IS LICENSED UNDER THE CONDITIONS OF THE OPEN GOVERNMENT LICENCE found at:

http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3

The following attribution statement MUST be cited in your products and applications when using this information.

> Contains public sector information licensed under the Open Government license v3

### About the license

The Open Government Licence (OGL) was developed by the Controller of Her Majesty's Stationery Office (HMSO) to enable information providers in the public sector to license the use and re-use of their information under a common open licence.

It is designed to encourage use and re-use of information freely and flexibly, with only a few conditions.
