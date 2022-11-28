/*Example*/
const usersP = ['asad' , 'ali' , 'zee' , 'MA' , 'Falcons']
const passP = {asad: 'Gta5isgood' , ali: '234' , zee: '1234', MA: '1234' , Falcons: '12345'}

function getUserInput(){
    return new Promise((resolve , reject) => {
        let inputName = prompt('Please Enter User Here');
        let inputPass  = prompt('Please Enter Password Here');

        if(usersP.includes(inputName)){
            resolve({name: inputName , pass: inputPass});
          }
          else{
             reject(`${inputName} is not registered. Refresh the page and Try Again`);
          }
    });

}

function processUser(name , password){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            if( password === passP[name]){
                resolve( {'userName': name , 'welcome': `Welcome to Javascript Promises`});    
            }
            else{
              reject(`Wrong Password against user ${name}`);
            }  
        }, 2000);
        
    })
     
}

function displayMessage(userData){
    return `Hello ${userData.userName} \nAND\n ${userData.welcome}`;
}


//const user =  getUserInput();

getUserInput().then((meta) => processUser(meta.name , meta.pass))
.then((userData) => displayMessage(userData))
.then(userWelcome => console.log(userWelcome))
.catch(err => {
    console.error(err)
})
