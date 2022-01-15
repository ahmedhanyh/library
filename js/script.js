const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleReadStatus = function() {
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

const bookItems = document.querySelectorAll(".book-item");
bookItems.forEach(bookItem => {
    const tooltip = bookItem.querySelector(".tooltip");
  
    bookItem.addEventListener("mouseover", () => {
      tooltip.classList.add("active");
    });
  
    bookItem.addEventListener("mouseout", () => {
      tooltip.classList.remove("active");
    })

  });


const addBookBtn = document.querySelector("#add-book-btn");
const newBookForm = document.querySelector("#new-book-form");
const addBookFormBtn = document.querySelector("#add-book-form-btn");

addBookBtn.addEventListener("click", () => {
    newBookForm.classList.add("active");
});

// function displayBooks() {
//     const booksList = document.querySelector("#books-list");
//     booksList.innerHTML = '';
    
//     myLibrary.forEach((book, index) => {
//         const bookItem = document.createElement('li');
//         bookItem.innerHTML = `Title: ${book.title}<br>
//                               Author: ${book.author}<br>
//                               Number of pages: ${book.pages}<br>
//                               Status: ${book.read ? 'Read' : 'Not yet read'}<br>
//                               <button id="remove-book-btn">REMOVE</button>
//                               <button id="toggle-book-btn">TOGGLE READ</button>`;
        
//         bookItem.classList.add("book-item");
//         bookItem.setAttribute("data-location", index);

//         booksList.appendChild(bookItem);
//     });
// }

// const booksList = document.querySelector("#books-list");
// const newBookBtn = document.querySelector("#new-book-btn");
// const addBookBtn = document.querySelector("#add-book-btn");
// const newBookForm = document.querySelector("#new-book-form");

// newBookBtn.addEventListener("click", () => {
//     newBookForm.classList.add("active");
//   });

// addBookBtn.addEventListener("click", () => {
//     const [title, author, pages, read] = getInputtedData();
//     addBookToLibrary(title, author, pages, read);
//     newBookForm.classList.remove("active");
//     displayBooks();
//   });

// function getInputtedData() {
//   const title = document.querySelector("#title").value;
//   const author = document.querySelector("#author").value;
//   const pages = document.querySelector("#pages").value;
//   const status = document.querySelector("#status").value;
  
//   if (title === '' || author === '' || pages === '') {
//     alert("There is one or more empty fields. All fields must be filled.");
//     return;
//   }

//   const read = status === "read" ? true : false;

//   return [title, author, pages, read];
// }

// booksList.addEventListener("click", event => {
//     if (event.target.nodeName !== "BUTTON") {
//         return;
//     }

//     const parent = event.target.parentElement;
//     const location = parent.dataset.location;
    
//     if (event.target.textContent === "REMOVE") {
//         myLibrary.splice(location, 1);
//         parent.remove();
//     } else {
//         const book = myLibrary[location];
//         book.toggleReadStatus();
//       }

//     displayBooks();
//   });