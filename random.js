
//이미지 랜덤//
var imageSources = [
    "img/main_10.png",
    "img/main_20.png",
    "img/main_30.png",
    "img/main_40.png",
    "img/main_50.png",
    "img/main_60.png"
];

function getRandomImage() {
    var randomIndex = Math.floor(Math.random() * imageSources.length);
    return imageSources[randomIndex];
}

function displayRandomImage() {
    var randomImageContainer = document.querySelector(".randomContainer");
    if (randomImageContainer) {
        var img = document.createElement("img");
        img.src = getRandomImage();
        img.classList.add("random");
        randomImageContainer.innerHTML = '';
        randomImageContainer.appendChild(img);
    } else {
        console.error("randomContainer not found");
    }
}

setInterval(displayRandomImage, 1300);




window.addEventListener('DOMContentLoaded', (event) => {
    document.styleSheets[0].insertRule('@import url("mystyle.css")', 0);
});

