async function getCat() {
  const response = await fetch("https://random-animals-ijxz.onrender.com/");
  const data = await response.json();
  document.getElementById("cat").src = data.url;
}