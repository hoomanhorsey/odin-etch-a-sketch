addEventListener('DOMContentLoaded', () => {

let container = document.querySelector('container');
    container.setAttribute("class", "container");

let gridSize = 16;

let isActiveB = true;
let isActiveE = true;
let isActiveC = true;

let isColoringEnabled = false;

// Determining whether mouse is over container
let isMouseOverContainer = false;

container.addEventListener('mouseenter', () =>{
    isMouseOverContainer = true;
    }
        )
container.addEventListener('mouseleave', () =>{
    isMouseOverContainer = false;
    }
        )

document.body.addEventListener('click', () => {
    if (isMouseOverContainer === true) {
        if (isColoringEnabled === false) {
            isColoringEnabled = true;
        } else {
            isColoringEnabled = false;

        }
     }})

let mouseStatus = 'up';

container.addEventListener('mousedown', () => {
     mouseStatus = 'down';
     console.log(mouseStatus)
     });

 container.addEventListener('mouseup', () => { 
     mouseStatus = 'up';
     console.log(mouseStatus)
     });

// choose menu item

selectedMenuBtn = document.querySelectorAll('.menuBtn');

let blackBtn = document.querySelector('#blackBtn');
let randomBtn = document.querySelector('#randomBtn');
let eraseBtn = document.querySelector('#eraseBtn');


selectedMenuBtn.forEach((e) =>
    e.addEventListener('click', (e)=> {
        switch(e.target.textContent){
            case 'black':
                
                e.target.style.backgroundColor = "lightblue";
                randomBtn.style.backgroundColor = "bisque";
                eraseBtn.style.backgroundColor = "bisque";

                isColoringEnabled = false;

                draw("black");
                break;
            case 'random':
                e.target.style.backgroundColor = "lightblue";
                blackBtn.style.backgroundColor = "bisque";
                eraseBtn.style.backgroundColor = "bisque";
                let colorType = "random";
                draw("random", colorType);    
                break;
                
            case 'eraser':
                e.target.style.backgroundColor = "lightblue";
                randomBtn.style.backgroundColor = "bisque";
                blackBtn.style.backgroundColor = "bisque";
                draw("white");
                break;
        
            case 'refresh':
                randomBtn.style.backgroundColor = "bisque";
                blackBtn.style.backgroundColor = "bisque";
                eraseBtn.style.backgroundColor = "bisque";

                drawGrid(container, gridSize);
                //drawRefresh();      
                break;
        }  
    }
    )
)


// set out initial default grid
drawGrid(container, 16);

// set drawing state and create 'p' to display draw state
let clickState = 'un-clicked';
statusP = document.createElement('p');



// custom size grid button
let gridSizeBtn = document.querySelector('.gridSize');

    gridSizeBtn.addEventListener('click', () => {
    
        //let gridSize = 0;
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

        rowContainer.setAttribute("class", "rowContainer");
            
        container.appendChild(rowContainer);
    
        for (let j = 1; j < (gridSize + 1); j++) {
    
            let squareDiv = document.createElement('div');
           
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



function draw(color, colorType) {
    
    let gridBoxes = document.querySelectorAll(".gridBox");
 
    gridBoxes.forEach(function(b){     
    
        b.addEventListener('mouseover', () => {
            if (colorType === 'random') {
                color = generateRanColor();
            }
            console.log("c", color);        

            if (/*(isColoringEnabled === true) && (*/mouseStatus === "down") 
                {
                    b.style.backgroundColor = color;
                }      
            })
        }
    )}






function generateRanColor() {

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
                
                return "#"+colorValueAsArray.join("");




} //end function genRanColor





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