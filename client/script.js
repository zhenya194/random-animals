const dog = document.getElementById("dog");
const cat = document.getElementById("cat");

const dogButton = document.getElementById("dogButton");
const catButton = document.getElementById("catButton");


if (dogButton) {
    dogButton.onclick = async () => {
        const res = await fetch("/dogs");
        const data = await res.json();
        dog.src = data.url;
    };
}
if (catButton) {
    catButton.onclick = () => {
        cat.src = "https://cataas.com/cat?" + Date.now();
    };
}