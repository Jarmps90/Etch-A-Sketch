const gridContainer = document.querySelector('#container');
//const gridDiv = document.createElement('div');
//gridDiv.classList.add('gridDiv');
//gridContainer.appendChild(gridDiv);

for (let i = 1; i < 16; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('rowDiv');
    gridContainer.appendChild(rowDiv);
};

/*for (let i = 1; i < 16; i++) {
    const columDiv = document.createElement('div');
    columDiv.classList.add('columDiv');
    gridContainer.appendChild(columDiv);
};*/