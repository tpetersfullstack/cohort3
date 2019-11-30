const functions = {

  showChildren: (listElement) => {
    let childrenArray = [];
    let i = 0;
    let x;
    for (x of listElement.children) {
      childrenArray[i] = x.textContent;
      i++;
    }
    return childrenArray;
  },

  createListElement: () => {
    let li = document.createElement("li");
    li.appendChild(
      document.createTextNode("Item " + (idList.childElementCount + 1))
    );
    idList.appendChild(li);
  },

  appendCardElement: () => {
    let newCard = document.createElement("DIV");
    newCard.textContent = "Card " + idLeftPanel.childElementCount; //faster than createTextNode
    idLeftPanel.appendChild(newCard); //Where the placement occurs
    newCard.className = "card";

    addCardButtons(newCard);
  },

  addCardButtons: (newCard) => {
    newCard.appendChild(document.createElement("BR"));

    let addBeforeButton = document.createElement("BUTTON");
    addBeforeButton.textContent = "Add Before";
    newCard.appendChild(addBeforeButton);

    let addAfterButton = document.createElement("BUTTON");
    addAfterButton.textContent = "Add After";
    newCard.appendChild(addAfterButton);

    newCard.appendChild(document.createElement("BR"));

    let deleteButton = document.createElement("BUTTON");
    deleteButton.textContent = "Delete";
    newCard.appendChild(deleteButton);
  },
  // Create the Add Card Before Function
  addCardBefore: (currentCard) => {
    let newCard = document.createElement("DIV"); //Create a New div Element (a New Card)
    // returns an unsigned long representing the number of child elements of the given element
    newCard.textContent = "Card " + idLeftPanel.childElementCount; //Create a String used to Display the Card Number(or use createTextNode)
    idLeftPanel.insertBefore(newCard, currentCard); //Insert the Card Just Prior to the Current Card
    newCard.className = "card";

    addCardButtons(newCard);
  },

  addCardAfter: (currentCard) => {
    let newCard = document.createElement("DIV");
    newCard.textContent = "Card " + idLeftPanel.childElementCount; //faster than createTextNode
    idLeftPanel.insertBefore(newCard, currentCard.nextSibling); //Where the placement occurs
    newCard.className = "card";

    addCardButtons(newCard);
  },

  deleteCard: (currentCard) => {
    currentCard.remove();
  },

};

export default functions;
