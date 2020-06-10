const increment = (function() {
    return function increment(number, value = 1) {
      return number + value;
    };
  })();
  

  //const increment = (num, value = 1) => num + value;

  console.log(increment(5, 2)); 
  console.log(increment(5)); 