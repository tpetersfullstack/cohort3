// import { isModuleDeclaration } from "@babel/types";
/*	
	Write the function that will create this output:

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
//function? not functions? why?
//Create an Object containing many function
const functions = {

    add: (num1, num2) => num1 + num2,

    assertEquals: (num1, num2) => {
        console.log("In assertEquals");
        return "";
    },

};
//This should be a inside a function
// if (num1 !== num2) {
//     //console.log('*** the two values are not the same:' + '\n'  + 'p1--> a' + '\n' + 'p2--> b')
//     console.log('*** the two values are not the same:');
//     console.log(`    p1--> ${num1}`);
//     console.log(`    p2--> ${num2}`);
// }
//Is from the assignment or the Traversity Video?
export default functions;

//Where is this from?
//module.exports = functions;

// and before this comment ---

// assertEquals("a","b");
// assertEquals("a","a");
// assertEquals(1,2);
// assertEquals(2,2);
// assertEquals("2",2);
// assertEquals("This value","This value");