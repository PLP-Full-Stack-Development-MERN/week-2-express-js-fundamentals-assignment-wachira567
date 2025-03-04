# Express.js Fundamentals Assignment

## Description

This project is an Express.js application that demonstrates the fundamentals of building a RESTful API. It includes user and product management functionalities with in-memory storage.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd express-assignment
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   node index.js
   ```
2. The server will run on `http://localhost:3000`.

## API Endpoints

### User Endpoints

- `GET /api/users` - Retrieve all users
- `GET /api/users/:id` - Retrieve a user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user by ID
- `DELETE /api/users/:id` - Delete a user by ID

### Product Endpoints

- `GET /api/products` - Retrieve all products
- `GET /api/products/:id` - Retrieve a product by ID
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product by ID
- `DELETE /api/products/:id` - Delete a product by ID

## License

This project is licensed under the MIT License.
