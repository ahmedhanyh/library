/* Global Variables */

const myLibrary = [];

const booksList = document.querySelector("#books-list");
const addBookBtn = document.querySelector("#add-book-btn");
const newBookForm = document.querySelector("#new-book-form");
const addBookFormBtn = document.querySelector("#add-book-form-btn");
const cancelBtn = document.querySelector("#cancel-btn");

/* End of Global Variables */

/* Functions Declarations */

// This one is a constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// This one is method defined in the Book object prototype
Book.prototype.toggleReadStatus = function() {
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayBooks() {
    booksList.innerHTML = '';
    
    myLibrary.forEach((book, index) => {
        const bookItem = document.createElement('li');
        bookItem.innerHTML = `<div class="book-side"></div>
                                  <div class="book-info">
                                      <h2 class="book-title">${book.title}</h2>
                                      <h3 class="book-author">${book.author}</h3>
                                  </div>
                                  <img src=${book.read ? "img\\Read.png" : "img\\Unread.png"} alt="Check Circle" class="read-check" />
                                  <div class="tooltip">
                                      <p>Pages: ${book.pages}</p>
                                      <img src="./img/Delete.svg" alt="Delete Button" class="remove-btn" />
                              </div>`;
      
      bookItem.classList.add("book-item");
      bookItem.setAttribute("data-location", index);

      const tooltip = bookItem.querySelector(".tooltip");
  
      bookItem.addEventListener("mouseover", () => {
          tooltip.classList.add("active");
      });
    
      bookItem.addEventListener("mouseout", () => {
          tooltip.classList.remove("active");
      })

      booksList.appendChild(bookItem);
  });
}

function getInputtedData() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const status = document.querySelector("#status").value;
  
    if (title === '' || author === '' || pages === '') {
        alert("There is one or more empty fields. All fields must be filled.");
        return [];
    }

    const read = status === "read" ? true : false;

    return [title, author, pages, read];
}

/* End of Functions Declarations */

/* Event Listeners */

addBookBtn.addEventListener("click", () => {
    newBookForm.classList.add("active");
});

cancelBtn.addEventListener("click", () => {
    newBookForm.reset();
    newBookForm.classList.remove("active");
});

addBookFormBtn.addEventListener("click", () => {
    const [title, author, pages, read] = getInputtedData();

    if (!title || !author || !pages) {
        return;
    }

    addBookToLibrary(title, author, pages, read);
    newBookForm.classList.remove("active");
    newBookForm.reset();
    displayBooks();
});

booksList.addEventListener("click", event => {
    if (event.target.nodeName !== "IMG") {
        return;
    }
    
    if (event.target.className === "remove-btn") {
        let parent = event.target.parentElement.parentElement;
        let location = parent.dataset.location;
        myLibrary.splice(location, 1);
        parent.remove();
    } else {
        let parent = event.target.parentElement;
        let location = parent.dataset.location;
        let book = myLibrary[location];
        book.toggleReadStatus();
      }

    displayBooks();
  });

/* End of Event Listeners */
