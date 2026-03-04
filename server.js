import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// DOGS API endpoint
app.get("/api/cat", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.thedogapi.com/v1/images/search",
      {
        headers: {
          "x-api-key": process.env.THAT_DOG_API
        },
        timeout: 5000
      }
    );

    if (response.status === 200) {
      return res.json({
        source: "TheCatAPI",
        url: response.data[0].url
      });
    }

    throw new Error("Non-200 response");

  } catch (error) {
    console.log("TheDogAPI failed → fallback to Dogceo API");

    return res.json({
      source: "Dogceo",
      url: "https://dog.ceo/api/breeds/image/random"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});