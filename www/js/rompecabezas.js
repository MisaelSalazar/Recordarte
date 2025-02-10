const puzzle = document.getElementById("puzzle");
const imgSrc = "../img/paisaje.png"; // Cambia esta URL por la de tu imagen
let pieces = [];

for (let i = 0; i < 9; i++) {
    let piece = document.createElement("div");
    piece.classList.add("piece");
    piece.style.backgroundImage = `url(${imgSrc})`;
    piece.style.backgroundPosition = `${-(i % 3) * 100}px ${-Math.floor(i / 3) * 100}px`;
    piece.draggable = true;
    piece.setAttribute("data-index", i);
    pieces.push(piece);
}

pieces = pieces.sort(() => Math.random() - 0.5);
pieces.forEach(piece => puzzle.appendChild(piece));

let dragged = null;

puzzle.addEventListener("dragstart", (e) => {
    dragged = e.target;
});

puzzle.addEventListener("dragover", (e) => {
    e.preventDefault();
});

puzzle.addEventListener("drop", (e) => {
    if (e.target.classList.contains("piece")) {
        let tempIndex = dragged.getAttribute("data-index");
        dragged.setAttribute("data-index", e.target.getAttribute("data-index"));
        e.target.setAttribute("data-index", tempIndex);

        let tempHTML = dragged.outerHTML;
        dragged.outerHTML = e.target.outerHTML;
        e.target.outerHTML = tempHTML;
    }
});