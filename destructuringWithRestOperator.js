
// assign array values to arr by removing first two elements.
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

  const [, , ...arr] = list; // two commas indicates removing first two elements

  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); 
console.log(source);