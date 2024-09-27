const gridContainer = document.querySelector('#container');



for (let i = 1; i < 17; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('rowDiv');
    gridContainer.appendChild(rowDiv);
    
    for (let j = 1; j < 13; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        rowDiv.appendChild(cell);
    };
};

