# Frontend React App

Frontend is a low-code platform for rapidly building scalable, production ready REST and GraphQL APIs.

Frontend is built using Material UI v5 and a Rails 6.

## Getting Started

In the project directory, you can run:

```
npm install
npm run start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Ensure that you have the Rails API server running.

### `ENV variables`

You will need to configure the following ENV variable located in `.env`

`NEXT_PUBLIC_API_URL=http://localhost:8000`

### `REST API`

The API is namespaced using public, user authenticated and admin endpoints respectively:

```
https://localhost:8000/api/v1/admin/
https://localhost:8000/api/v1/admin/app
https://localhost:8000/api/v1/admin/admin
```

### Authentication

Authentication uses a JWT authentication token to manage access and authorization.
There are also 2 user roles with accounts `admin` and `user`.

All API requested to authenticated endpoints require sending the JQT token in the
authorization header:

```
Authorization: Bearer <token>
```

Sign in the user:

```
POST /api/v1/admin/login
{
  user: {
    email,
    password
  }
}
```

Signup:

```
POST /api/v1/admin/signup
{
  user: {
    first_name,
    last_name,
    email,
    password
  }
}
```

Both methods will return the user in a `data` payload with the JWT token

```
{
  data: {
    ...
    token: <TOKEN>
  }
}
```

### Reset password

Reset password requires a 6-digit PIN that is used to verify on the mobile phone before resetting the password

First initiate a reset password pin using the email to reset:

```
POST /api/v1/admin/forgot_password
{
  email: <EMAIL>
}
```

Verification of a 6-digit pin os required to reset the password:

```
POST /api/v1/admin/verify_pin
{
  email: <EMAIL>,
  pin: <PIN>
}
```

After the previous step the user can be authenticated and only submitting password is
required since authentication headers will be included in the payload:

```
POST /api/v1/admin/reset_password
{
  password: <PASSWORD>
}
```

### Search, sorting and pagination

All the REST endpoints respond to URL params to enable search, sort and pagination

```
sort_key
sort_direction=<asc|desc>
page=<number>
keywords=<query>
```

Example:
`GET /api/v1/admin/components?sort_key=components.position&sort_direction=asc`

### Users

List all users:
`GET /api/v1/admin/users`

Fetch a user:
`GET /api/v1/admin/users/:id`

Update a user:
`PUT /api/v1/admin/users/:id`

```
PUT /api/v1/admin/users/:id
{
  first_name
  last_name
  email
  role
}
```

Examples:
`http://localhost:8000/api/v1/admin/users`
