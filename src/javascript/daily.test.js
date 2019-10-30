/* *************************************************************************************** */
/* Jest is a "Test Runner" and an "Assertion Library" containing Methods to test your code */
/* *************************************************************************************** */
import functions from './daily.js'    //Gets/Tells jest where to look for your Stubs
//Assertion - EXPECTED to be true
// /* ******************************** Unit Test 1 ****************************************** */
// test('myTest1', () => {               //test is a jest function w/methods
//   expect(functions.add(2, 2)).toBe(4);
// });

// /* ******************************** Unit Test 2 ****************************************** */
// test('myTest2', () => {
//   expect(functions.assertEquals(2, 2)).toBe(4); //These are assertions
// });

// test('emailBuilderTest', () => {
//   expect(functions.emailBuilder('larry', 'shumlich')).toEqual('l.shumlich@evolveu.ca');
// }); 

/*
    Write a function to format an email based on an array.
*/
test('email builder from an array', () => {

    const name = ["first", "last"];

    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");

    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");

    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});