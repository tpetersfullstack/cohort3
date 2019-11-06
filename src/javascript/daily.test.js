import functions from './daily.js'


/* Begin What’s my coverage Testing - October 18, 2019 *****************************************************************/



/* End What’s my coverage Testing - October 18, 2019 *******************************************************************/
/* Begin More Array Work Testing - October 16-17 ************************************************************************/

// // slice
// test('slice', () => {
//     expect(functions.mySlice()).toEqual();
// });

// // splice
// test('splice', () => {
//     expect(functions.mySplice()).toEqual();
// });

// forEach
test('forEach', () => {
    expect(functions.myForEach(["Jane", "Liam", "Emma", "Olivia", "Noah", "William", "Benjamin"])).toEqual(["Jane", "Liam", "Emma", "Olivia", "Noah", "William", "Benjamin"]);
});

// // map
// test('map', () => {
//     expect(functions.myMap()).toEqual();
// });

//reduce
test('reduce', () => {
expect(functions.myReduce()).toEqual(18);
});

// // filter
// test('filter', () => {
//      expect(functions.myFilter()).toEqual([4, 5]);
// });
// sort
test('sort', () => {
expect(functions.mySort()).toEqual([ 'Benjamin', 'Emma', 'Jane', 'Liam', 'Noah', 'Olivia', 'William' ]);
});
/* End More Array Work Testing - October 16-17 ************************************************************************/
/* Begin Prepare for Array Work - October 15, 2019 tests**********************************************************/
test('for of', () => {
    expect(functions.myForOf()).toEqual('HolaTuAmore');
});
test('for in', () => {
    expect(functions.myForIn()).toEqual('first last');
});
test('do while', () => {
    expect(functions.myDoWhile()).toEqual(10);
});
test('while loop', () => {
    expect(functions.myWhile()).toEqual(10);
});
test('for loop', () => {
    expect(functions.myFor()).toEqual(10);
});
/* End Prepare for Array Work - October 15, 2019 tests**********************************************************/

/* Begin makeEmailObj tests - Oct 11, 2019 *********************************************************************/
test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});
/* End makeEmailObj tests - Oct 11, 2019 ***********************************************************************/

//Begin makeEmailArr Tests - October 9, 2019 *******************************************************************/
test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});
//End makeEmailArr Tests - October 9, 2019 *******************************************************************/

//Begin AssertEquals Tests- October 7, 2019 *****************************************************************/
test('expectEquals1', () => {
    expect(functions.assertEquals(2, 2)).toBe(true); //These are assertions
});
test('expectEquals2', () => {
    expect(functions.assertEquals(2, 1)).toBe(false); //These are assertions
});
//End AssertEquals Tests- October 7, 2019 *****************************************************************/