const dog = document.getElementById("dog");
const cat = document.getElementById("cat");

document.getElementById("dogButton").onclick = async () => {
    const res = await fetch("/dogs");
    const data = await res.json();
    dog.src = data.url;
};

document.getElementById("catButton").onclick = async () => {
    const res = await fetch("/cats");
    const data = await res.json();
    cat.src = data.url;
};