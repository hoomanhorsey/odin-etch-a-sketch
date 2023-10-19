addEventListener('DOMContentLoaded', () => {



let gridSizeBtn = document.querySelector('.gridSize');
gridSizeBtn.addEventListener('click', () => {
    
    let gridSize = 0;

    do  {
            gridSize = parseInt(prompt('How big your grid?'));
            
        }
        
    while ((gridSize > 100) || (Number.isInteger(gridSize) == false));
       
        




let container = document.querySelector('container');


let rows = (gridSize +1 ) ;
let columns = (gridSize + 1);


for (let i = 1; i < rows; i++) {

    let rowContainer = document.createElement('div');
    rowContainer.setAttribute("style", "display:flex; flex-wrap: nowrap; flex-basis: 100%; flex-direction: row; justify-content: center; align-items: center")
    container.appendChild(rowContainer);

    for (let j = 1; j < columns; j++) {

        let squareDiv = document.createElement('div');

        // numbered squares, redundant
        squareDiv.innerHTML = i;
         container.setAttribute("style", "display: flex; flex-wrap: wrap; justify-content: center; align-items:center")
        
         // redundant?
        //squareDiv.setAttribute("style", "border-style: solid; border-color: black; border-width: 1px; margin:0px; min-width: 5px; min-height: 50px; max-width: 50px; max-height: 500p; flex: 0 0 50px")
        squareDiv.setAttribute("style", 
            "border-style: solid;border-color: black; border-width: 1px; \
            margin:0px; \
            min-width: 50px; min-height:50px;\
            flex: 0 0 50px")

        squareDiv.setAttribute("class", "gridBox")

        rowContainer.appendChild(squareDiv);        
    }
    console.log('next line)');
    let lineBreak = document.createElement('div');
    lineBreak.setAttribute("style", "flex-basis: 100%; height: 0px;")
    container.appendChild(lineBreak);
        
}

let gridBox = document.querySelectorAll(".gridBox");

gridBox.forEach(function(b){
    b.addEventListener('mouseover', () => {
        b.setAttribute("style",        
        "border-style: solid;border-color: black; border-width: 1px; \
        margin:0px; \
        min-width: 50px; min-height:50px;\
        flex: 0 0 50px;\
        background-color: #ffe5ec")
    }) 
})




})

})
