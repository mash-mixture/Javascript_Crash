/***************************    W O R K   I N   P R O G R E S S    ***************************/

/***Callback Function */
//A callback function is a function passed to another function as a argument. Which is then invoked in the outer function
//to complete some kind of routine tasks.


//**Below is the simple callback function example
//display is the callback function because it passed as an argument to the sum function.

/*Example*/
const users = ['asad', 'ali', 'zee', 'MA', 'Falcons']
const pass = { asad: 'Gta5isgood', ali: '234', zee: '1234', MA: '1234', Falcons: '12345' }

function getUserInput(name, callback) {

  let inputName = prompt('Please Enter User Here');
  let inputPass = prompt('Please Enter Password Here');

  if (users.includes(inputName)) {
    return callback(inputName, inputPass, displayMessage);
  }
  else {
    return `${inputName} is not registered. Refresh the page and Try Again`;
  }
}

function processUser(name, password, callback) {
  if (password === pass[name]) {
    return callback({ 'userName': name, 'welcome': `Welcome to Callbacks` });
  }
  else {
    return `Wrong Password against user ${name}`;
  }
}

function displayMessage(userData) {
  return `Hello ${userData.userName} AND ${userData.welcome}`;
}


const user = getUserInput('Asad', processUser);

console.log(user);