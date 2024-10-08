# How to run

## Getting Started

This project is maintained with [yarn](https://yarnpkg.com/) and [MakeFile](https://makefiletutorial.com/), so the development flow is a litte bit different.

## Prerequisites

- `Nodejs`
- `Yarn`

## Installing

```sh
git clone git@github.com:jorgevmachado/geek-monorepo
```

To setup the project, use the command

- NodeJS `^v20.17.0`, see [.nvmrc](./.nvmrc)

This command will install and build all project dependencies

```sh
make setup
```

## Running

After completing the construction of the libraries, simply execute the command for each application to run locally.

```sh
make dev # to run all applications from the monorepo in development mode

make nest-dev # to run the nest application in development mode

make next-dev # to run the next application in development mode

make vite-dev # to run the vite application in development mode

make lint # to run lint on all projects in the monorepo

make nest-lint # to run lint on the nest project

make next-lint # to run lint on the next project

make vite-lint # to run lint on the vite project

make business-lint # to run lint on the business library

make services-lint # to run lint on the services library

make ui-lint # to run lint on the ui library

make build # to run the build on all applications in the monorepo

make nest-build # to run the build on the nest application

make next-build # to run the build on the next application

make vite-build # to run the build on the vite application

make business-build # to run the build on the business library

make services-build # to run the build on the services library

make ui-build # to run the build on the ui library
```