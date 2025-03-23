const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

// middleware
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://VisaFlow:${process.env.DB_PASS}@cluster0.2xsor.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Successfully database connected");
    app.listen(3000, () => {
      console.log(`Server is running on PORT 3000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
