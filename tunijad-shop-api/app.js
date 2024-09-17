const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const protectedRoute = require("./routes/protected");

// Define the authenticate middleware function
const authenticate = (req, res, next) => {
  // Your authentication logic here
  next();
};

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/protected", authenticate, protectedRoute);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
