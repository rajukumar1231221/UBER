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
- `fullname` (object).
  - `fullname` (string, minimum length: 3)
  - `lastName` (string, optional, minimum length: 3)
- `email` (string, must be a valid email)
- `password` (string, minimum length: 6).
- `token` (String):jwt Token

