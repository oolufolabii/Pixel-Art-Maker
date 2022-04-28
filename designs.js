// Select color input
let color = document.getElementById("colorPicker");

//Const size input
const sizePicker = document.getElementById("sizePicker");

//Canvas
const canvasCreation = document.getElementById("pixelCanvas");

// Select size input
let inputHeight = document.getElementById("inputHeight");
let inputWidth = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()
function makeGrid(evt) {
    // Your code goes here!
    evt.preventDefault();

    resetGrid();
    

    const height = inputHeight.value;
    const width = inputWidth.value;
    // nested loop
    for (let i = 1; i <= height; ++i) {
        //creating row element
        const row = document.createElement("tr");
        for (let j = 1; j <= width; ++j) {
        // creating column element
            const column = document.createElement("td");
            column.id = "column-ij";
            // append it to row element
            row.appendChild(column);
        }
        // append row element to table
        canvasCreation.appendChild(row);
    }

}

//Clear the grid
function resetGrid(){
    const allRows = document.querySelectorAll("tr");
    allRows.forEach((row) => {
        row.remove();
    });
}

//Listen for the submit button to create canvas
sizePicker.addEventListener("submit", makeGrid);

//
canvasCreation.addEventListener("click", function(evt){
    evt.target.style.backgroundColor = color.value;
});