addEventListener('DOMContentLoaded', () => {

let container = document.querySelector('container');
    container.setAttribute("class", "container");

// Default grid size
let gridSize = 16;

// Listeners to determine mouse button up or down, for drawing
let mouseStatus = 'up';

container.addEventListener('mousedown', () => {
     mouseStatus = 'down';
     });

 container.addEventListener('mouseup', () => { 
     mouseStatus = 'up';
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
                break;

            case 'save image':
                saveImage();
                break;
            case 'load image':
                loadImage();
                break

            case 'save to file':
                let file = saveImage();
                console.log(file);
                generateTextFileUrl(file);
              } } ) )

// set out initial default grid
drawGrid(container, gridSize);


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
            squareDiv.setAttribute('id', `${i}, ${j}`)
           
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
            // Silence this console.log, however note that the function fires all colors all the time
            // This is a bug, but it doesn't affect functionality at the moment. 
            // But I keep the console.log, deactivated, as a note to self
            // console.log("c", color);        

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


function saveImage() {

    // reinsert functionality once you have figured out the save file.
    //let fileName = prompt("Please enter a file name")
    //fileName = fileName + ".etch"
    //alert(fileName);

    const saveFile = {fileType:'etch', imageSize:gridSize, imageData:[]}
    //console.log(saveFile)

    container = document.querySelector('.container');
    gridBoxes = document.querySelectorAll('.gridBox');
    gridBoxes.forEach( (e) => {
        saveFile['imageData'].push(e.style.backgroundColor);
        }
            );

    
    for (let i = 1; i < (gridSize +1); i++) {
        //rowContainer = document.querySelector('.rowContainer');
        //console.log(rowContainer);

        for (let j = 1; j < (gridSize + 1); j++) {
            //gridBox = document.querySelector('.gridBox');
            //console.log(gridBox);   

        }

    }

    const saveFileJSON = JSON.stringify(saveFile);
    return saveFileJSON;

    const objectAgain = JSON.parse(saveFileJSON);

    } //end function saveImage

function loadImage(saveFile) {
    //saveFile = {fileType:'etch', imageSize:2, imageData:['rgb(114, 33, 173)', '', '', 'rgb(216, 46, 252)']}
    
    // check file

    if (saveFile['fileType'] != 'etch') {
        alert('Sorry. Incorrect file type');
    }


    drawGrid(container, saveFile.imageSize);

    gridBoxes = document.querySelectorAll('.gridBox');
    let colorRef = 0;
    gridBoxes.forEach( (e) => {
           {
                                    
                e.style.backgroundColor = saveFile.imageData[colorRef];
                colorRef++;
        }
       }   );
    }


// A global variable should be defined to hold the URL for the file to be downloaded
// This is good practice as if many links are being generated or the link is being 
// regularly updated, you don't want to be creating new variables every time, wasting memory
var textFileUrl = null;

// Function for generating a text file URL containing given text
function generateTextFileUrl(txt) {
    let fileData = new Blob([txt], {type: 'text/plain'});
    // If a file has been previously generated, revoke the existing URL
    if (textFileUrl !== null) {
        window.URL.revokeObjectURL(textFileUrl);
    }
    textFileUrl = window.URL.createObjectURL(fileData);
    // Returns a reference to the global variable holding the URL
    // Again, this is better than generating and returning the URL 
    // itself from the function as it will eat memory if the file contents are large or regularly changing
    document.getElementById('downloadLink').href = textFileUrl;
    
    //document.getElementById('downloadLink').href = textFileUrl;

    //return textFileUrl;
    };
    // Generate the file download URL and assign it to the link
    // Wait until the page has loaded! Otherwise the download link element will not exist
    // window.addEventListener("load", function(){
        
    //     document.getElementById('downloadLink').href = generateTextFileUrl("boo hoo");
    // });






// Get references to the input element and the pre element for displaying file contents.
const fileInput = document.getElementById('fileInput');
const fileContents = document.getElementById('fileContents');

// Add an event listener to the file input element.
fileInput.addEventListener('change', function() {
    const selectedFile = fileInput.files[0];

    if (selectedFile) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const contents = event.target.result;
            const objectAgain = JSON.parse(contents);
            loadImage(objectAgain);
            //fileContents.textContent = contents;
        };

        reader.readAsText(selectedFile);
        console.log(selectedFile);
    } else {
        fileContents.textContent = 'No file selected.';
    }})








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
        // }}})
