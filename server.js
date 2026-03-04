import express from "express";
const app = express();
const PORT = 3000;

app.use(express.static("client"));

app.get("/cat", async (req, res) => {
  try {
    const response = await fetch("https://cataas.com/cat?json=true");
    const data = await response.json();
    res.json({ url: "https://cataas.com" + data.url });
  } catch (err) {
    res.status(500).json({ error: "Cannot fetch cat image" });
  }
});

app.get("/dog", async (req, res) => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    res.json({ url: data.message });
  } catch (err) {
    res.status(500).json({ error: "Cannot fetch dog image" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
