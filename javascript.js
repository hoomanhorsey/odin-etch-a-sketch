addEventListener('DOMContentLoaded', () => {

let container = document.querySelector('container');
    container.setAttribute("class", "container");

// set out initial default grid
drawGrid(container, 16);

// set drawing state and create 'p' to display draw state
let clickState = 'un-clicked';
statusP = document.createElement('p');

// drawing logic

container.addEventListener('click', drawColor);

// custom size grid button
let gridSizeBtn = document.querySelector('.gridSize');

    gridSizeBtn.addEventListener('click', () => {
    
        let gridSize = 0;
        do  {
                gridSize = parseInt(prompt('How big your grid? No bigger than 100 boxes across please'));
                if (!gridSize) {
                    alert("You didn't enter anything! There will be no grid for you!");
                    break;
                    }                   
            }      
        while ((gridSize > 100) || (Number.isInteger(gridSize) == false));
        
        // call drawGrid with custom grid size
            drawGrid(container, gridSize);

        }) // end gridSizeBtn Event Listener

function drawGrid(container, gridSize) {
    // clears out container
    container.innerHTML = "";

      for (let i = 1; i < (gridSize +1); i++) {

        let rowContainer = document.createElement('div');

        let rowHeight = Math.floor(1000 / gridSize);
        rowContainer.style.height = `${rowHeight}px`;
        console.log(rowHeight);

        rowContainer.setAttribute("class", "rowContainer");
            
        container.appendChild(rowContainer);
    
        for (let j = 1; j < (gridSize + 1); j++) {
    
            let squareDiv = document.createElement('div');
    
            // numbered squares, redundant
            //squareDiv.textContent = i;          
            let boxSize = Math.ceil(1000 / gridSize);  //use math.ceil or floor I'm not sure
             
            squareDivSize = {
                width: `${boxSize}px`,
                height: `${boxSize}px`                 
                };

            squareDiv.setAttribute("class", "gridBox gridBoxBackgroundColor");
           
            squareDiv.style.width = squareDivSize.width;
            squareDiv.style.height = squareDivSize.height;
            
            rowContainer.appendChild(squareDiv);          
        }
        let lineBreak = document.createElement('div');
        lineBreak.setAttribute("class", "lineBreak")
        container.appendChild(lineBreak);
        }
    } // end function drawGrid

function drawColor(clickState) {

    //toggleClickState()
   
    let gridBoxes = document.querySelectorAll(".gridBox");
    
    gridBoxes.forEach(function(b){
    
        b.addEventListener('mouseover', function colorBox() {
    
            colorValueAsArray = ['0', '0', '0', '0', '0', '0'];
            
            for (let r = 0; r < 6; r++) {
                
                let colorValue = Math.floor(Math.random() * 16);
    
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
    
            colorValue = colorValueAsArray.join("");

            dynamicBoxStyle = {
                backgroundColor: `#${colorValue}`                
                };
            b.style.backgroundColor = dynamicBoxStyle.backgroundColor;
            })      
        })
    
    } //end function drawColor




}) //end program



/*
function toggleClickState() {

    let statusDiv = document.querySelector('statusDiv');

    if (clickState === 'un-clicked') {
        statusP.textContent = "";
        clickState ='clicked';      
        statusP.textContent = clickState;
        container.appendChild(statusP);     
    } else {
        statusP.textContent = "";
        clickState = 'un-clicked';
        statusP.textContent = clickState;
        statusDiv.appendChild(statusP);       
        }
    } // end function toggleClickState
*/