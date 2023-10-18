addEventListener('DOMContentLoaded', () => {



let container = document.querySelector('container');

let rows = 16;
let columns = 16;

for (let i = 1; i < rows; i++) {

    for (let j = 1; j < columns; j++) {

        let squareDiv = document.createElement('div');

        squareDiv.innerHTML = i;
        squareDiv.style.display = "inline";
        container.setAttribute("style", "display: flex; flex-flow: row wrap")

        squareDiv.setAttribute("style", "border-style: solid; border-color: black; margin:5px; min-width: 5px; min-height: 50px; max-width: 50px; max-height: 500p; flex: 1 100%")
        squareDiv.setAttribute("class", "gridBox")

        container.appendChild(squareDiv);        
    }
    console.log('next line)');
    let lineBreak = document.createElement('br');
    container.appendChild(lineBreak);
        
}





})
