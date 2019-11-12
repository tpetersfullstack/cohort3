const functions = {

    /* ****************************************** Calculator Assignment ******************************************************** */
    sum: (p1, p2) => {                  //Sum function
        return p1 + p2;
    },
    sub: (p1, p2) => {                  //Sub function
        return p1 - p2;
    },
    mult: (p1, p2) => {                 //Mult function
        return p1 * p2;
    },
    div: (p1, p2) => {                  //Div function
        return p1 / p2;
    },
    /* ************************************** Canadian Tax Calculator **************************************************************/
    cndTaxCalc: (userInput) => {
        if (userInput <= 47630) {                                                       //on the first $47,630 15%
            return (userInput * (0.15));
        } else if (userInput > 47630 && userInput <= 95259) {
            return ((userInput - 47630) * 0.205) + 7145;
        } else if (userInput > 95259 && userInput <= 147667) {
            return ((userInput - 95259) * 0.26) + 16908;
        } else if (userInput > 147667 && userInput <= 210371) {
            return ((userInput - 147667) * 0.29) + 30535;
        } else {
            return ((userInput - 210371) * 0.33) + 48719;
        };
    },
};

export default functions;

