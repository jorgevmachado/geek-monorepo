# How to run

## Getting Started

This project is maintained with [npm](https://www.npmjs.com/) and [MakeFile](https://makefiletutorial.com/), so the development flow is a litte bit different.

## Prerequisites

- `Nodejs`
- `Npm`

## Installing

```sh
git clone git@github.com:jorgevmachado/geek-nest
```

```sh
make setup
```
## Running

After configuring the host and completing the construction of the libraries, just run the command for each application to run locally.

```sh
make start # to run the application in development mode

make lint # to run the lint in the project

make unit-test # to run the tests in the project

make unit-test-cov # to run the tests in the project with coverage
```

Unit Tests
```sh
npm run test -- --findRelatedTests src/modules/auth/users/users.service.spec.ts
npm run test -- --findRelatedTests src/modules/auth/auth.service.spec.ts
npm run test -- --findRelatedTests src/modules/auth/auth.controller.spec.ts
npm run test -- --findRelatedTests src/modules/pokemon/pokemon.service.spec.ts
npm run test -- --findRelatedTests src/modules/pokemon/pokemon.controller.spec.ts

```
