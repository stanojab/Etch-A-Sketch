const container = document.getElementById("container");

function createGrid(size) {
  const squareSize = 960 / size;
  container.innerHTML = "";
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }
}
createGrid(20);

const newGridButton = document.getElementById("newGrid");
newGridButton.addEventListener("click", () => {
  let newSize = prompt("Enter new grid size (1-100):");
  if (newSize >= 1 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});
