/***Callback Function */
//A callback function is a function passed to another function as a argument. Which is then invoked in the outer function
//to complete some kind of routine tasks.


//**Below is the simple callback function example
//display is the callback function because it passed as an argument to the sum function.

/*Example*/
function display(result){
    console.log(result);
}

function sum(a , b , callback){
    let z = a + b;
    callback(z);
}

sum(50 , 780 , display);