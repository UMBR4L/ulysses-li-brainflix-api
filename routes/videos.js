const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

const dataFilePath = "./data/videos.json";

// Function to read data from JSON file
const readData = () => {
  try {
    const data = fs.readFileSync(dataFilePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return [];
  }
};

// Function to write data to JSON file
const writeData = (data) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf8");
  } catch (err) {
    console.error(err);
  }
};

// GET /videos endpoint
router.get("/", (req, res) => {
  const data = readData();
  const videos = data.map(({ id, title, channel, image }) => ({
    id,
    title,
    channel,
    image,
  }));
  res.json(videos);
});

// GET /videos/:id endpoint
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const data = readData();
  const video = data.find((video) => video.id === id);
  if (video) {
    res.json(video);
  } else {
    res.status(404).send("Video not found");
  }
});

// POST /videos endpoint
router.post("/", (req, res) => {
  const { title, description } = req.body;
  const newVideo = {
    id: uuidv4(),
    title,
    description,
    image: "../../public/images/image6.jpeg", // hardcoded placeholder image path
    // Add other necessary fields with default values
    views: 0,
    likes: 0,
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: new Date().toISOString(),
    comments: [],
  };
  const data = readData();
  data.push(newVideo);
  writeData(data);
  res.status(201).json(newVideo);
});

module.exports = router;
