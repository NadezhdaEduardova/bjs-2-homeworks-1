// Задача 1 //
class PrintEditionItem {  
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    this.state *= 1.5;
  }
  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  };
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.state = 100;
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.state = 100;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.state = 100;
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.state = 100;
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.state = 100;
    this.type = "detective";
  }
}

// Задача 2//
class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }
  
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
    
  findBookBy(type, value) {
    for (let book in this.books) {
      if (this.books[book][type] === value) {
        return this.books[book];
      }
    }
    return null;
  }
  
   giveBookByName(bookName) {
    for (let book in this.books) {
      if (this.books[book].name === bookName) {
        return this.books.splice(book, 1)[0];
      }
    }
    return null;
  }
}
  

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец"));
console.log(library.findBookBy("releaseDate", 1924).name);

console.log("Количество книг до выдачи: " + library.books.length);
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length);

// Задача 3 //


  


 
