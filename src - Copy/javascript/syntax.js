/*--------------- Copy this section into your code syntax.js as comments -------- */
//Write Functions here
const functions = {

    // define attributes / variables
    //number
    myNumber: () => {
        var myNum = 1;
        console.log('This is my number:' + ' ' + myNum);
    },
    //string
    myString: () => {
        var myStr = 'This is My String';
        console.log(myStr);
    },
    //boolean
    myBoolean: () => {
        var myBool = true;
        if (myBool) {
            console.log('My Boolean is:' + ' ' + myBool);
        }
    },
    //array
    myArray: () => {
        var myArr = [1, 2, 3, 4, 5];
        console.log('This is my Array:' + ' ' + myArr);
    },
    //dictionary / objects
    myObject: () => {

    },
    //undefined
    myUndefined: () => {
        var k;
        console.log(k);
    },
    //sample if / else
    myIfElse: () => {
        var myVar = 1;
        if (myVar) {
            console.log('My variable is:' + ' ' + myVar);
        }
    },
    //functions
    //parameters
    myFunction: (p1, p2) => {
        console.log(p1 + p2);
    },
    //returns
    myNumber: (q1, q2) => {
        console.log(q1 + q2);
        return q1 + q2;
    },
    //arrays
    //add to the front
    myArrF: () => {
        let myArr2 = [1, 2, 3, 4];
        myArr2.unshift(0);
        console.log(myArr2);
    },
    //add to the end
    myArrB: () => {
        let myArr1 = [1, 2, 3, 4];
        myArr1.push(5);
        console.log(myArr1);
    },
    //update values
    myArrUp: () => {
        let myArr3 = [2, 4, 6, 8];
        const myMap = myArr3.map(x => x * 2);
        console.log(myMap);
    },
    //loops 
    //for
    myFor: () => {
        for (let i = 0; i < 2; i++) {
            console.log(i);
        };
    },
    //for/in
    myForIn: () => {
        var a = [1, 2, 3, 4, 5];
        for (var x in a) {
            console.log(x);
        };
    },

    //while
    myWhile: () => {
        let x = 0;
        while (x < 10) {
            x++;
        };
        return x;
    },

    //do while
    myDoWhile2: () => {
        let y = 0;
        do {
            y++;
        }
        while (y < 10);
        return y;
    },

    //forEach (with array and function)
    myForEach: () => {
   var myArrFE = [1, 2, 3, 4, 5];
   myArrFE.forEach(x => console.log(x));
    },

    //Objects / Dictionaries
    //declare object
    myObject: () => {
        var myObj9 = { fname: 'first', lname: 'last' };
        console.log(myObj9);
    },
    //lookup key to retrieve value
    mySearch: () => {

    },
    /* --------------- Copy ends here -------- */
};