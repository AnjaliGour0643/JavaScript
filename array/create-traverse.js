// An array is a special variable, which can hold more than one value:


// Creating an array 
// Syntax:         const array_name = [item1, item2, ...];   

const cars = ["Saab", "Volvo", "BMW"];
// cars[0] = "Opel";     // valid
//      (OR)
const cars2 = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
//      (OR)
const cars = new Array("Saab", "Volvo", "BMW");
//      (OR)
const per = {firstName:"John", lastName:"Doe", age:46};




const person = {
    name: "Alice",
    age: 28,
    hobbies: [
      { hobby: "Reading", types: ["Fiction", "Non-fiction", "Sci-Fi"] },
      { hobby: "Sports", types: ["Football", "Tennis", "Swimming"] },
      { hobby: "Music", types: ["Classical", "Jazz", "Rock"] }
    ]
  }

// Traversing the nested arrays and objects
for (let i = 0; i < person.hobbies.length; i++) {
    console.log(`Hobby: ${person.hobbies[i].hobby}`);
    console.log("Types:");
    for (let j = 0; j < person.hobbies[i].types.length; j++) {
      console.log(person.hobbies[i].types[j]);
    }
    console.log()
}





// const myObj = {
//     name: "John",
//     age: 30,
//     cars: [
//       {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//       {name:"BMW", models:["320", "X3", "X5"]},
//       {name:"Fiat", models:["500", "Panda"]}
//     ]
//   }

//   for (let i in myObj.cars) {
//     console.log( myObj.cars[i].name) ;
//     for (let j in myObj.cars[i].models) {
//       console.log(myObj.cars[i].models[j]) ;
//     }
//     console.log()
//   }
  
