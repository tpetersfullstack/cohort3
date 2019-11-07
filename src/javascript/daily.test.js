import functions from './daily.js'
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

/* Beginning of loopStaff: in / of Testing - October 24, 2019 ***************************************************************/


/* End ofloopStaff: in / of Testing - October 24, 2019 *****************************************************************/
/* Beginning of loopStaff Testing - October 22, 2019 ***********************************************************************/
test('email builder for company', () => {
    const staffEmail = functions.loopStaff(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});
/* End of loopStaff Testing - October 22, 2019 ****************************************************************************/
/* Begin What’s my coverage Testing - October 18, 2019 *****************************************************************/
/* End What’s my coverage Testing - October 18, 2019 *******************************************************************/
/* Begin More Array Work Testing - October 16-17 ************************************************************************/
// slice
test('slice', () => {
   expect(functions.mySlice()).toEqual([4, 5]);
}),
// splice
test('splice', () => {
    expect(functions.mySplice()).toEqual([1, 6, 2, 3, 4, 5]);
});
// forEach
test('forEach', () => {
    expect(functions.myForEach(["Jane", "Liam", "Emma", "Olivia", "Noah", "William", "Benjamin"])).toEqual(["Jane", "Liam", "Emma", "Olivia", "Noah", "William", "Benjamin"]);
});
// map
test('map', () => {
    expect(functions.myMap()).toEqual([2, 4, 6, 8, 10]);
});
//reduce
test('reduce', () => {
expect(functions.myReduce()).toEqual(15);
});
// filter
test('filter', () => {
     expect(functions.myFilter()).toEqual([4, 5]);
});
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