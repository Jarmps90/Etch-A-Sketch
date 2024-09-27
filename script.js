const gridContainer = document.querySelector('#container');


function gridCreate() { 
for (let i = 1; i < 10; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('rowDiv');
    gridContainer.appendChild(rowDiv);
    
    for (let j = 1; j < 10; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        rowDiv.appendChild(cell);
    };
};
};

gridCreate();