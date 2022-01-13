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
    const booksList = document.querySelector("#books-list");
    booksList.innerHTML = '';
    
    myLibrary.forEach(book => {
        const bookItem = document.createElement('li');
        bookItem.innerHTML = `Title: ${book.title}<br>
                                Author: ${book.author}<br>
                                Number of pages: ${book.pages}<br>
                                Status: ${book.read ? 'Read' : 'Not yet read'}<br>`;
        bookItem.classList.add("book-item");
        
        booksList.appendChild(bookItem);
    });
}

const newBookBtn = document.querySelector("#new-book-btn");
const addBookBtn = document.querySelector("#add-book-btn");
const newBookForm = document.querySelector("#new-book-form");

newBookBtn.addEventListener("click", () => {
    newBookForm.classList.add("active");
  });

addBookBtn.addEventListener("click", () => {
    const [title, author, pages, read] = getInputtedData();
    addBookToLibrary(title, author, pages, read);
    newBookForm.classList.remove("active");
    displayBooks();
  });

function getInputtedData() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const status = document.querySelector("#status").value;
  
  if (title === '' || author === '' || pages === '') {
    alert("There is one or more empty fields. All fields must be filled.");
    return;
  }

  const read = status === "read" ? true : false;

  return [title, author, pages, read];
}

displayBooks();
