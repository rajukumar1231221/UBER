# User Registration Endpoint

## Endpoint
`POST /users/register`

# HTTP METHOD 
`POST`

## Description
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns a JSON Web Token (JWT) along with the user details.

## Request Body
The request body should be a JSON object containing the following fields:

- `fullName`: An object containing:
  - `firstName` (string, required, minimum length: 3)
  - `lastName` (string, optional, minimum length: 3)
- `email` (string, required, must be a valid email)
- `password` (string, required, minimum length: 6)

## Example Response

- `user`: An object containing:
  - `fullName` (object).
    - `firstName` (string, minimum length: 3)
    - `lastName` (string, optional, minimum length: 3)
  - `email` (string, must be a valid email)
  - `password` (string, minimum length: 6)
- `token` (String): JWT Token

# User Login Endpoint

## Endpoint
`POST /users/login`

# HTTP METHOD 
`POST`

## Description
This endpoint is used to log in an existing user. It validates the input data, checks the user's credentials, and returns a JSON Web Token (JWT) along with the user details if the credentials are valid.

## Request Body
The request body should be a JSON object containing the following fields:

- `email` (string, required, must be a valid email)
- `password` (string, required, minimum length: 6)

## Example Response

- `message` (string): "successfully login"
- `token` (string): JWT Token
- `userLogin`: An object containing the user details.

# User Profile Endpoint

## Endpoint
`GET /users/profile`

# HTTP METHOD 
`GET`

## Description
This endpoint is used to get the profile of the currently authenticated user. It requires a valid JWT token.

## Headers
- `Authorization`: Bearer <JWT Token>

## Example Response

- `user`: An object containing the user details:
  - `fullName` (object):
    - `firstName` (string)
    - `lastName` (string)
  - `email` (string)

# User Logout Endpoint

## Endpoint
`GET /users/logout`

# HTTP METHOD 
`GET`

## Description
This endpoint is used to log out the currently authenticated user. It clears the authentication token and adds it to the blacklist.

## Headers
- `Authorization`: Bearer <JWT Token>

## Example Response

- `message` (string): "Logged out successfully"