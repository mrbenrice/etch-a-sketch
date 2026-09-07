let sketchBoard = document.querySelector('.sketchboard');
let resetBtn = document.querySelector('.reset');
let colorPicker = document.querySelector('.color-picker');
let pixelNumberSelector = document.querySelector('.pixel-number');
let pixelNumberDisplay = document.querySelector('.pixel-number-display');
let isMouseDown = false;
let pixelColor = 'black';
let boardSize = 32;

pixelNumberSelector.addEventListener('input', () => {
    boardSize = pixelNumberSelector.value;
    pixelNumberDisplay.textContent = `${boardSize} x ${boardSize}`;
    createPixels(boardSize)
})

colorPicker.addEventListener('change', () => {
    pixelColor = colorPicker.value;
})

resetBtn.addEventListener('click', () => {
    boardSize = 16
    createPixels(boardSize);
    pixelColor = 'black';
    pixelNumberSelector.value = 16;
    pixelNumberDisplay.textContent = `${boardSize} x ${boardSize}`;
    colorPicker.value = '#000'
})

sketchBoard.addEventListener('mousedown', () => isMouseDown = true);
window.addEventListener('mouseup', () => isMouseDown = false);
createPixels(boardSize);

function createPixels(num) {
    sketchBoard.innerHTML = ''
    for (let i = 0; i < num*num; i++) {
        let pixel = document.createElement('div');
        pixel.style.width = `${400/num}px`;
        pixel.style.height = `${400/num}px`;
        pixel.classList.add('pixel');

            pixel.addEventListener('click', () => {
            if (isMouseDown) {
                pixel.style.backgroundColor = pixelColor;
            }
        })

        pixel.addEventListener('mouseover', () => {
            if (isMouseDown) {
                pixel.style.backgroundColor = pixelColor;
            }
        })
        sketchBoard.append(pixel);
    }
    let pixels = document.querySelectorAll('.pixel');
}