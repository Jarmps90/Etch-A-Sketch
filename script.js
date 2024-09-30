const gridContainer = document.querySelector('#container');
const gridSizeBtn = document.querySelector('button');

function gridSize() {
    
    gridSizeBtn.addEventListener('click', () => {
        let size = prompt('Enter grid size!')
        if (size >= 100) {
            prompt('Way to big, choose another grid size!');
        }
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

gridCreate(16);