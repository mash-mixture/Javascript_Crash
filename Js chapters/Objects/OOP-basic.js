//***OBJECT ORIENTED PROGRAMING -- CRASH For Beginners */
//console.log('OOP Run...');

class Book{
    constructor(title , author , date){
        this.title = title;
        this.author = author;
        this.publishDate = date;
    }
}


const Book1 = new Book('OOP Crash' , 'Asad' , 'September - 17 - 2022');
console.log(Book1);