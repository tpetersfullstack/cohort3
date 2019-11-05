const functions = {

    //Prepare for Array Work - Basics

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

        //var z = [];                                             //This is an Array
        var forInEx = { fname: 'first', lname: 'last' };      //This is an Object

        for (let x in forInEx) {
            console.log(x);
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
    
    for(g of ex) {
        //f.push(ex[h]);
        f = f + ex[h];
        h++;
    }
    return f;
},



    /* End of Prepare for Array Work - October 15, 2019 *************************************************/



    /* Beginning of makeEmailObj - Oct 11, 2019 ********************************************************/
    //Write a function that will receive an object / map. Create an evolveu email from the object
    // Write the function to format an email based on an object / map

    makeEmailObj: (myObject) => {
        return (myObject.fname.toLowerCase() + '.' + myObject.lname.toLowerCase() + '@' + 'evolveu' + '.ca');
    },


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

