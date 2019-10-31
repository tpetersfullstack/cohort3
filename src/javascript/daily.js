import { isModuleDeclaration } from "@babel/types";

//Create an Object containing many functions
const functions = {

    //add: (num1, num2) => num1 + num2,

    // assertEquals: (num1, num2) => {
    //     console.log("In assertEquals");
    //     return "";
    // },

    //Write the function makeEmailArr to build email addresses for the company
    makeEmailArr: (name) => {
        const x = name[0].toLowerCase() + '.' + name[1].toLowerCase() + '@' + 'evolveu' + '.ca';
        //return 0;
        return x;
    },
    // Write the function to format an email based on an object / map
    //Create the Stub to make sure the test gets here, then replace with actual code
    makeEmailObj: (name) => {
        //console.log('Hello World from emaiBuilder function');
        return (name.fname.toLowerCase() + '.' + name.lname.toLowerCase() + '@' + 'evolveu' + '.ca');
    },

};

//Prepare for Array Work
// Basics
// for
var i;
for (i = 0; i < 10; i++) {
    console.log('for loop');
};
// while
let x = 0;
while (x < 10) {
    console.log('while loop');
    x++;
};

// do while
let y = 0;
do {
    console.log('do while loop');
    y++;
}
while (y < 10);

// Next Level
// for in
const forInEx = { fname: 'first', lname: 'last' };
for (x in forInEx) {
    console.log('for in loop');
};

// for of
var ex = ['Hola', 'Tu', 'Amore'];
var f;
for (f of ex) {
    console.log('for of loop');
};


// and before this comment ---
export default functions;