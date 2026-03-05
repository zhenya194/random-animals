const cat = document.getElementById("cat");
const dog = document.getElementById("dog");
const rabbit = document.getElementById("rabbit");

const catButton = document.getElementById("catButton");
const dogButton = document.getElementById("dogButton");
const rabbitButton = document.getElementById("rabbit");

if (catButton) {
    catButton.onclick = () => {
        cat.src = "https://cataas.com/cat?" + Date.now();
    };
}

if (dogButton) {
    dogButton.onclick = async () => {
        const res = await fetch("/dogs");
        const data = await res.json();
        dog.src = data.url;
    };
}

if (rabbitButton) {
    rabbitButton.onclick = async () => {
        const res = await fetch("/rabbits");
        const data = await res.json();
        rabbit.src = data.url;
    };
}
