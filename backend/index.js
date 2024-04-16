const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect(
  "mongodb+srv://ParmodKumar:ELVPVlZ91P6Jt4MO@chatterup.c6jztom.mongodb.net/E-Commerce?retryWrites=true&w=majority"
);

// API creation
app.get("/", (req, res, next) => {
  res.send("Express App is Running");
});

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on PORT " + port);
  } else {
    console.log("Error : " + error);
  }
});
