// server.js
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); // Make sure to use 'bcryptjs'
const cors = require("cors");
require("dotenv").config(); // To use environment variables

const app = express();
const PORT = process.env.PORT || 5000; // Use PORT from environment variables

// Middleware
app.use(cors());
app.use(express.json());

const users = [
  { email: "user@example.com", password: bcrypt.hashSync("password123", 8) },
];

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      { email: user.email },
      process.env.JWT_SECRET || "my_jwt_secret",
      {
        expiresIn: "1h",
      }
    );
    res.json({ email: user.email, token });
  } else {
    res.status(401).send("Invalid credentials");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
