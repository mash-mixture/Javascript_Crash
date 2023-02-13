/***************************    W O R K   I N   P R O G R E S S    ***************************/

/****Variable Decleration***/
/*
There are three types to declare a javascript variable.
1. var: var keyword is use to declare a variable. Var has global scope but it is local for function in which it is declare.
2. let: let keyword is use to declare a block scope variable. Using let variable outside the block throws reference error.
3. const: const keyword is use to declare a block scope const which value is not changed during execution.
*/


/** 
 * Declear varaibale with var keyword
 * Using var It Declear a global scope variable.
 * IF we declare it inside a function then it will be local to that function in which it is @declared.
*/



var variable1 = 30; //This is global variable

if (true) {
    var varaibale2 = 99; //As it declared inside a block but it is also global and can access outside the block
}

function local() {
    var variable3 = 210; //This varibale is local to function and only accessed inside this function.
}


//Testing..
//console.log(`Global Variable: ${variable1}`);

//console.log(`Variable declare inside a block is also Global Variable: ${varaibale2}`);

//console.log(`Accessing Local Variable: ${variable3}`); //It thows a reference error `variable3 is not defined`

/**
 * Declear varaibale with let keyword
 * Using @let It Declear a local scope variable (It will be access only inside the in which it is declared).
 * You cannot re-declare a variable which is already declared with let keyword 
 * 
 */


let useLet = 'I am declare with let';

//Redeclaring
//var useLet = 99.7; //It thows error: Uncaught SyntaxError: Identifier 'useLet' has already been declared