const gridContainer = document.querySelector('#container');
const gridSizeBtn = document.querySelector('#gridSizeBtn');
const resetBtn = document.querySelector('#resetBtn');

function randomColorGenerator() {
    const randomColor ='#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
};

function gridCreate(size) { 
    
    for (let i = 1; i < size; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('rowDiv');
    gridContainer.appendChild(rowDiv);
    
    for (let j = 1; j < size; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        rowDiv.appendChild(cell);
    }; gridColor();
};
};

function gridSize() {
    
    
    gridSizeBtn.addEventListener('click', () => {
        while (gridContainer.hasChildNodes()) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
        let size = prompt('Enter grid size between 1 - 100!');
        if (size >= 100 || size < 1) {
            prompt('This is invalid number. Enter number within 1 - 100.');
            if (size > 100 || size < 1) {
                return alert('Invalid number');
            }
        }; gridCreate(size);
 });
};
   
function gridColor() {

    const cell = document.querySelectorAll('.cell');
    cell.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = randomColorGenerator();
            }
        );
    }
    );
};




function colorReset() {
    
    resetBtn.addEventListener('click', () => {
        while (gridContainer.hasChildNodes()) {
                gridContainer.removeChild(gridContainer.firstChild);
            }
        gridCreate(20);
    })
};
    
    



gridCreate(20);
gridSize()
colorReset();


    


