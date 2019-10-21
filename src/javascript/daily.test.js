/* *************************************************************************************** */
/* Jest is a "Test Runner" and an "Assertion Library" containing Methods to test your code */
/* *************************************************************************************** */
import functions from './daily.js'    //Gets/Tells jest where to look for your Stubs
//Asertion - EXPECT to be true
/* ******************************** Unit Test 1 ****************************************** */
test('myTest1', () => {               //test is a jest function w/methods
  expect(functions.add(2, 2)).toBe(4);
});

/* ******************************** Unit Test 2 ****************************************** */
test('myTest2', () => {
  expect(functions.assertEquals(2, 2)).toBe(4); //These are assertions
});