import { isModuleDeclaration } from "@babel/types";

/* Sample data for the next few exercises. */

const data = {
    staff: [
        { fname: "Jane", lname: "Smith", balance: 10 },
        { fname: "Liam", lname: "Henry", balance: 1000 },
        { fname: "Emma", lname: "Jones", balance: 1330 },
        { fname: "Olivia", lname: "Notly", balance: 310 },
        { fname: "Noah", lname: "Ho", balance: 503 },
        { fname: "William", lname: "Lee", balance: 520 },
        { fname: "Benjamin", lname: "Amis", balance: 150 },
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};

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

	/* Write the function to build email addresses for the company. */

    loopStaff: () => {
        console.log('Hello World from loopStaff function');
        //return (name.fname.toLowerCase() + '.' + name.lname.toLowerCase() + '@' + 'evolveu' + '.ca');
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

// Read the documentation on the following and create examples of each one:

// slice

// splice

// forEach
// map
// reduce
// filter
// sort


// and before this comment ---
export default functions;