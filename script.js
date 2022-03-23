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

    //  ON HOVER
    screenDiv.addEventListener('mousemove', function(e){
        e.target.style.background = 'rgba(0,0,0,0.8)';
    });


// BUTTON
const btnClear = document.querySelector(".btn-clear");




btnClear.addEventListener('click', function(){

    if (btnClear.textContent == "Clear"){
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




