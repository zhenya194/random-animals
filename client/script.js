async function getCat() {
  const response = await fetch(""); //TODO Add link
  const data = await response.json();
  document.getElementById("cat").src = data.url;
}