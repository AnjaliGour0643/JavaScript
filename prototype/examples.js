/*
JavaScript uses prototypes for inheritance. 
Objects can inherit properties and methods from other objects, which is the basis of how inheritance works in JavaScript.
--------------------------
Every function in JavaScript has a prototype property. When you create an object using a constructor function, 
that object's internal [[Prototype]] property links to the prototype object of the constructor.
--------------------------
Prototypes are used to define methods and properties that are shared across all instances of an object. 
For example, all arrays in JavaScript share methods like .push() and .pop() via Array.prototype.
*/ 

// Example 1
console.log("----------------------------------------")

function Person(name) {
    this.name = name;
}
  
// Adding a method to the prototype
Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
};
  
let person1 = new Person("Alex");
let person2 = new Person("Betty");

person1.greet(); // "Hello, my name is Alice"
person2.greet(); // "Hello, my name is Bob"

// Both person1 and person2 share the greet method from Person.prototype


// Example 2
console.log("----------------------------------------")

/*
Prototype vs. __proto__:

prototype: A property of constructor functions that is used to build the prototype chain.
__proto__: An internal property that exists in every object to link to its prototype.
*/

// Parent object with properties and methods
let animal = {
    species: "Animal",
    sound() {
      console.log("Makes a sound");
    }
};
  
// Child object inheriting from 'animal' using __proto__
let dog = {
    breed: "Labrador",
    __proto__: animal  // Setting animal as the prototype of dog
};
  
// Accessing properties and methods from the parent (animal)
console.log(dog.species); // Animal
dog.sound();              // Makes a sound



// Example 3 : Adding Methods via __proto__
console.log("----------------------------------------")

// Base object
let person = {
    greeting: "Hello",
};
  
// Another object inheriting from person
let student = {
    name: "Anjali",
    __proto__: person
};
  
// Adding a method to person, which will be inherited by student
person.sayGreeting = function() {
    console.log(this.greeting + ", I am " + this.name);
};
  
// Now student can use the method inherited from person
student.sayGreeting();  // Output: "Hello, I am Anjali"
  
  