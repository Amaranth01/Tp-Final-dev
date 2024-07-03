//Carousel Forêt Enchantée
const imgFE = document.getElementById("carouselFE");
let pictureFE = [
    '../img/FE baston.jpg',
    '../img/FE camp.jpg',
    '../img/FE camp2.jpg',
    '../img/FE camp3.jpg',
];

let positionFE = 0;

imgFE.src = pictureFE[0];

const moveRightFE = () => {
    if (positionFE >= pictureFE.length - 1) {
        positionFE = 0
        imgFE.src = pictureFE[positionFE];
        return;
    }
    imgFE.src = pictureFE[positionFE + 1];
    positionFE++;
}
setInterval(function () {
    moveRightFE()
}, 3000);

//Carousel Village Enchanté
const imgVE = document.getElementById("carouselVE")
let pictureVE = [
    '../img/VE camp.jpg',
    '../img/VE echassier.jpg',
    '../img/VE groupe.jpg',
    '../img/VE oclap.jpg',
];

let positionVE = 0;

imgVE.src = pictureVE[0];

const moveRightVE = () => {
    if (positionVE >= pictureVE.length - 1) {
        positionVE = 0
        imgVE.src = pictureVE[positionVE];
        return;
    }
    imgVE.src = pictureVE[positionVE + 1];
    positionVE++;
}
setInterval(function () {
    moveRightVE()
}, 3000);

// Carousel Citrouille bleue
const imgCB = document.getElementById("carouselCB");
let pictureCB = [
    '../img/CB sorcière.jpg',
    '../img/CB cimetière.jpg',
    '../img/CB troll.jpg',
    '../img/CB vampire.jpg',
];

let positionCB = 0;

imgCB.src = pictureCB[0];
const moveRight = () => {
    if (positionCB >= pictureCB.length - 1) {
        positionCB = 0
        imgCB.src = pictureVE[positionCB];
        return;
    }
    imgCB.src = pictureCB[positionCB + 1];
    positionCB++;
}
setInterval(function () {
    moveRight()
}, 3000);