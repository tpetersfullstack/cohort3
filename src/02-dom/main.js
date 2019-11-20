import functions from "./functions.js";

idButtonShow.addEventListener("click", () => {
    console.log("In Show Button Event Listener");
    console.log(event.target);
    functions.showButtonFunction();

    //functions.dummy();
});

idButtonAdd.addEventListener('click', () => {    
    console.log('In Add Button Event Listener');
    functions.myAddFunction();
    //functions.myAddTagFunction();
    //functions.dummy();
});

idParent.addEventListener('click', () => {
    console.log('In Parent div Event Listener');
    console.log(event.target);
});

idOrderedList.addEventListener("show", () => {
    console.log("In OL Event Listener");
    console.log(event.target);
});