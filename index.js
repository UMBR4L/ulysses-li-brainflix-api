const express = require("express");
const cors = require("cors");
require('dotenv').config();
const videosRouter = require("./routes/videos");

const app = express();
const PORT = process.env.PORT || 8081;
const api_key = process.env.api_key;

app.use(express.json()); // handles JSON data in requests from videosRouter
app.use(express.static("./public/images")); // Serve images as static assets
app.use(cors()) // enable servers with any origin to make requests

// api_key validation
app.use((req, res, next) => {
  if (req.query.api_key !== api_key) {
    return res.status(401).send("You must provide a valid API key.");
  }

  next();
});

app.use("/videos", videosRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
