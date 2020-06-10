/*const bicycle = {
    gear: 2,
    setGear: function(newGear) {
      "use strict";
      this.gear = newGear;
    }
  };*/
  

  // object can function, concise way to write it is remove function and colon.

  const bicycle = {
    gear: 2,
    setGear(newGear) {
      "use strict";
      this.gear = newGear;
    }
  };
  
  bicycle.setGear(3);
  console.log(bicycle.gear);