// Difference between var and let

// var example
/*function checkScope() {
    "use strict";
      var i = "function scope";
      if (true) {
        i = "block scope";
        console.log("Block scope i is: ", i);
      }
      console.log("Function scope i is: ", i);
      return i;
    }
    
    checkScope();*/

    // let example
    function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
      let i = "block scope";
      console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
  }
  
  checkScope();