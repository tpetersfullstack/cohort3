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

/* Beginning of November 5, 2019 ************************************************************************/


/* End of November 5, 2019 ******************************************************************************/



/* Beginning of More Array Exercises - October 29, 2019 ************************************************/
// Use only the JavaScript built-in functions listed below to complete this exercise. Make sure you write your tests first.
// write a function to receive the same array (staff) and return the total of balances
// write a function to receive the same array (staff) and return the average the balances


/* End of More Array Exercises - October 29, 2019 ******************************************************/



/* Beginning of loopStaff each / map - October 25, 2019 ************************************************/

/* End of loopStaff each / map - October 25, 2019 ******************************************************/

/* Beginning of loopStaff: in / of - October 24, 2019 **************************************************/
// Do the same assignment as the last one using the two forms of the “for” statement
// Create your own tests but use the function names that are provided below.

/* End of loopStaff: in / of - October 24, 2019 ********************************************************/


/* Beginning of loopStaff - October 22, 2019 ***********************************************************/
// Write a function that will take an array and return an array of emails
// The new function you are writing today will call makeEmailObj that you have written in a previous exercise

loopStaff: () => {
    console.log('Hello World from loopStaff function');
    //return (name.fname.toLowerCase() + '.' + name.lname.toLowerCase() + '@' + 'evolveu' + '.ca');
},

/* End of loopStaff - October 22, 2019 *****************************************************************/

/* Beginning What’s my coverage - October 18, 2019 *****************************************************/


/* End of What’s my coverage - October 18, 2019 ********************************************************/


/* Beginning of More Array Work - October 16-17 ********************************************************/
// Read the documentation on the following and create examples of each one:

// slice

// splice

// forEach
// map
// reduce
// filter
// sort

/* End of More Array Work - October 16-17 **************************************************************/

/* Beginning of Prepare for Array Work - October 15, 2019 **********************************************/

//Prepare for Array Work - Basics

// for
var i;
for(i = 0; i< 10; i++) {
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

/* End of Prepare for Array Work - October 15, 2019 *************************************************/

/* Beginning of makeEmailObj - Oct 11, 2019 ********************************************************/
//Write a function that will receive an object / map. Create an evolveu email from the object
// Write the function to format an email based on an object / map
makeEmailObj: (name) => {
    //console.log('Hello World from emaiBuilder function');
    return (name.fname.toLowerCase() + '.' + name.lname.toLowerCase() + '@' + 'evolveu' + '.ca');
},


/* End of of makeEmailObj - Oct 11, 2019 ***********************************************************/



/* Beginning of makeEmailArr - October 9, 2019 *****************************************************/
// Write a function that will receive an array
// The first entre in the array is the first name
// The second entre is the last name
// The array only has one person in it
// Create an evolveu email from the array

makeEmailArr: (name) => {
    const x = name[0].toLowerCase() + '.' + name[1].toLowerCase() + '@' + 'evolveu' + '.ca';
    //return 0;
    return x;
},

/* End of makeEmailArr - October 9, 2019 ***********************************************************/

/* Beginning of AssertEquals - October 7, 2019 *****************************************************/
/* Write the function that will create this output:
        
*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---
// Write a function that will receive two parameters
// The function will compare the parameters and do the following:
//if the two parameters are equal, log nothing and return true
//if the two parameters are not equal, log to the console the following and return false:
//“ *** the two values are not the same” and also log the two parameters as follows:
//“p1-->” parameter 1
//“p2-->” parameter 2

assertEquals: (num1, num2) => {
    console.log("In assertEquals");
        return "";
},

};

/* End of AssertEquals - October 7, 2019 *****************************************************/
// and before this comment ---

// I am assuming these are the calls
// assertEquals("a","b");
// assertEquals("a","a");
// assertEquals(1,2);
// assertEquals(2,2);
// assertEquals("2",2);
// assertEquals("This value","This value");

export default functions;