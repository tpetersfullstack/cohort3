/* jshint undef: true, unused: true */
/* globals MY_GLOBAL */
/*
Declare Global Variables Here - to Keep track of State, Counts etc.
*/
var cardCount;
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
Create Card Function
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

    let newCard = document.createElement("div");
    //newCard.id = myCard;
    newCard.className = "card";
    idLeftMain.appendChild(newCard);

    let buttonAddBefore = document.createElement("button");
    buttonAddBefore.setAttribute("class", "classAddBeforeButton");
    buttonAddBefore.textContent = "Add Before";
    newAcct.appendChild(buttonAddBefore);

    let buttonAddAfter = document.createElement("button");
    buttonAddAfter.setAttribute("class", "classAddAfterButton");
    buttonAddAfter.textContent = "Add After";
    newAcct.appendChild(buttonAddAfter);

    let buttonDelete = document.createElement("button");
    buttonDelete.setAttribute("class", "classDeleteButton");
    buttonDelete.textContent = "Delete";
    newAcct.appendChild(buttonDelete);
  }
};

/*
Delete Card Function
*/

export default functions;
