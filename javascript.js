addEventListener('DOMContentLoaded', () => {

let container = document.querySelector('container');
    container.setAttribute("class", "container");

// Default grid size
let gridSize = 16;

// Listeners to determine mouse button up or down, for drawing
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
        
            case 'clear':
                randomBtn.style.backgroundColor = "bisque";
                blackBtn.style.backgroundColor = "bisque";
                eraseBtn.style.backgroundColor = "bisque";
                drawGrid(container, gridSize);
                break;

            case 'resize':
                randomBtn.style.backgroundColor = "bisque";
                blackBtn.style.backgroundColor = "bisque";
                eraseBtn.style.backgroundColor = "bisque";
                
                do  {
                    gridSize = parseInt(prompt('How big your grid? No bigger than 100 boxes across please'));
                    if (!gridSize) {
                        alert("You didn't enter anything! There will be no grid for you!");
                        break;
                        }                   
                }      
                while ((gridSize > 100) || (Number.isInteger(gridSize) == false));

                drawGrid(container, gridSize);
              } } ) )

// set out initial default grid
drawGrid(container, gridSize    );


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
    
        b.addEventListener('mousemove', () => {
            if (colorType === 'random') {
                color = generateRanColor();
            }
            console.log("c", color);        

            if (mouseStatus === "down") 
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
                        }}
                return "#"+colorValueAsArray.join("");
        } //end function genRanColor


}) //end program


// set drawing state and create 'p' to display draw state
// let clickState = 'un-clicked';
// statusP = document.createElement('p');
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

// Listening to determining clicks on drawing grid to turn pen on and off
// let isColoringEnabled = false;
// let isMouseOverContainer = false;

// container.addEventListener('mouseenter', () =>{
//     isMouseOverContainer = true;})
// container.addEventListener('mouseleave', () =>{
//     isMouseOverContainer = false;})

// document.body.addEventListener('click', () => {
//     if (isMouseOverContainer === true) {
//         if (isColoringEnabled === false) {
//             isColoringEnabled = true;
//         } else {isColoringEnabled = false;
//         }}})