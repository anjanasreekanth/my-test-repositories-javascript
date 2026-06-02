/*Scenario:
You are tasked with designing a library management system. The library
lends out various types of items such as books, DVDs, and magazines. While
all items share some common properties (e.g., title, id, isAvailable), each
type has unique properties and behaviors. For example:
● Books have an author and a genre.
● DVDs have a director and duration.
● Magazines have an issueNumber and publisher.
Tasks
1. Step 1: Create a Base Class
○ Define a class LibraryItem to represent shared properties
(title, id, isAvailable) and methods (e.g., checkOut() and
returnItem()).
2. Step 2: Extend the Base Class
○ Create child classes Book, DVD, and Magazine that inherit from
LibraryItem
Add unique properties and methods for each child class:
■ Book: Add properties like author and genre.
■ DVD: Add properties like director and duration.
■ Magazine: Add properties like issueNumber and publisher.
3. Step 3: Instantiate Objects
○ Create instances of each class and test the shared and unique
methods.
Step 4: Test the Inheritance
○ Use inherited methods like checkOut() and returnItem() to
manage the availability of items.
○ Test accessing and displaying unique properties of each child
class.
*/
//Base Class
class Libraryitem {
    constructor(title, id) {
        this.title = title;
        this.id = id;
        this.isAvailable = true;
    }
    checkout() {
        if (this.isAvailable){
          this.isAvailable = false;
          return `${this.title} is ready to checkout`;
        }else{
            return `${this.title} is already checkedout.` 
        }
    }
    returnItem() {
        return `Returned Item`;
    }
}
class Book extends Libraryitem {
    constructor(title, id, author, genre) {
        super(title, id);
        this.author = author;
        this.genre = genre;
    }
}
class DVD extends Libraryitem {
    constructor(title, id, director, duration) {
        super(title, id);
        this.director = director;
        this.duration = duration;
    }
}
class Magazine extends Libraryitem {
    constructor(title, id, issueNumber, publisher) {
        super(title, id);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
}
const newBook = new Book("Harry Potter", 1234,"J.k.Rowling", "Fiction");
console.log(newBook);
console.log(newBook.checkout());