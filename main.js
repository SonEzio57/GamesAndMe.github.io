const mainCanvas = document.getElementById("canvas");
const context = mainCanvas.getContext("2d");

let initialX;
let initialY;

const mouseClick = (evt) => {

    initialX = evt.offsetX;
    initialY = evt.offsetY;
    dibujar(initialX, initialY);

}