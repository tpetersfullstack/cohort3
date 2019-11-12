import functions from './functions'

// test('Check the sizes', () => {
//     expect(functions.size(-1)).toBe("small"); // Consider the edge cases
//     expect(functions.size(0)).toBe("small");
//     expect(functions.size(10)).toBe("medium");
//     expect(functions.size(15)).toBe("medium");
//     expect(functions.size(20)).toBe("large");
//     expect(functions.size(2000000)).toBe("large");
// });
/* *********************************************************** Calculator Tests ***************************************************/
// test('Sum', () => {
//     expect(functions.add(1,2)).toBe(3);
//     expect(functions.add(101,202)).toBe(303);
// });
// test('Subtract', () => {
//     expect(functions.sub(10,2)).toBe(8);
//     expect(functions.sub(202,102)).toBe(100);
// });
// test('Multiply', () => {
//     expect(functions.mult(5,5)).toBe(25);
//     expect(functions.mult(101,202)).toBe(303);
// });
// test('Division', () => {
//     expect(functions.div(25,5)).toBe(5);
//     expect(functions.div(100,5)).toBe(20);
// });
/* *********************************************** Canadian Tax Calculator *********************************************************/

test('Tax Calculator', () => {
    //expect(functions.cndTaxCalc(0)).toEqual(0);
    expect(functions.cndTaxCalc(1)).toEqual(0.15);
    expect(functions.cndTaxCalc(2)).toEqual(0.30);
//     expect(functions.cndTaxCalc(0)).toEqual("small");
//     expect(functions.cndTaxCalc(10)).toEqual("medium");
//     expect(functions.cndTaxCalc(15)).toEqual("medium");
//     expect(functions.cndTaxCalc(20)).toEqual("large");
});