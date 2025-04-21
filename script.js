// Reference html element
const resizeBtn = document.querySelector("#resizeBtn");
const container = document.querySelector("#container");

// Create Square Function
function createSquare(size) {
    container.innerHTML = "";
    const squareSize = 512 / size;

    // for loop to create square
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.boxSizing = "border-box";
        square.style.border = "1px solid #ccc";
        container.appendChild(square);
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        });
    }
}
createSquare(16);


resizeBtn.addEventListener("click", () => {
    let value = prompt("Enter a value between 1 and 100");
    if (value < 1 || value > 100) {
        alert("Enter a value between 1 and 100");
    }
    createSquare(value);
})