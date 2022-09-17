//***OBJECT ORIENTED PROGRAMING -- CRASH For Beginners */
//console.log('OOP Run...');

//We'll describe three main concepts: classes and instances, inheritance, and encapsulation

//****Classes and instances */
/*
Real Life example: If we are modeling a library then we might have a `Book` object which represents the books.
Every book have some properties in common such as name , author, Publish Date.
NOTE: Properties are same but have different Values.

So, we must have a `Book` class in our system which contains all the data and methods that every book have.
Hint: We do not add different properties and Methods in a class
Example: If an book has not any author (its means author Property is not a common property in books) So, we cannot add 
the author property in the `Book` Class
*/

//Below is the simple book class with three Properties and one Method

class Book{
    constructor(title , author , date){
        this.title = title;
        this.author = author;
        this.publishDate = date;
    }

    meta(){
        console.log(`${this.title} is written By ${this.author} and Published in ${this.publishDate}`);
    }
}
//**CLASS
//On its own, a class doesn't do anything. It is a template to create the object of that type.

//**INSTANCE
//The new Object created from the class is called the instance of this class.
//In the code below the Book1 is the instance of the Book Class.
//The process of creating an instance is performed by a special function called a constructor. 
//We pass values to the constructor for any internal state that we want to initialize in the new instance.
//Each instance has its own internal state. Which we define at the time of initialize


const Book1 = new Book('OOP Crash' , 'Asad' , 'September - 17 - 2022');
//console.log(Book1);
Book1.meta();