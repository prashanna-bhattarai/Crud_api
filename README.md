# Crud API

A simple REST API built with Node.js, Express and MongoDB that performs CRUD operations on user data.

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman (for testing)

## Features
- Create a new user
- Read all users
- Read a specific user by ID, name or phone number
- Update a user by ID or name
- Delete a user by ID or name

## API Routes

| Method | URL | Description |
|--------|-----|-------------|
| POST | / | Create a new user |
| GET | / | Get all users |
| GET | /:id | Get a specific user by ID |
| GET | /name/:name | Get a specific user by name |
| GET | /phone/:phone | Get a specific user by phone |
| PUT | /:id | Update a user by ID |
| PUT | /name/:name | Update a user by name |
| DELETE | /:id | Delete a user by ID |
| DELETE | /name/:name | Delete a user by name |

## How to Run Locally

1. Clone the repository
   git clone https://github.com/prashanna-bhattarai/Crud_api.git

2. Install dependencies
   npm install

3. Create a .env file in the root folder
   MONGO_URI=mongodb://localhost:27017/users
   PORT=3000

4. Run the server
   node server.js

5. Test the API using Postman

## Sample User Data
json
{
  "name": "Prashanna",
  "email": "prashanna@gmail.com",
  "phone": "9800000000"
}


## Author
Prashanna Bhattarai
