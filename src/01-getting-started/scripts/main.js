import functions from './functions.js';

// **********
// Add the event listeners

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

// ---------------------------Calculator:------------------------------------------

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
