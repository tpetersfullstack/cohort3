/* jshint undef: true, unused: true */
/* globals MY_GLOBAL */
/*
Declare Global Variables Here - to Keep track of State, Counts etc.
*/
let cardCount;

const functions = {
  myAddFunction: () => {
    var node = document.createElement("LI"); //First create an LI node
    var textnode = document.createTextNode("Water"); //then create a Text node
    node.appendChild(textnode); //then append the Text node to the LI node
    document.getElementById("idOrderedList").appendChild(node); //Finally append the LI node to the list
  },
  showButtonFunction: () => {
    console.log(idOrderedList.childNodes);
  },
  /* 
Working with Cards functions
*/
  /*
Add Card Function
*/
  addCardFunction: () => {
    // create a new Card(div element) This should be an array object
    // or store this as a card count
    //This can only be used once?
    // let newDiv = document.createElement("div");
    // // and give it some content
    // let newContent = document.createTextNode("Card ");
    // // add the text node to the newly created div
    // newDiv.appendChild(newContent);
    // // add the newly created element and its content into the DOM
    // let currentDiv = document.getElementById("div1");
    // // Insert the new div before & pass the newly created div
    // // and the current div(parent)
    // document.body.insertBefore(newDiv, currentDiv);

    // Create a New Card (div element)
    let newCard = document.createElement("div");
    //newCard.id = myCard;
    newCard.setAttribute("id", "idNewCard");
    newCard.className = "card";
    idLeftMain.appendChild(newCard);

    // Create the Add Card Before Button
    let buttonAddBefore = document.createElement("button");
    buttonAddBefore.setAttribute("class", "classAddBeforeButton");
    buttonAddBefore.textContent = "Add Before";
    newCard.appendChild(buttonAddBefore);

    // Create the Add Card After Button
    let buttonAddAfter = document.createElement("button");
    buttonAddAfter.setAttribute("class", "classAddAfterButton");
    buttonAddAfter.textContent = "Add After";
    newCard.appendChild(buttonAddAfter);

    // Create the Delete Button
    let buttonDelete = document.createElement("button");
    buttonDelete.setAttribute("class", "classDeleteButton");
    buttonDelete.setAttribute("id", "idDeleteButton");
    buttonDelete.textContent = "Delete";
    newCard.appendChild(buttonDelete);
    console.log(buttonDelete.id);
  },
  /*
Delete Card Function
*/
  deleteCardFunction: newCard => {
    idLeftMain.removeChild(newCard);
  },
  /*
Insert Card Before Function
*/
  insertCardBefore: () => {
    // create a new Card(div element)
    let newCard = document.createElement("div");
    //newCard.id = myCard;
    newCard.className = "card";
    //idLeftMain.appendChild(newCard);
    // add the newly created element and its content into the DOM
    //let currentDiv = document.getElementById("div1");
    // Insert the new div before & pass the newly created div and the current div(parent)
    //document.body.insertBefore(newCard, currentDiv);
    idLeftMain.insertBefore(newCard, currentDiv);
  }
};

export default functions;
