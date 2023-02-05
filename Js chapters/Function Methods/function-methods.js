console.log(`Function Methods`)
// Creating a function.
// Example-1:
function getName(first , last){
    console.log(Object.getPrototypeOf(this),  this.x) //Here `this` is in global scope and reffer to the window Object.
    
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
getName.apply(obj , ['Asad' , 'Rasool']);  
//Here `this` is local to the `obj`. 'This' keyword reffer to the `obj` Object.

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




*/