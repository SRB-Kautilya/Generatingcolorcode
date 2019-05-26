//assigning constants
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const hexBtn = document.querySelector('.hexBtn');

const bodycgn = document.querySelector('body');

const hex = document.querySelector('.hex');

// Listening to the click
hexBtn.addEventListener('click',getHex);

//function for generating color code
function getHex() {
    let hexcol = '#';
    
    for(i=0;i<6;i++){
        let random = Math.floor(Math.random()*hexNumbers.length)
        hexcol +=hexNumbers[random];
        bodycgn.style.backgroundColor = hexcol;
        hex.innerHTML = hexcol;
    }
      
}
