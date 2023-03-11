## Description

CRUD application made in NodeJS, using Nestjs Framework - Aplicacion CRUD realizada en NodeJS, utilizando Framework Nestjs

## EndPoint

### Query multiple users - Consultar varios usuarios

GET: /users

### Query a single user - Consultar un unico usuario

GET: /users/:id

### Insert a new user - Insertar un nuevo usuario

POST: /users

Body

```bash
{
  "username": "username",
  "password": "123456"
}
```

### Delete a user - Eliminar un usuario

DELETE: /users/:id

### Update a user - Actualizar un usuario

PATCH: /users/:id

Body

```bash
{
  "username": "username",
  "password": "123456"
}
```

### Create a user profile - Crear un perfil de usuario

POST: /users/:id/profile

Body

```bash
{
  "firstname": "name",
  "lastname": "lastname",
  "age": "1"
}
```

### Create a new Post - Crear un nuevo Post

POST: /posts

Body

```bash
{
  "title": "title example",
  "content": "Content example",
  "authorId": authorId
}
```

### Consult several Posts - Consultar varios Post

GET: /posts

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
