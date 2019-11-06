import functions from './daily.js'    //Tells jest and daily.test.js where to look for your Stub

test('myTest1', () => {               //test is a jest function w/methods
  expect(functions.add(2, 2)).toBe(4);
});

test('myTest2', () => {

  //expect(functions.assertEquals(2, 2)).toBe(4); //These are assertions
});


/* Begin makeEmailObj tests - Oct 11, 2019 *********************************************************************/
/*	
	Write the function to format an email based on an object / map
*/

test('email builder from an object / map', () => {
  const name = { fname: 'first', lname: 'last' };
  expect(functions.makeEmailObj(name))
      .toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
      .toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
      .toEqual("bill.smith@evolveu.ca");
});

/* End makeEmailObj tests - Oct 11, 2019 *********************************************************************/

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

//Begin makeEmailArr Tests - October 9, 2019 *******************************************************************/

//Begin AssertEquals Tests- October 7, 2019 **************************************************************/
/* Write a function to format an email based on an array */

//Write tests 

// End AssertEquals Tests- October 7, 2019 **************************************************************/

