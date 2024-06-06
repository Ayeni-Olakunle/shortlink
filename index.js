const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;
const cors = require("cors");
const app = express();
const connectDB = require("./links/config/DB");

connectDB()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE, PUT");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.use("/", require("./links/router/urlRouter"));

app.listen(port, () => {
    console.log("listening on port " + port);
});