// Carousel Citrouille bleue
const imgCB = document.getElementById("carouselCB");
let pictureCB = [
    '../img/CB sorcière.jpg',
    '../img/CB cimetière.jpg',
    '../img/CB troll.jpg',
    '../img/CBvampire.jpg',
];

let positionCB = 0;

imgCB.src = pictureCB[0];
const moveRight = () => {
    if (positionCB >= pictureCB.length - 1) {
        positionCB = 0
        imgCB.src = pictureCB[positionCB];
        return;
    }
    imgCB.src = pictureCB[positionCB + 1];
    positionCB++;
}
setInterval(function () {
    moveRight()
}, 2000);