function createGrid(size) {
    const container = document.querySelector(".container");
    document.querySelectorAll(".container div").forEach(element => {
        container.removeChild(element);
    });
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.style.backgroundColor = "aqua";
        square.style.width = `${960 / size}px`;
        square.style.height = `${960 / size}px`;
        square.addEventListener("mouseover", () => square.style.backgroundColor = "black");
        container.appendChild(square);
    }
}

const btnGridSize = document.getElementById("grid-size-button");
btnGridSize.addEventListener("click", function() {
    const newSize = +prompt("Enter the new grid size", "");
    if (newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Warning: Size limit exceeded!");
    }
});
createGrid(16);