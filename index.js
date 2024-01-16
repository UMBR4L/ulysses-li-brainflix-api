const express = require("express");
const videosRouter = require("./routes/videos");

const app = express();
const PORT = 8080;
const api_key = "90c25d48-1d5d-4e82-9b59-84b4f73efb44";

app.use(express.json()); // handles JSON data in requests from videosRouter
app.use(express.static("./public/images")); // Serve images as static assets

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
