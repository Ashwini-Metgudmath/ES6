// without rest operator
/*const sum = (function() {
    return function sum(x, y, z) {
    const args = [x, y, z];
      return args.reduce((a, b) => a + b, 0);
    };
  })();*/
 

  // with rest operator. (...) is rest operator
  // rest operator converts all input to a single array.

  const sum = (...args) => args.reduce((a, b) => a + b, 0);

  console.log(sum(1, 5, 3, 6));