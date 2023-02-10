console.log('This is JS')

//* Option 1: Directly write down on HTML 

//* Option 2: add onclick function
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//* Option 3:
const makeBlueButton = document.getElementById('make-blue');
console.log(makeBlueButton);
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//* Option 3:
const purpleButton = document.getElementById('make-purple');
    purpleButton.onclick = function makePurple(){
        document.body.style.backgroundColor = 'purple';
    }