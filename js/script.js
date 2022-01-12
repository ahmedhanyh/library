const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary('a', 'a', 1, true);
addBookToLibrary('a', 'a', 1, true);
addBookToLibrary('a', 'a', 1, true);
addBookToLibrary('a', 'a', 1, true);
addBookToLibrary('a', 'a', 1, true);
addBookToLibrary('a', 'a', 1, true);
addBookToLibrary('a', 'a', 1, true);
addBookToLibrary('a', 'a', 1, true);

function displayBooks() {
    myLibrary.forEach(book => {
        const bookItem = document.createElement('li');
        bookItem.innerHTML = `Title: ${book.title}<br>
                                Author: ${book.author}<br>
                                Number of pages: ${book.pages}<br>
                                Status: ${book.read ? 'Read' : 'Not yet read'}<br>`;
        bookItem.classList.add("book-item");
        
        document.querySelector("#books-list")
          .appendChild(bookItem);
    });
}

displayBooks();
