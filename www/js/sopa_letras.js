const words = ["HOGAR", "FAMILIA", "CIELO", "FLOR", "FELIZ"];
const gridSize = 10;
const grid = document.getElementById("grid");
const wordListElement = document.getElementById("word-list");
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let selectedCells = [];

function createGrid() {
    let gridArray = Array(gridSize).fill().map(() => Array(gridSize).fill(""));

    words.forEach(word => {
        let placed = false;
        while (!placed) {
            let row = Math.floor(Math.random() * gridSize);
            let col = Math.floor(Math.random() * (gridSize - word.length));
            if (gridArray[row].slice(col, col + word.length).every(cell => cell === "")) {
                for (let i = 0; i < word.length; i++) {
                    gridArray[row][col + i] = word[i];
                }
                placed = true;
            }
        }
    });

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (gridArray[i][j] === "") {
                gridArray[i][j] = letters[Math.floor(Math.random() * letters.length)];
            }
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = gridArray[i][j];
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener("click", () => selectCell(cell));
            grid.appendChild(cell);
        }
    }

    words.forEach(word => {
        let listItem = document.createElement("li");
        listItem.textContent = word;
        listItem.dataset.word = word;
        wordListElement.appendChild(listItem);
    });
}

function selectCell(cell) {
    if (selectedCells.includes(cell)) {
        cell.classList.remove("selected");
        selectedCells = selectedCells.filter(c => c !== cell);
    } else {
        cell.classList.add("selected");
        selectedCells.push(cell);
    }
    checkWord();
}

function checkWord() {
    let selectedText = selectedCells.map(cell => cell.textContent).join("");
    if (words.includes(selectedText)) {
        selectedCells.forEach(cell => cell.classList.add("found"));
        document.querySelector(`[data-word='${selectedText}']`).style.textDecoration = "line-through";
        selectedCells = [];
    }
}

createGrid();