/***************************    W O R K   I N   P R O G R E S S    ***************************/

//****Asynchronous Js***/
//Javascript is an single thread language. The code written in javascript is executed line by line.
//If there is an error in the mid of code then the code below this error will not be executed due to its single thread behavour.
//To enable its multi thread behaviour we use async functions. Which will be executed in other thread and after its execution
//result will return to Javascript main thread.

/*Example*/
async function otherTests() {
    console.log('Outer Test 1')
    console.log('Outer Test 2')
    await verify();
    console.log('Outer Test 3')
    console.log('Outer Test 4')
}



console.log('First Test Passed');
console.log('Second Test Passed');

otherTests();

console.log('Third Test Passed');
console.log('Fourth Test Passed');
console.warn('Unknown Error: Process Terminated');
console.log(Passed);
console.log('Not Executed');

function verify() {
    console.log(Verifying);
    setTimeout(() => {
        console.log('Data verified')
    }, 5000)
}