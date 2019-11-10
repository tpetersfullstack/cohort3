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
const people = [
    { fname: "Alex", lname: "Smith", province: "BC", age: 33 },
    { fname: "Angela", lname: "Jones", province: "AB", age: 61 },
    { fname: "Anne", lname: "Bird", province: "SK", age: 35 },
    { fname: "Brent", lname: "Riddle", province: "MN", age: 79 },
    { fname: "Byron", lname: "Cardenas", province: "BC", age: 38 },
    { fname: "Carrie", lname: "Ramirez", province: "AB", age: 89 },
    { fname: "Cheryl", lname: "Glenn", province: "SK", age: 70 },
    { fname: "Dima", lname: "Curry", province: "MN", age: 67 },
    { fname: "Dustin", lname: "Bullock", province: "BC", age: 59 },
    { fname: "Eva", lname: "Keiths", province: "AB", age: 24 },
    { fname: "Faith", lname: "Liu", province: "SK", age: 46 },
    { fname: "Fawad", lname: "Bowman", province: "MN", age: 69 },
    { fname: "Forest", lname: "Vaughn", province: "BC", age: 52 },
    { fname: "Giovanni", lname: "Browning", province: "AB", age: 32 },
    { fname: "Greg", lname: "Hogan", province: "SK", age: 55 },
    { fname: "Harpreet", lname: "Ramsey", province: "MN", age: 18 },
    { fname: "Ian", lname: "Fitzgerald", province: "BC", age: 16 },
    { fname: "James", lname: "Kramer", province: "AB", age: 57 },
    { fname: "Jarvis", lname: "Ortega", province: "SK", age: 69 },
    { fname: "Jawad", lname: "Huerta", province: "MN", age: 35 },
    { fname: "Jinbong", lname: "Robinson", province: "BC", age: 26 },
    { fname: "Jingnan", lname: "Hatfield", province: "AB", age: 71 },
    { fname: "Joe", lname: "Banks", province: "SK", age: 37 },
    { fname: "Kristina", lname: "Dalton", province: "MN", age: 73 },
    { fname: "Latora", lname: "Matthews", province: "BC", age: 25 },
    { fname: "Lauren", lname: "McClure", province: "AB", age: 42 },
    { fname: "Licedt", lname: "Rasmussen", province: "SK", age: 30 },
    { fname: "Linden", lname: "Pierce", province: "MN", age: 68 },
    { fname: "Luis", lname: "Price", province: "BC", age: 23 },
    { fname: "Marcela", lname: "Perez", province: "AB", age: 20 },
    { fname: "Marilou", lname: "Graham", province: "SK", age: 32 },
    { fname: "Matt", lname: "Novak", province: "MN", age: 29 },
    { fname: "Monica", lname: "Giles", province: "BC", age: 34 },
    { fname: "Niloufar", lname: "Carson", province: "AB", age: 29 },
    { fname: "Omar", lname: "Olson", province: "SK", age: 69 },
    { fname: "Roger", lname: "Woodard", province: "MN", age: 84 },
    { fname: "Roman", lname: "Swanson", province: "BC", age: 21 },
    { fname: "Seun", lname: "Kelly", province: "AB", age: 60 },
    { fname: "Shane", lname: "Frost", province: "SK", age: 87 },
    { fname: "Steven", lname: "Haynes", province: "MN", age: 47 },
    { fname: "Thomas", lname: "Hart", province: "BC", age: 14 },
    { fname: "Trent", lname: "Kerr", province: "AB", age: 12 },
    { fname: "Darrell", lname: "Koch", province: "SK", age: 10 },
    { fname: "Tylor", lname: "Torres", province: "MN", age: 98 }
];
/* ************************************************************************************************************************ */
const functions = {
    /* Beginning of Callback Exercise (Part 1) - November 8, 2019*************************************************************/
    /* Now that you understand how to use a callback let’s start writing one. This may bend your mind just a little but it’s a good learning experience.
    // Hypothetically; You are working for a private company who looks after demographics of people living in BC and Alberta only.  The data you received is from the 4 Western provinces. You want to write a generalized function that loops through the data and only does a “callback” for the people from BC or Alberta.
    
    // Write two functions:
    // a generic function to process all of the people from the Western 4 provinces and only “callback” for people from BC or Alberta.  This is a generic function that will be used over and over again. How will we test this?
    // a function that will be the “callback” function that will create an array of full names (first and last together). How will we test this?
    
    Your tests should ensure each function works on it’s own and then that they work properly together.
    
    Watch the following youtube video for assistance in working through this exercise:
    
    This video explains one of the many uses of callbacks. It also starts to introduce the concepts of timing, sync / async processing.*/
    /* End of Callback Exercise (Part 1) - November 8, 2019*************************************************************/

    /* Beginning of More Array Exercises (Really) - November 6, 2019 *********************************************************/
    // Using one of the callback functions we researched in the last exercise (but may have not used previously)
    // create a new array for balances >= 1000 from the staff data

    /* End of More Array Exercises (Really) - November 6, 2019 *********************************************************/
    /* Beginning of November 5 Excercise, 2019 *****************************************************************************************/
    // Do not start this exercise on your own
    // This will be a team exercise that we will do together
    // In your src/javascript directory create a file called reference.test.js and paste this into it
    // Do not run it until we look at what it’s doing

    /* End of November 5 Excercise, 2019 *****************************************************************************************/
    /* Beginning of More Array Exercises - October 29, 2019 ****************************************************************/
    // Use only the JavaScript built-in functions listed below to complete this exercise. Make sure you write your tests first.
    // write a function to receive the same array (staff) and return the total of balances
    // write a function to receive the same array (staff) and return the average the balances
    totalOfBalances: (staff) => {
        let allBalances = [];
        for (let i in staff) {
            allBalances.push(staff[i].balance);
        }
        let totalOfBal = allBalances.reduce((accumulator, initialValue) => accumulator + initialValue);
        return totalOfBal;
    },
    averageOfBalances: (staff) => {
        let avgSum = [];
        for (let i in staff) {
            avgSum.push(staff[i].balance);
        }
        let myAvgSum = avgSum.reduce((accumulator, initialValue) => accumulator + initialValue);
        let arrCount = staff.length;
        return Math.round(myAvgSum/arrCount);
    },
    /* End of More Array Exercises - October 29, 2019 ********************************************************************/
    /* Beginning of loopStaff each / map - October 25, 2019 **************************************************************/
    // Do the same assignment again, but this time use callback functions
    // Use the ‘forEach’ and ‘map’ built-in functions    
    loopStaffForEach: (staff) => {
        //return '0';
        let staffEmailFE = [];
        staff.forEach(function (element) {
            let CompEmailFE = functions.makeEmailObj(element);
            staffEmailFE.push(CompEmailFE);
        });
        return staffEmailFE;
    },
    loopStaffMap: (staff) => {
        //return '0';
        let staffEmailM = [];
        staff.map(function (element) {
            let CompEmailM = functions.makeEmailObj(element);
            staffEmailM.push(CompEmailM);
        });
        return staffEmailM;
    },
    /* End of loopStaff each / map - October 25, 2019 ******************************************************************/
    /* Beginning ofloopStaff: in / of - October 24, 2019 ***************************************************************/
    //Do the same assignment as the last one using the two forms of the “for” statement
    //Create your own tests but use the function names that are provided below.
    loopStaffIn: (staff) => {
        let staffIn = [];
        for (const element in staff) {
            let emailsIn = functions.makeEmailObj(staff[element]);       //Call the makeEmailObj function, passing in each element of the staff array
            staffIn.push(emailsIn);
        };
        return staffIn;
    },
    loopStaffOf: (staff) => {
        let stafflSO = [];
        for (const element of staff) {
            let emailslSO = functions.makeEmailObj(element);       //Call the makeEmailObj function, passing in each element of the staff array
            stafflSO.push(emailslSO);
        }
        return stafflSO;
    },
    /* End ofloopStaff: in / of - October 24, 2019 *********************************************************************/
    /* Beginning of loopStaff - October 22, 2019 ***********************************************************************/
    //Write a function that will take an array and return an array of emails
    //The new function you are writing today will call makeEmailObj that you have written in a previous exercise.

    // loopStaff: (staff) => {                                     //Accept an Array
    //     let myLoopEmails = [];                                  //Create a New empty Array to store all the Emails
    //     functions.makeEmailObj(staff);                          //call the makeEmailObj function and pass in an object
    //     for (let i = 0; i < staff.length; i++) {                //Get the length of the array, use for loop
    //                                                             //Where is the String to push on the array?        
    //         let myLoopEmails = staff[i].push(staff);             //use push
    //     }                                                       //Did I write makeEmailObj wrong?
    //     return myLoopEmails;                                     //Return an Array of emails
    // },
    loopStaff: (staff) => {                                         //Accept an Array
        let staffEmail = [];                                        //Create a New empty Array to store the Emails
        staff.forEach(function (element) {                          //For each element in the staff array
            let CompEmail = functions.makeEmailObj(element);       //Call the makeEmailObj function, passing in each element of the staff array
            staffEmail.push(CompEmail);                            //Store each email created by the makeEmailObj in emailsEach, then push them on to the new array
        });
        return staffEmail;                                          //Return the new array with all the completed email addresses
    },
    /* End of loopStaff - October 22, 2019 *****************************************************************************/
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
        } else {
            console.log('the two values are not the same');
            console.log('p1-->' + num1)
            console.log('p2-->' + num2)
            return false;
        }
    },
    /* End of AssertEquals - October 7, 2019 *****************************************************/
};
export default functions;