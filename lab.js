const plate = document.getElementById("Plate");
const noBtn = document.getElementById("noBtn");

// Initial center
plate.style.position = "absolute";
plate.style.left = (window.innerWidth / 2 - plate.offsetWidth / 2) + "px";
plate.style.top  = (window.innerHeight / 2 - plate.offsetHeight / 2) + "px";

function movePlateRandom() {
    const maxX = window.innerWidth - plate.offsetWidth;
    const maxY = window.innerHeight - plate.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    plate.style.left = randomX + "px";
    plate.style.top = randomY + "px";

    console.log("Plate moved!");
}

// CLICK event lang
noBtn.addEventListener("click", movePlateRandom);
