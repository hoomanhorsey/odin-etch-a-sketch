addEventListener('DOMContentLoaded', () => {



let container = document.querySelector('container');


// set out initial default grid
drawGrid(container, 16);

// drawing logic

drawColor();


// custom size grid button
let gridSizeBtn = document.querySelector('.gridSize');

gridSizeBtn.addEventListener('click', () => {
    
    let gridSize = 0;
    do  {
            gridSize = parseInt(prompt('How big your grid? No bigger than 100 boxes across please'));
        }
        
    while ((gridSize > 100) || (Number.isInteger(gridSize) == false));
    console.log ('out of loop?')

// call drawGrid with custom grid size
drawGrid(container, gridSize);

drawColor();



})


function drawGrid(container, gridSize) {
    
    // clears out container
    container.innerHTML = "";
    container.setAttribute("style",
    "display: flex; flex-wrap: wrap; \
    justify-content: center; align-items:center;")

    for (let i = 1; i < (gridSize +1); i++) {

        let rowContainer = document.createElement('div');
        rowContainer.setAttribute("style",
            "display:flex; flex-wrap: nowrap; flex-direction: row; \
            justify-content: center; align-items: center;")
        container.appendChild(rowContainer);
    
        for (let j = 1; j < (gridSize + 1); j++) {
    
            let squareDiv = document.createElement('div');
    
            // numbered squares, redundant
            squareDiv.innerHTML = i;
            
 
            
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

}



function drawColor() {

    let gridBox = document.querySelectorAll(".gridBox");


    gridBox.forEach(function(b, ){
    
        b.addEventListener('mouseover', () => {
            let colorValue = "blue";
    
            colorValueAsArray = ['0', '0', '0', '0', '0', '0'];
            
            for (let r = 0; r < 6; r++) {
                
                let colorValue = Math.floor(Math.random() * 16);
                console.log(colorValue);
    
                switch(colorValue) {
                    case 16:
                        colorValueAsArray[r] = 'G'; 
                        break;
                    case 15: 
                        colorValueAsArray[r] = 'F'; 
                        break;
                    case 14:
                        colorValueAsArray[r] = 'E'; 
                        break;
                    case 13:
                        colorValueAsArray[r] = 'D'; 
                        break;
                    case 12:
                        colorValueAsArray[r] = 'C'; 
                        break;
                    case 11:
                        colorValueAsArray[r] = 'B'; 
                        break;
                    case 10:
                        colorValueAsArray[r] = 'A'; 
                        break;
                    default:
                        colorValueAsArray[r] = colorValue; 
                        break;               
                    }   
                }
    
            console.log(colorValueAsArray);
            colorValue = colorValueAsArray.join("");
            console.log(colorValue);
    
            //let pink = "#ffe5ec";
    
            let gridColor = `#${colorValue}`;
            b.setAttribute("style",        
            `border-style: solid;border-color: black; border-width: 1px; \
            margin:0px; \
            min-width: 50px; min-height:50px;\
            flex: 0 0 50px;\
            background-color: ${gridColor}`)
    
        }) 
    })
    
    }

})
