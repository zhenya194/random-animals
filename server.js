import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// DOGS API endpoint
app.get("/api/dog", async (req, res) => {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    return res.json({
      source: "DogCEO",
      url: response.data.message
    });
  } catch (error) {
    return res.json({
      source: "Fallback",
      url: "https://cataas.com/cat"
    });
  }
});

app.get("/", (req, res) => {
  res.send("Server is working...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});