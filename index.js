// Import the Express framework
const express = require("express");

// Create an Express application
const app = express();

// Define a simple GET endpoint at "/"
app.get("/", (req, res) => {
  // Respond with JSON showing that the API is working
  res.json({ status: "ok" });
});

// Define a GET endpoint that returns a greeting
app.get("/hello", (req, res) => {
  // Get the query parameter 'name' or default to "world"
  const name = req.query.name || "world";

  // Return a message using the name
  res.json({ message: `Hello ${name}` });
});

// Export the app so tests can use it *without starting the server*
module.exports = app;