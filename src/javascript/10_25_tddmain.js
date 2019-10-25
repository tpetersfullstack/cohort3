
import functions from "./10_25_tdd.js"

functions.helloWorld();

idDoIt.addEventListener('click', () => {

    let userinput1 = parseInt(idNum1.value);
    let userinput2 = parseInt(idNum2.value);
    idAnswer.value = functions.sum(userinput1, userinput2);

})