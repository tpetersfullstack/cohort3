//console.log('Hello World from basic.js');
//why can't i declare variables in here?
//let myVar;
let myVar = document.getElementById("myInput").value;



//Add an Event Listener
document.getElementById("myButton").addEventListener("click", onButtonClicked);

//I must call the size function from the click event of the button

function size(myInt) {
    if (myInt >= 1 && myInt <= 9) {
        console.log('Inside if');
    } else if (myInt >= 10 && myInt <= 19) {
        console.log('First else if');
    } else if (myInt >= 20 && myInt <= 100) {
        console.log('Second else if');
    } else if (myInt > 100){
        console.log('Third else if');
    } else {
        console.log('Inside else');
    }
};

//Create function 'onButtonClicked'
function onButtonClicked() {
console.log(myVar);
console.log("I'm in the click event");   
};

