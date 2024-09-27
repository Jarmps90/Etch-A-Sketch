const gridContainer = document.querySelector('#container');

function gridSize() {
    const gridSizeBtn = document.querySelector('button');
    gridSizeBtn.addEventListener('click', () => {
        prompt('Enter grid size!')
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
gridSize()
gridCreate(13);