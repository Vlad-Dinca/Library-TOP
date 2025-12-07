
let myLibrary = [];
let ids = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

}




function resetDialog() {
  document.querySelector("input#title").value = ""
  document.querySelector("input#author").value = "";
  document.querySelector("input#pages").value = ""
  document.querySelector("input#yes").checked = false
  document.querySelector("input#no").checked = false
}

function createBookCard(array) {
  const books = document.querySelector(".books");

  const i = array.length - 1;
  const book = array[i];

  const bookCard = document.createElement("div");
  const title = document.createElement("div");
  const author = document.createElement("div");
  const pages = document.createElement("div");
  const read = document.createElement("div");
  const buttonRead = document.createElement("button");
  const buttonRemove = document.createElement("button");

  bookCard.className = "bookCard";
  title.className = "title";
  author.className = "author";
  pages.className = "pages";
  read.className = "read";
  buttonRead.className = "buttonRead";
  buttonRemove.className = "buttonRemove";

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages + " pages";

  function updateReadStatus() {
    if (book.read) {
      read.textContent = "Read";
      read.style.color = "green";
    } else {
      read.textContent = "Not Read";
      read.style.color = "red";
    }
  }

  updateReadStatus();

  buttonRead.textContent = "Read / Unread";
  buttonRemove.textContent = "Remove Book";

  bookCard.dataset.bookId = book.id;

  
  books.appendChild(bookCard);
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(read);
  bookCard.appendChild(buttonRead);
  bookCard.appendChild(buttonRemove);

 
  buttonRead.addEventListener("click", () => {
    book.read = !book.read;   
    updateReadStatus();        
  });

  buttonRemove.addEventListener("click", (event) =>{
    books.removeChild(bookCard);

  })
}





let dialog = document.querySelector("dialog");
let addBook = document.querySelector("#addBook");

addBook.addEventListener("click", (event) => {
  dialog.showModal();
})

submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", (event) => {
  let title, author, pages, read;
  title = document.querySelector("input#title").value;
  author = document.querySelector("input#author").value
  pages = document.querySelector("input#pages").value
  read = document.querySelector('input[name="read"]').checked;
  addBookToLibrary(title, author, pages, read);
  resetDialog();
  createBookCard(myLibrary);
  dialog.close();

})


let closeButton = document.querySelector("#closeButton")
closeButton.addEventListener("click", (event) => {
  // event.preventDefault();
  resetDialog();
  dialog.close();
})









addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 300, true);
createBookCard(myLibrary);
addBookToLibrary("The Hedge Knight", "George R.R. Martin", 160, false);
createBookCard(myLibrary);
addBookToLibrary("Leviathan Wakes", "James S. A. Corey", 577, false);
createBookCard(myLibrary);









