async function getDog() {
  const response = await fetch("https://random-animals-ijxz.onrender.com/");
  const data = await response.json();
  document.getElementById("dog").src = data.url;
}