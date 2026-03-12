const cat = document.getElementById("cat");
const dog = document.getElementById("dog");
const rabbit = document.getElementById("rabbit");

const catButton = document.getElementById("catButton");
const dogButton = document.getElementById("dogButton");
const rabbitButton = document.getElementById("rabbitButton");

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
        const res_rabbit = await fetch("/rabbits");
        const data_rabbit = await res_rabbit.json();
        rabbit.src = data_rabbit.url;
    };
}
