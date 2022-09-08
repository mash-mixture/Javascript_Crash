//Most of Core Elements of Javascripts are Objects

//Simple object
const person = {
    name: ['AA', 'Smith'],
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}`);
    }
  };

    //person.bio();
    //person.introduceSelf();

    //console.log(person.name[0] + ' ' + person.name[1]);


//  Update/Setting object Member

//Property
person.age = 22;

//Method Updating
person.introduceSelf = function(){
    console.log(`Hello this is updated method() by ${this.name}`);
}  


//Result
//console.log(person.age);
//person.introduceSelf();


//Introducing Constructor like Functions

function createPerson(name , age){
    this.name = name;
    this.age = age;

    this.introduce = function(){
        console.log(`My name is ${this.name} and i am ${this.age} year's old`);
    }
}

//If you want to create different new person then you must use `new` keyword to call createPerson as a constructor

let person1 = new createPerson('Asad', 20);
let person2 = new createPerson('Ali', 18);

//person1.introduce();
//person2.introduce();

//NOTE:- If we use simple object to show different person then we must make different object for each person.
//Using Constructor made your code smaller and effcient

//document.hidden = true;
//console.log(document.defaultView);
