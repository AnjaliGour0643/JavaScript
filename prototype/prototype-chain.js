// Prototype Chain with Multiple Levels
console.log("----------------------------------------")


// Grandparent object
let vehicle = {
    type: "Vehicle",
    move() {
      console.log("Vehicle Moving...");
    }
};
  
// Parent object inheriting from vehicle
let car = {
    wheels: 4,
    __proto__: vehicle
};
  
// Child object inheriting from car
let electricCar = {
    battery: "100kWh",
    __proto__: car
};
  
// Accessing properties and methods across multiple prototype levels
console.log(electricCar.type);    // Vehicle (from vehicle)
console.log(electricCar.wheels);  // 4 (from car)
electricCar.move();               // Vehicle Moving... (from vehicle)
  

