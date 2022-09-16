
//**** Prototype Basics */
// #Prototye is a mechanism by which Javascript objects inherit features from one another.
//Every object in JavaScript has a built-in property, which is called its prototype. 
//#The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.
//#The chain ends when we reach a prototype that has null for its own prototype.

//***Making an object literal */
const Person0 = {
    city: 'Karachi (City Of Light)',
    greeting: function(){
        console.log(`Hello I am From ${this.city}`);
    }
}

//console.log(Person0);

//console will pop up a list of all the properties available to this object.
//`city` and `greeting` are our defied properties.
//on the 3rd line `Prototype Object` is shown. Try to expand this. 
//All These Properties inside the prototype objects are called prototypes
//Try to access one them

//console.log(Person);

//****HOW Oject and Prototypes Works */
//If we try to access any proterty from an object i.e `Person.status` 
//First of all it is searched in the Person object is nothing found it enter into the prototypes and search the matching  
//If there is nothing matching in Person Prototype then it is searched in Prototypes of Protoype Object and so on
//If nothing is matching it return undefined.

//Example:
//console.log(Person.status); //undefined


//***Get Protottype of object/property */
const myArray = ['a','s','a','d'];

//console.log(Object.getPrototypeOf(myArray));
//console.log(myArray.keys('asad'))

//console.log(Person.hasOwnProperty('greeting')) //Check if `Person` has `greeting` Property & return true or False
//console.log(Object.getPrototypeOf(Person0.city)); //Getting the Prototype properties of `city` property in Person Object
//console.log(Object.getPrototypeOf(Person.greeting)); //Getting the Prototype properties of `greeting` property in Person Object

//console.log(Person.city.search('City'));
//console.log(Person.city.includes('achi'));
//console.log(Person.city.charCodeAt(1));
//console.log(Person.city.concat(' is Good'));
//console.log(Person.city.endsWith(')'));
// console.log(Person.city.link('www.google.com'));
//console.log(Person.city.fixed());
//console.log(Person.city.slice(10));
//console.log(Person.city.split('' , 10));
//console.log(Person.city.valueOf());


//***SHADOWING AN OBJECT PROPERTY */
//The Process of overriding an existing object property is called shadowing.

const Today = new Date();

//console.log(Object.getPrototypeOf(Today));
//console.log(Today);




//****SETTING A PROTOTYPE */
//There are various ways to setting prototype in JS. We are using two Methods
//i. Object.create() ii. constructor

//Using Object.create() Method
//The Object.create() method creates a new object and allows you to specify an object that will be used as the new object's prototype.
//Example


const myObject = {
    city: 'Islamabad',
    greeting: function(){
        console.log(`I am from ${this.city}`);
    }
}


const Person_Proto = Object.create(myObject);
//console.log(Person_Proto);

//The above example create prototypes for `Person_Proto object (newly created object)`.
//If you console it, it shows an empty object having two default prototypes `city` , `greeting`.
//This is the first method of how we set a prototype for our created object


//****Constructor Method */

//In JS all functions have property named PROTOYPE. 
//When we call a function as a constructor then this property is set as a PROTOYPE of newly constructed object.

const PersonObject = {
    greeting: function(){
        console.log(`Hello I am ${this.name}`);
    }
}


function person_fun(name){
    this.name = name;
}

//Now we are going to set the PROTOTYPE of `person_fun`
Object.assign(person_fun.prototype = PersonObject);

//We then put the methods defined in personPrototype onto the Person function's prototype property using Object.assign.
//Now call the function as a constructor

const Aasad = new person_fun('Asda');

console.log(Aasad);






