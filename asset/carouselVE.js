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
}, 2000);