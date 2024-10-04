const gridContainer = document.querySelector('#container');
const gridSizeBtn = document.querySelector('button');



function gridSize() {
    
    gridSizeBtn.addEventListener('click', () => {
        while (gridContainer.hasChildNodes()) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
        gridCreate(size = prompt('Enter grid size!'));
        if (size >= 100) {
            prompt('Way to big, choose another grid size!');
        }
        gridColor()
    } 
    );
    
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
    };
};


};

function gridColor() {

    const cell = document.querySelectorAll('.cell');
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    
    cell.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = '#' + randomColor;
        }
        );
    }
    );
};





gridCreate(20);
gridSize();
gridColor();

    


