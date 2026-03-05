import express from "express";
const app = express();
const PORT = 3000;

app.use(express.static("client"));

app.get("/cats", async (req, res) => {
  res.json({ url: "https://cataas.com/cat" });
});

app.get("/dogs", async (req, res) => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    res.json({ url: data.message });
  } catch (err) {
    console.log("Cannot fetch dog image")
    res.status(500).json({ error: "Cannot fetch dog image" });
  }
});

app.get("/rabbits", async (req, res) => {
  try {
    const response = await fetch("https://rabbit-api-two.vercel.app/api/random");
    const data = await response.json();
    res.json({ url: data.message });
  } catch (err) {
    console.log("Cannot fetch rabbit image")
    res.status(500).json({ error: "Cannot fetch rabbit image" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
