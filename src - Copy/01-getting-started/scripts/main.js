import functions from './functions.js';

// idNumber.addEventListener('change', (() => {
//     idNumberSize.textContent = functions.size(idNumber.value);      //this is a copy from size
// }));
/* ****************************************** Calculator Assignment *********************************************************** */
// Add the Calculator Event listeners
idAdd.addEventListener('click', () => {
    let userinput1 = parseInt(idNum1.value);
    let userinput2 = parseInt(idNum2.value);
    idAnswer.value = functions.sum(userinput1, userinput2);
});
idSub.addEventListener('click', () => {
    let userinput1 = parseInt(idNum1.value);
    let userinput2 = parseInt(idNum2.value);
    idAnswer.value = functions.sub(userinput1, userinput2);
});
idMult.addEventListener('click', () => {
    let userinput1 = parseInt(idNum1.value);
    let userinput2 = parseInt(idNum2.value);
    idAnswer.value = functions.mult(userinput1, userinput2);
});
idDiv.addEventListener('click', () => {
    let userinput1 = parseInt(idNum1.value);
    let userinput2 = parseInt(idNum2.value);
    idAnswer.value = functions.div(userinput1, userinput2);
});
/* ****************************************** Canadian Tax Calculator Assignment ************************************************ */
// Add the event listener
idCalcTax.addEventListener('click', () => {
    let taxInput;
    //return 0;
    taxInput = Number(idGrIn.value);
    idTax.value = functions.cndTaxCalc(taxInput).toFixed(2);
});
/* ********************************************** Working with Arrays Assignment ************************************************** */
/* 4 Event listeners for 4 buttons */
idArrAdd.addEventListener('click', () => {
    let myNewArr = [];
    //return 0;
    //messageArea.value = 0;
    //taxInput = Number(idGrIn.value);
    //idTax.value = functions.cndTaxCalc(taxInput).toFixed(2);
    //messageArea.value = functions.workingWArray(idWwArr);    
    let myArrAdd = Number(idWwArr.value);
    //console.log(myArrAdd);   
    myNewArr = functions.workingWArray(myArrAdd);
    //messageArea = myNewArr;                                         //call the add to array funct(pass in the Number) return the new array
    //console.log(myNewArr);                                                      //Again it is returning NaN check the ids
});
idArrShow.addEventListener('click', () => {
    let arrShow = [6, 7, 8, 9, 10];
    idMyArr.value = arrShow;
    //messageArea.value = arrShow;
});
idArrTotal.addEventListener('click', () => {
    var total = [0, 1, 2, 3].reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
    idMyArr.value = total;

});
idArrClear.addEventListener('click', () => {
    let arrClear = [6, 7, 8, 9, 10];
    console.log(arrClear);
    //idMyArr.value = "";
    arrClear.length = 0;
    console.log(arrClear);
});
/* ******************************************* Working with Dictionaries Assignment *********************************************** */
idlookUp.addEventListener('click', () => {
    return 0;
    //let taxInput;
    //taxInput = Number(idGrIn.value);
    //idTax.value = functions.cndTaxCalc(taxInput).toFixed(2);
});