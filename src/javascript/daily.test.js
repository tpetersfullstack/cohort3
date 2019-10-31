import functions from './daily.js'    //Tells jest and daily.test.js where to look for your Stub

// test('myTest1', () => {               //test is a jest function w/methods
//   expect(functions.add(2, 2)).toBe(4);
// });

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

test('email builder from an object/map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});