//old way of creating object
var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
  var zeus = new SpaceShuttle('Jupiter');
  console.log(zeus.targetPlanet)
  

  // using constructor
  /*class SpaceShuttle{
      constructor(targetPlanet){
        this.targetPlanet = targetPlanet; 
      }
  }*/
  

  
  function makeClass() {
  class Vegetable{
      constructor(name){
          this.name = name;
      }
  }
     return Vegetable;
   }
   const Vegetable = makeClass();
   const carrot = new Vegetable('carrot');
   console.log(carrot.name); 