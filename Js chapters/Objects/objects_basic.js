//***JS Simple Objects

//*****Creating Simple js object******//
const Person = {
    name:       'Asad',
    age:        '22',
    education:  'BSC(Computer Science)',    //These are the Properties of Object
    desginaion: 'Web Developer',
    company:    'Nexstair',
    experience: '1.5 Years',
    Nationality:'Pakistani',
    
    intro:      function(){ //This is method of Object
        console.log(`Hello, I am ${this.name} & I am ${this.age} Year old. I am a ${this.Nationality} & I done ${this.education} in Past Year`);
    },

    status:     function(){
        console.log(`I am a ${this.desginaion} in ${this.company} having ${this.experience} Experience.`);
    }
};

//Person.intro();
//Person.status();


//Updating Object Member
Person.name = 'Ali';
Person.age = '18';
Person.desginaion = 'Game Designer';
Person.experience = '5 Months';

//console.log('-------------------After Updating Object Properties-----------------------------');

//Person.intro();
//Person.status();

//******Using Simple Constructor To Enhanced the Code*****//

function createPerson(name , age){
    this.name = name;
    this.age = age;
    
    this.intro = function(){
        console.log(`I am a ${this.name} & I am ${this.age} year old`);
    }
}

//***Call this function as a constructor we use `new` keyword

const Person1 = new createPerson('Asad' , 22);
//Person1.intro();

//***Now we can update its properties/attribute and Methods/Function
Person1.Nationality = 'Pakistani';


//you can use the properties of constructor in newly created method for that constructor
Person1.status = function(){
    console.log(`Hye I am ${this.Nationality} and I am available...`);
}

//console.log(Person1);
Person1.status();

//Creating new instance of constructor `createPerson`. 
const Person2 = new createPerson('Ali' , 22);

Person2.intro();

//By Default new instance of constructor `createPerson` has 2 properties and 1 method but you can add more properties and methods
//