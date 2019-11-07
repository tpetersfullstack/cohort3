/*
    Sample data for the next few exercises.
*/
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
/* ************************************************************************************************************************ */
const functions = {

    /* Beginning of November 5, 2019 *****************************************************************************************/
    //Do not start this exercise on your own
    //This will be a team exercise that we will do together
    //In your src/javascript directory create a file called reference.test.js and paste this into it
    //Do not run it until we look at what it’s doing



    /* End of November 5, 2019 *****************************************************************************************/

    /* Beginning of More Array Exercises - October 29, 2019 ****************************************************************/



    /* End of More Array Exercises - October 29, 2019 ****************************************************************/

    /* Beginning of loopStaff each / map - October 25, 2019 ************************************************************/
    //Do the same assignment again, but this time use callback functions
    //Use the ‘forEach’ and ‘map’ built-in functions




    /* End of loopStaff each / map - October 25, 2019 ******************************************************************/

    /* Beginning ofloopStaff: in / of - October 24, 2019 ***************************************************************/
    //Do the same assignment as the last one using the two forms of the “for” statement
    //Create your own tests but use the function names that are provided below.


    /* End ofloopStaff: in / of - October 24, 2019 *****************************************************************/

    /* Beginning of loopStaff - October 22, 2019 ***********************************************************************/
    //Write a function that will take an array and return an array of emails
    //The new function you are writing today will call makeEmailObj that you have written in a previous exercise.

    // loopStaff: (staff) => {                                     //Accept an Array
    //     let myLoopEmails = [];                                  //Create a New empty Array to store all the Emails
    //     functions.makeEmailObj(staff);                          //call the makeEmailObj function and pass in an object
    //     for (let i = 0; i < staff.length; i++) {                //Get the length of the array, use for loop
    //                                                             //Where is the String to push on the array?        
    //         let myLoopEmails = staff[i].push(staff);    //use push
    //     }                                                       //Did I write makeEmailObj wrong?
    //     return myLoopEmails;                                 //Return an Array of emails
    // },

    loopStaff: (staff) => {
        let staffEmail = [];
        staff.forEach(function (element) {
          let emailsEach = functions.makeEmailObj(element);
          staffEmail.push(emailsEach);
        });
        return staffEmail;
      },

    // makeEmailObj: (myObject) => {
    //     return (myObject.fname.toLowerCase() + '.' + myObject.lname.toLowerCase() + '@' + 'evolveu' + '.ca');

    /* End of loopStaff - October 22, 2019 ****************************************************************************/

    /* Beginning of What’s my coverage - October 18, 2019 **************************************************************/
    // Run your coverage report and send the output to Larry as a pdf file. 
    // Follow these steps:
    // run your coverage report: npm test -- --coverage
    // look at the html file created: code/<<your repository>>/coverage/lcov-report/index.html
    // view in the browser. A double click on the file should do it
    // right-click and select the “Print” option
    // print to pdf
    // email Larry the pdf (we will be doing this a few more times in the following week
    /* End of What’s my coverage - October 18, 2019 ********************************************************************/
    /* Beginning of More Array Work - October 16-17 ********************************************************************/
    //Read the documentation on the following and create examples of each one:
    // slice
    mySlice: () => {
        var mySliceArr = [1, 2, 3, 4, 5];
        const mySliceArrRet = mySliceArr.slice(3);
        return mySliceArrRet;
    },
    // splice
    mySplice: () => {
        var mySpliceArr = [1, 2, 3, 4, 5];
        const mySpliceArrRet = mySpliceArr.splice(1, 0, 6);
        return mySpliceArr;
    },
    // forEach
    myForEach: () => {
        //return 0; Test Fails
        //return 1; Test Passes
        var staffNames = ["Jane", "Liam", "Emma", "Olivia", "Noah", "William", "Benjamin"];
        var staffFirstNames = [];
        staffNames.forEach(function (firstName) {
            staffFirstNames.push(firstName);
        })
        return staffFirstNames;
    },
    // map
    myMap: () => {
        var myMapArr = [1, 2, 3, 4, 5];
        const myMapArrRet = myMapArr.map(dave => dave * 2);
        return myMapArrRet;
    },
    // reduce
    myReduce: () => {
        const reduceArray = [1, 2, 3, 4, 5];
        const reducedArray = reduceArray.reduce((accumulator, currentValue) => accumulator + currentValue);
        return reducedArray;
    },
    // filter
    myFilter: () => {
        var filterEx = [1, 2, 3, 4, 5];
        const filterRet = filterEx.filter(myFiltered => myFiltered > 3);       //just the way it is
        return filterRet;
    },
    // sort
    mySort: () => {
        var mySortArray = [];
        var sortNames = ["Jane", "Liam", "Emma", "Olivia", "Noah", "William", "Benjamin"];
        mySortArray = sortNames.sort();
        return mySortArray;
    },
    /* End of More Array Work - October 16-17 ****************************************************************************/
    /* Beginning of Prepare for Array Work - October 15, 2019 ************************************************************/
    //Let’s dig deeper into arrays. Read the documentation on the following and create examples of each one:
    //Basics
    // for
    myFor: () => {
        var i;
        for (i = 0; i < 10; i++) {
        }
        return i;
    },
    // while
    myWhile: () => {
        let x = 0;
        while (x < 10) {
            x++;
        };
        return x;
    },
    // do while
    myDoWhile: () => {
        let y = 0;
        do {
            y++;
        }
        while (y < 10);
        return y;
    },
    // Next Level
    // for in
    myForIn: () => {
        let z = "";
        var forInEx = { fname: 'first', lname: 'last' };      //This is an Object
        for (let x in forInEx) {
            //console.log(x);
            z = forInEx.fname + " " + forInEx.lname;
            //Later x + lname
            //z = x + "" + forInEx.lname;
        };
        return z;
    },
    // for of
    myForOf: () => {
        var ex = ['Hola', 'Tu', 'Amore'];
        var f = [];
        var g;  //
        var h = 0;  //counter
        for (g of ex) {
            //f.push(ex[h]);
            f = f + ex[h];
            h++;
        }
        return f;
    },
    /* End of Prepare for Array Work - October 15, 2019 *************************************************/
    /* Beginning of makeEmailObj - Oct 11, 2019 ********************************************************/
    // Write a function that will receive an object / map. Create an evolveu email from the object
    // Write the function to format an email based on an object / map
    makeEmailObj: (myObject) => {

        let myNewMakeEmailObj = myObject.fname + '.' + myObject.lname + '@' + 'evolveu' + '.ca'; //Returns a string
       return myNewMakeEmailObj.toLowerCase();
    },
    /* End of makeEmailObj - Oct 11, 2019 **************************************************************/
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
        if (num1 == num2) {
            return true;
        } else if (num1 != num2) {
            console.log('the two values are not the same');
            console.log('p1-->' + num1)
            console.log('p2-->' + num2)
            return false;
        }
        console.log("In assertEquals");
        return "";
    },
    /* End of AssertEquals - October 7, 2019 *****************************************************/
};
export default functions;