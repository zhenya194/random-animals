import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// API endpoint
app.get("/api/cat", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search",
      {
        headers: {
          "x-api-key": process.env.THAT_CAT_API
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
    console.log("TheCatAPI failed → fallback to Cataas API");

    return res.json({
      source: "Cataas",
      url: "https://cataas.com/cat"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});