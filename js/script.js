/* Global Variables */

const myLibrary = [];

const booksList = document.querySelector("#books-list");
const addBookBtn = document.querySelector("#add-book-btn");
const newBookForm = document.querySelector("#new-book-form");
const addBookFormBtn = document.querySelector("#add-book-form-btn");
const cancelBtn = document.querySelector("#cancel-btn");
const allInputFields = document.querySelectorAll("input");
const statusSelection = document.querySelector("#status");
const inputErrorMessage = document.querySelector("#input-error-msg");

/* End of Global Variables */

/* Book class declaration */
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    
    toggleReadStatus() {
        this.read = !this.read;
    }
}

/* Functions Declarations */

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
    const read = status === "read" ? true : false;

    return [title, author, pages, read];
}

function showError() {
    let errorMessage;

    if (this.validity.valueMissing && !this.validity.badInput) {
         errorMessage = "All fields must be filled out !";
    } else {
        errorMessage = "Make sure to use the appropriate input type";
    }
    
    inputErrorMessage.textContent = errorMessage;
    inputErrorMessage.className = "active";
}

function hideError() {
    inputErrorMessage.className = "";
    inputErrorMessage.textContent = "";
}

/* End of Functions Declarations */

/* Event Listeners */

addBookBtn.addEventListener("click", () => {
    newBookForm.classList.add("active");
});

cancelBtn.addEventListener("click", () => {
    newBookForm.reset();
    newBookForm.classList.remove("active");
    hideError();
});

addBookFormBtn.addEventListener("click", () => {
    for (let field = 0; field < allInputFields.length; field++) {
        if (!allInputFields[field].checkValidity()) {
            return;
        };
    }

    if (!statusSelection.checkValidity()) {
        return;
    };

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

allInputFields.forEach(inputField => {
    inputField.addEventListener("input", () => {
        hideError();
        inputField.checkValidity();
    });
});

statusSelection.addEventListener("change", () => {
    hideError();
    statusSelection.checkValidity();
});

allInputFields.forEach(inputField => {
    inputField.addEventListener("invalid", showError);
});

statusSelection.addEventListener("invalid", showError);

/* End of Event Listeners */
