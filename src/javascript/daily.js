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
};
// and before this comment ---

/*	
	Write the function to format an email based on an object / map
*/


//Create the Stub to make sure the test gets here
//Then replace with actual code
// const functions = {
//     emailBuilder: (fname, lname) => {
//         return ('l.shumlich@evolveu.ca');
//     },
// };

export default functions;