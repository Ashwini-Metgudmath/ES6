// you cannot resign to const array but you can mutate.


const s = [5, 7, 2];
function editInPlace() {
  "use strict";

  //s = [2, 5, 7]; // gives error
  
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

}
editInPlace();