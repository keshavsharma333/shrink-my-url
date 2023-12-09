# LinkShortner

shrink-my-url is a URL shortening service that allows users to create, manage, and track shortened URLs.

## Features

- User authentication (signup and login)
- Create shortened URLs
- View, edit, and delete shortened URLs
- Track click counts for each shortened URL
- Responsive design for various screen sizes

## Technologies Used

- Frontend:

  - React
  - Chakra UI
  - React Query
  - Framer Motion
  - Axios

- Backend:
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - JSON Web Tokens (JWT) for authentication

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/shrink-my-url.git
   cd shrink-my-url
   ```

2. Install dependencies for both client and server:

   ```
   npm run deploy-client
   npm run deploy-server
   ```

3. Create a `.env` file in the `server` directory with the following variables:

   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   SITE_URL=http://localhost:3000
   ```

4. Start the development server:
   ```
   npm start
   ```

## Usage

1. Register a new account or log in to an existing one.
2. On the home page, enter a long URL to create a shortened link.
3. View your shortened URLs in the table below, including click counts and creation dates.
4. Edit or delete your shortened URLs as needed.
5. Use the shortened URL to redirect to the original long URL.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.
