async function getDog() {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    document.getElementById("dog").src = data.message;
}