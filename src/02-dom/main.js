/* jshint undef: true, unused: true */
/* globals MY_GLOBAL */
/*
Working With Cards Assignment: Todd Peters 11-24-19

Create a New Section, then create 2 panels - a left and a right. 
The left side has card-like images inside with three buttons on each card
one Add card button on the left main div
on ech card there is a counter, with a card label:
as well each card will have an add before, add after and a delete button
the right side is to remain blank for now
use css classes
*/

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
//show?
idOrderedList.addEventListener("show", () => {
    console.log("In OL Event Listener");
    console.log(event.target);
});
/*
Working with Cards
*/
idButtonAddCard.addEventListener("click", () => {
    console.log("Add Card Event Listener");
    console.log(event.target);
});

// idOrderedList.addEventListener("show", () => {
//     console.log("In OL Event Listener");
//     console.log(event.target);
// });

// idOrderedList.addEventListener("show", () => {
//     console.log("In OL Event Listener");
//     console.log(event.target);
// });

// idOrderedList.addEventListener("show", () => {
//     console.log("In OL Event Listener");
//     console.log(event.target);
// });