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

# Captain Registration Endpoint

## Endpoint
`POST /captains/register`

# HTTP METHOD 
`POST`

## Description
This endpoint is used to register a new captain. It validates the input data, hashes the password, creates a new captain in the database, and returns the captain details.

## Request Body
The request body should be a JSON object containing the following fields:

- `fullName`: An object containing:
  - `firstName` (string, required, minimum length: 3)
  - `lastName` (string, optional, minimum length: 3)
- `email` (string, required, must be a valid email)
- `password` (string, required, minimum length: 6)
- `vehicle`: An object containing:
  - `color` (string, required, minimum length: 3)
  - `plate` (string, required, minimum length: 3)
  - `capacity` (number, required, minimum: 1)
  - `vehicleType` (string, required, must be one of: 'car', 'motorcycle', 'auto')

## Example Response

- `captain`: An object containing:
  - `fullName` (object):
    - `firstName` (string, minimum length: 3)
    - `lastName` (string, optional, minimum length: 3)
  - `email` (string, must be a valid email)
  - `vehicle` (object):
    - `color` (string, minimum length: 3)
    - `plate` (string, minimum length: 3)
    - `capacity` (number, minimum: 1)
    - `vehicleType` (string, one of: 'car', 'motorcycle', 'auto')

  - `message` (string): "successfully created captain"
  - `token` (string): JWT Token

# Captain Login Endpoint

## Endpoint
`POST /captains/login`

# HTTP METHOD 
`POST`

## Description
This endpoint is used to log in an existing captain. It validates the input data, checks the captain's credentials, and returns a JSON Web Token (JWT) along with the captain details if the credentials are valid.

## Request Body
The request body should be a JSON object containing the following fields:

- `email` (string, required, must be a valid email)
- `password` (string, required, minimum length: 6)

## Example Response

- `message` (string): "logged in successfully"
- `token` (string): JWT Token
- `captain`: An object containing the captain details.

# Captain Profile Endpoint

## Endpoint
`GET /captains/profile`

# HTTP METHOD 
`GET`

## Description
This endpoint is used to get the profile of the currently authenticated captain. It requires a valid JWT token.

## Headers
- `Authorization`: Bearer <JWT Token>

## Example Response

- `captain`: An object containing the captain details:
  - `fullName` (object):
    - `firstName` (string)
    - `lastName` (string)
  - `email` (string)
  - `vehicle` (object):
    - `color` (string)
    - `plate` (string)
    - `capacity` (number)
    - `vehicleType` (string)

# Captain Logout Endpoint

## Endpoint
`GET /captains/logout`

# HTTP METHOD 
`GET`

## Description
This endpoint is used to log out the currently authenticated captain. It clears the authentication token and adds it to the blacklist.

## Headers
- `Authorization`: Bearer <JWT Token>

## Example Response

- `message` (string): "Logout successfully"