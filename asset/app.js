//Carousel Forêt Enchantée
const imgFE = document.getElementById("carouselFE");
let pictureFE = [
    '../img/FE baston.jpg',
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
}, 2000);