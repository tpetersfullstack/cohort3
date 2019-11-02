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
// test('email builder from an array', () => {
//     const name = ["first", "last"];
//     expect(functions.makeEmailArr(name))
//         .toEqual("first.last@evolveu.ca");
//     expect(functions.makeEmailArr(["First", "Last"]))
//         .toEqual("first.last@evolveu.ca");
//     expect(functions.makeEmailArr(["Bill", "Smith"]))
//         .toEqual("bill.smith@evolveu.ca");
// });

// test('email builder from an object/map', () => {
//     //console.log("Hello World from daily.test.js");
//     const name = { fname: 'first', lname: 'last' };
//     expect(functions.makeEmailObj(name))
//         .toEqual("first.last@evolveu.ca");
//     expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
//         .toEqual("first.last@evolveu.ca");
//     expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
//         .toEqual("bill.smith@evolveu.ca");
// });
/*	
	Write the function to build email addresses for the company.
*/

test('email builder for company', () => {
    const staffEmail = functions.loopStaff(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});
