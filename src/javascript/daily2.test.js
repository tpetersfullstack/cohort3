import functions from './daily2.js'
/* Begin Prepare for Array Work - October 15, 2019 tests**********************************************************/

test ('for of', () => {
    expect (functions.myForOf()).toEqual('HolaTuAmore');
});

test ('for in', () => {
expect (functions.myForIn()).toEqual('first last');
});

test ('do while', () => {
    expect (functions.myDoWhile()).toEqual(10);
});

test ('while loop', () => {
    expect (functions.myWhile()).toEqual(10);

});
test ('for loop', () => {
    expect (functions.myFor()).toEqual(10);
    
});
/* End Prepare for Array Work - October 15, 2019 tests**********************************************************/


/* Begin makeEmailObj tests - Oct 11, 2019 *********************************************************************/
/*Write the function to format an email based on an object / map */
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