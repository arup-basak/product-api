# Product API

This is a Node.js application using Express.js for managing products with Prisma and authorization middleware.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/arup-basak/product-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd product-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Database Setup

1. Make sure your database is configured in `prisma/schema.prisma`.
2. Run Prisma migration to create the database schema:

   ```bash
   npm run generate
   ```

### Running the Application

Start the server:

```bash
npm start
```

### API Endpoints

- **POST `/insert`:** Insert a new product.
- **GET `/search`:** Retrieve a list of products.
- **DELETE `/delete/:id`:** Delete a product by ID.

### Authorization

The application uses a custom authorization middleware. Make sure to handle authentication and provide the required credentials
