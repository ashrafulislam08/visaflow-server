const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const visaHandler = require("./routeHandler/visaHandler");
const applicationHandler = require("./routeHandler/applicationHandler");
const cors = require("cors");
const app = express();

// middleware
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    `mongodb+srv://VisaFlow:${process.env.DB_PASS}@cluster0.2xsor.mongodb.net/visaflow?retryWrites=true&w=majority&appName=Cluster0`
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

app.use("/visas", visaHandler);
app.use("/apply", applicationHandler);
