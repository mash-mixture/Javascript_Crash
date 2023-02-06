console.log(`Function Methods`)
// Creating a function.
// Example-1:
function getName(first, last) {
    console.log(this, this.id) //Here `this` is in global scope and reffer to the window Object if we do not bind with any object.

    return console.log(`The Full Name is: ${first} ${last}: id: ${this.id}`) //Thats why it get the id from global scope.
}

var id = `Default`;
var gender = `Default`;

//getName('asad' , 'Rasool') //Here we call the function with the global window object. 
//So that's why the `this` inside a function is `window object` 


/**Function Apply method */
//`Apply Methods call the function with the given "this" and optional provided arguments as an array.`
//STYNTAX: 
//function.apply(thisArgument , argumentArray);

//Here defining an Object
const obj = {
    id: 25,
    gender: 'male'
}
getName.apply(obj, ['Asad', 'Rasool']);
//Here `this` is local to the `obj`. 'This' keyword reffer to the `obj` Object.
//Because we call the function using `apply` method. so it bind 'this' of given object (obj) to the calling function (getName)
//So, the getName function use 'this' of the 'obj' object.
//Example-2
const btn = document.getElementById('apply-method');
btn.onclick = () => handler.apply(obj); //Here 'this' keyword refer to the object we passed.

function handler() {
    console.log(this.id)
}

//Calling handler function in global scope:
handler();
//Now it logs global window object.

//btn.addEventListener('click' , function(){console.log(this)})


/**BIND Method */
/*defination:
Bind method creates a new function and set its `this` keyword to the provided value.



*/
//Example:
const providedObject = {
    id: 2023,
    gender: 'female'
}

//Creating a normal function
function getUserData(msg) {
    return console.log(`User Data: id-${this.id} ----- Gender-${this.gender}::: ${msg}`)
}

//Calling the function in global scope:
getUserData('Default Calling at global context');
/**Expected Output:
 * User Data: id-Default ----- Gender-Default::: Default Calling at global context
 * 
 * As function invokes in global scope so `this` keyowrd point to the global window object.
 * And get the values "user id & gender" from globle scope
 *  
 */

//Creating new function using bind method.

const newFunction = getUserData.bind(providedObject);

//Calling the newly created function
newFunction('First Level Binding');

/**Expected Output:
 * User Data: id-2023 ----- Gender-female::: First Level Binding
 * 
 * As new created function is invoked in `providedObject` scope so `this` keyowrd point to the provided object.
 * And get the values "user id & gender" from `providedObject` Object.
 * 
 * Note: bind on another bounded function will never effect on it
 */

// Second Level Bind

//Creating a new object for this keyword binding
const secondObject = {
    id: 777,
    gender: `Any`
}
const newFunction2 = newFunction.bind(secondObject);

// Calling newFunction2
newFunction2('Second Level Binding');

/**
 * Expected Output:
 * User Data: id-2023 ----- Gender-female::: Second Level Binding
 * Here we are binding an already bounded function. So, that's why it has
 * no effects.
 * The function use the `this` keyword of the first provided value which is `provideObject`
 */



/* Call Method */