import * as functions from './functions.js';

/* Working With Cards Assignment: Todd Peters 11-24-19 */

/*Create a New Section, then create 2 panels - a left and a right. 
The left side has card-like images inside with three buttons on each card
one Add card button on the left main div
on each card there is a counter, with a card label:
as well each card will have an add before, add after and a delete button
the right side is to remain blank for now, use css classes */

idContainer.addEventListener('click', (event) => {
    console.log(event);
    if (event.target.id === "idShow") {
        alert(functions.showChildren(idList));
    }

    if (event.target.id === "idAdd") {
        functions.createListElement();
    }
});
// Change to Else if?
idLeftPanel.addEventListener('click', (event) => {
    console.log(event)
    if (event.target.id === "idAddCard") {
        functions.appendCardElement();
    }

    if (event.target.textContent === "Add Before") {
        functions.addCardBefore(event.target.parentNode);
    }

    if (event.target.textContent === "Add After") {
        functions.addCardAfter(event.target.parentNode);
    }

    if (event.target.textContent === "Delete") {
        functions.deleteCard(event.target.parentNode);
    }
});