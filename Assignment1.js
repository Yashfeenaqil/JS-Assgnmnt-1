/* Assignment 1: Array Operations
Objective: Practice adding, removing, and updating values in arrays.

1. Create an empty array called "fruits".

2. Add the following fruits to the "fruits" array: "apple", "banana", "orange".

3. Remove the first fruit from the array.

4. Add "grape" to the end of the array.

5. Update the second fruit in the array to "pear".

6. Print the final "fruits" array after performing the above operations. */

//1. Create an empty array called "fruits".
let fruits=[];

//2. Add the following fruits to the "fruits" array: "apple", "banana", "orange"
fruits=['apple','banana','orange'];

//3. Remove the first fruit from the array.
fruits.shift();

//4. Add "grape" to the end of the array.
fruits.push("grape");

//5. Update the second fruit in the array to "pear".
fruits.splice(1,1,'pear');

//6. Print the final "fruits" array after performing the above operations. */
console.log(fruits);

/* Assignment 2: Object Operations
Objective: Practice adding, removing, and updating values in objects.

1. Create an empty object called "person".

2. Add the following properties to the "person" object:
   - name: "John"
   - age: 30
   - city: "New York"

3. Remove the "age" property from the "person" object.

4. Add a new property called "job" with the value "Engineer" to the "person" object.

5. Update the "city" property of the "person" object to "San Francisco".

6. Print the final "person" object after performing the above operations. */

//1. Create an empty object called "person".
let person={};

//2. Add the following properties to the "person" object:
   //- name: "John"
   //- age: 30
   //- city: "New York"
person= {
    name:'John',
    age:30,
    city:'New York'
};

//3. Remove the "age" property from the "person" object.
delete person.age;

//4. Add a new property called "job" with the value "Engineer" to the "person" object.
person.job='Engineer';

//5. Update the "city" property of the "person" object to "San Francisco".
person.city='San Francisco';

//6. Print the final "person" object after performing the above operations.
console.log(person);

/* Assignment 3: Array of Objects Operations
Objective: Practice adding, removing, and updating values in an array of objects.

1. Create an empty array called "cars".

2. Add three car objects to the "cars" array. Each car object should have the following properties:
   - make: "Toyota"
   - model: "Camry"
   - year: 2018

3. Remove the first car object from the "cars" array.

4. Add a new car object to the "cars" array with the following properties:
   - make: "Honda"
   - model: "Civic"
   - year: 2020

5. Update the "model" property of the second car object in the array to "Accord".

6. Print the final "cars" array after performing the above operations.

Remember to use console.log() to print the arrays and objects in the console to see the results of each operation. */

//1. Create an empty array called "cars".
let cars=[];

//2. Add three car objects to the "cars" array. Each car object should have the following properties:
// - make: "Toyota"
// - model: "Camry"
// - year: 2018
cars.push({make: 'Toyota',model:'Camry',year:2018});
cars.push({make: 'Toyota',model:'Camry',year:2018});
cars.push({make: 'Toyota',model:'Camry',year:2018});

//3. Remove the first car object from the "cars" array.
cars.shift();

//4. Add a new car object to the "cars" array with the following properties:
// - make: "Honda"
// - model: "Civic"
// - year: 2020
cars.push({ make: "Honda",model: "Civic",year: 2020});

//5. Update the "model" property of the second car object in the array to "Accord".
if(cars.length>=2)
cars[1].model='Accord';

//6. Print the final "cars" array after performing the above operations.
console.log(cars);