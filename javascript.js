// javascript.js


function makeGrid (gridSize) {
    // let gridSize = 16;
    let gridWidthHeight = document.documentElement.clientHeight - 50; //50 accounts for button
    if (document.documentElement.clientWidth < gridWidthHeight)
        gridWidthHeight = document.documentElement.clientWidth;
    let gridItemWidthHeight = gridWidthHeight / gridSize;

    gridContainer = document.querySelector("#gridContainer");
    gridContainer.style.height = gridWidthHeight + "px";
    gridContainer.style.width = gridWidthHeight + "px";


    for (let i = 0; i < gridSize * gridSize; i++) {
        let gridItem = document.createElement("div");
        gridItem.setAttribute("id", i);
        gridItem.style.height = gridItemWidthHeight + "px";
        gridItem.style.width = gridItemWidthHeight + "px";
        gridItem.classList.add("gridItem");
        gridContainer.appendChild(gridItem);

        gridItem.addEventListener("mouseover", (function (index) {
            return function () {
                hoverFunction(index);
            };
        })(i));
    }
}


function hoverFunction (i) {
    let gridItem = document.getElementById(i.toString());
    gridItem.classList.add("colored");
}

numSquaresButton = document.querySelector("button");
numSquaresButton.addEventListener("click", getSquares);

function getSquares () {
    let numSquaresPerSide = Number(prompt("How many squares per side?"));
    if (numSquaresPerSide > 100)
        numSquaresPerSide = 100;

    gridContainer = document.querySelector("#gridContainer");
    gridContainer.innerHTML = "";

    makeGrid(numSquaresPerSide);
}

makeGrid(16);