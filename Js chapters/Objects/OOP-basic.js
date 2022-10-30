//***OBJECT ORIENTED PROGRAMING -- CRASH For Beginners */
//console.log('OOP Run...');

//We'll describe three main concepts: classes and instances, inheritance, and encapsulation

//****Classes and instances */
/*
Real Life example: If we are modeling a library then we might have a `Novel` object which represents the Novels.
Every Novel have some properties in common such as name , author, Publish Date.
NOTE: Properties are same but have different Values.

So, we must have a `Novel` class in our system which contains all the data and methods that every Novel have.
Hint: We do not add different properties and Methods in a class
Example: If an Novel has not any author (its means author Property is not a common property in Novels) So, we cannot add 
the author property in the `Novel` Class
*/

//Below is the simple Novel class with three Properties and one Method

class Novel{
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
//In the code below the Novel1 is the instance of the Novel Class.
//We can create as many instance of class as we need. So it help us to reduce the code repeatition
//The process of creating an instance is performed by a special function called a constructor. 
//We pass values to the constructor for any internal state that we want to initialize in the new instance.
//Each instance has its own internal state. Which we define at the time of initialize
//Novel1 Instance has its own three properties values whichwe pass to the constructor

//NOTE: Generally, the constructor is written out as part of the class definition, and it usually has the same name as the class itself:

//We use a `new` Keyword to call the constructor of the class


const Novel1 = new Novel('OOP Crash' , 'Asad' , 'September - 17 - 2022');
//console.log(Novel1);
Novel1.meta();


//***INHERITANCE */
/*
Suppose we have a library we have curriculum books, novels  and Historic Books. all books are different but inherit some properties
like all there are books.
So we define a general class for all kind of books.   
*/

class Books{
    constructor(title , author , publishDate , fromat){
        this.title = title;
        this.author = author;
        this.publishDate = publishDate;
        this.fromat = fromat;
    }

    bookMeta(){
        console.log(`${this.title} is written by ${this.author} in ${this.publishDate}`);
    }
}

//We define other classes for novels , curriculum and historic books. Because all have different purposes, like curriculum books
//used for yearly students & novels is for general readings
//Novels class is derived from Books class, it is called sub-class of Books
//Conversly Book is parent class of novels
//Novels class inherits all the properties from from books class but we can add extra properties in it and use them in a differnt way 


class Novels extends Books{
    constructor(title , author , publishDate, forUsers , type , genres){
        
    super(title, author , publishDate)
        this.title = title;
        this.author = author;
        this.publishDate = publishDate;
        this.forUsers = forUsers;
        this.type = type;
        this.genres = genres;
    }

    bookMeta(){
        console.log(`The Novel "${this.title}" is written by "${this.author}" in ${this.publishDate}. It is ${this.genres} Novel. Is For ${this.forUsers}`);
    }

    bookPrice(){
        this.price = 500;
    }
}


//const Novels_Books = new Books('Tarzan  ki  Tabahi' , 'Ali Sethi' , '18-Seprember-2022');

const Novels1 = new Novels('Tarzan  ki  Tabahi' , 'Ali Sethi' , '18-Seprember-2022' ,'Childrens' , 'Complete' , 'Fanntasy');

console.log(Novels1);

console.log(Object.hasOwn(Novels1 , 'title'));

Novels1.bookMeta();

const Books1 = new Books('')

//***polymorphism*/
//BookMeta() Method is used in different ways in each class this process is called polymorphism

//***ENCAPSULATION */

/*
Keep an object internal state private and generally making a clear difference between its public interface and its internal 
private state is called encapsulation
*/

//Example 
/*
Above we have a book object, and if we allow a book to download if it has PDF fromat. We could implement this by exposing 
book format property and other code exmine that to decide whether the book is downloadable or not.
*/

const bookEncap = new Books('Js Crash' , 'Muhammad ALI' , '21-september-2022' , 'PDF');

bookEncap.bookMeta();

if(bookEncap.fromat == 'PDF'){
    console.log('Its is available to download');
}

//This is not effecient way to write different code for whole program. So, we create a method `hasDownloadable` in Books object which insure that 
//weather book is downloadable or not. So in this way we implements the logic in one place: which reduce overall code length

bookEncap.hasdownloadable = function(){
    if(this.fromat == 'PDF'){
        console.log('Its is available to download');
    }
    else{
        console.log('Its is unavailable to download');
    }
}

console.log(bookEncap);