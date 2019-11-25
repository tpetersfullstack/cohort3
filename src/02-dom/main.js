/* jshint undef: true, unused: true */
/* globals MY_GLOBAL */

import functions from "./functions.js";

idButtonShow.addEventListener("click", () => {
    console.log("In Show Button Event Listener");
    console.log(event.target);
    functions.showButtonFunction();
});

idButtonAdd.addEventListener('click', () => {    
    console.log('In Add Button Event Listener');
    functions.myAddFunction();
});

idParent.addEventListener('click', () => {
    console.log('In Parent div Event Listener');
    console.log(event.target);
});

idOrderedList.addEventListener("show", () => {
    console.log("In OL Event Listener");
    console.log(event.target);
});