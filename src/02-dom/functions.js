/* jshint undef: true, unused: true */
/* globals MY_GLOBAL */

const functions = {

   myAddFunction: () => {
        var node = document.createElement("LI");                        //First create an LI node
        var textnode = document.createTextNode("Water");                //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the LI node
        document.getElementById("idOrderedList").appendChild(node);     //Finally append the LI node to the list
      },
      showButtonFunction: () => {
          console.log(idOrderedList.childNodes);
      },

};

export default functions;