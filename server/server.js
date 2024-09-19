const express = require("express");
const path = require("path");
const cors = require("cors");
const connectDb = require("./utils/dbconnect");
const errorHandler = require("./middleware/error");
const viewsHandler = require("./routes/views");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to database
connectDb();

// API routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tinylink", require("./routes/tinyLink"));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));

// Handle views and redirects
app.use(viewsHandler);

// Error handler
app.use(errorHandler);

// Catch-all handler for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port : ${port}`));