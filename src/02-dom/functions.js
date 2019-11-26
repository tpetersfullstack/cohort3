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
  var newDiv = document.createElement("div"); 
  // and give it some content 
  var newContent = document.createTextNode("Card "); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  // Insert the new div before(?) pass the newly created div
  // and the current div(parent) 
  document.body.insertBefore(newDiv, currentDiv); 
},
};          //Close addCardFunction

/*
Delete Card Function
*/

export default functions;