// JS file for Etch A Sketch Project (index.html)- The Odin Project

const screenDiv = document.querySelector(".div-screen"); //select div-screen

function getSize(){
    let size = prompt("Please enter a number of rows", 16);
    if (size <= 100){
        createGrid(size);
    } else {
        alert("please enter a number between 1 & 100");
        getSize();
    }
};

window.onload = getSize();

function createGrid(size){
    let sizeOfSquare = (size) => 960 / size; //determines size of each child div & puts value in sizeOfSquare

    for (let i = 0; i< (size*size); i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("square");
        screenDiv.style.cssText = `grid-template-columns: repeat(${size}, 1fr)`;
        newDiv.style.height = sizeOfSquare(size); 
        newDiv.style.width = sizeOfSquare(size);
        screenDiv.appendChild(newDiv);
    }
}

screenDiv.addEventListener('mouseover', function(e){
    e.target.style.background = "rgba(0,0,0,0.8)";
});

const btnClear = document.querySelector(".btn-clear"); 
const secControls = document.querySelector(".sec-controls"); //select section with  buttons

secControls.addEventListener('click', function(e){ //add event listener to section

    if (e.target.textContent == "RGB"){ // if clicked on RGB 
        screenDiv.addEventListener('mouseover', function(e){
            let r = Math.floor(Math.random() * (255 - 0 + 1));
            let g = Math.floor(Math.random() * (255 - 0 + 1));
            let b = Math.floor(Math.random() * (255 - 0 + 1));
            e.target.style.background = `rgba(${r},${g},${b},0.8)`;
        });
    } else if (e.target.textContent == "Black"){ // if clicked on Black 
        screenDiv.addEventListener('mouseover', function(e){
            e.target.style.background = "rgba(0,0,0,0.8)";
        });
    } else if (e.target.textContent == "Clear"){  // if clicked on Clear
        const sqDivs = document.querySelectorAll(".square");
        for (let i=0; i<sqDivs.length;i++){
            screenDiv.removeChild(sqDivs[i]);
        }
        btnClear.textContent = "Create New Grid";
    } else {
    btnClear.textContent = "Clear"
    getSize();
    }
});




