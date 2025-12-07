
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
  console.log(array);

  for (let i = array.length - 1; i <= array.length - 1; i++) {

    let title = document.createElement("div");
    let author = document.createElement("div");
    let pages = document.createElement("div");
    let read = document.createElement("div");
    let bookCard = document.createElement("div");
    let buttonRead = document.createElement("button");
    let buttonRemove = document.createElement("button");

    books.appendChild(bookCard).className = "bookCard";
    bookCard.appendChild(title).className = "title";
    bookCard.appendChild(author).className = "author";
    bookCard.appendChild(pages).className = "pages";
    bookCard.appendChild(read).className = "read";
    bookCard.appendChild(buttonRead).className = "buttonRead";
    bookCard.appendChild(buttonRemove).className = "buttonRemove";

    title.textContent = array[i].title;
    author.textContent = array[i].author;
    pages.textContent = array[i].pages + " pages";
    if (array[i].read === true) {
      read.textContent = "Read";
      read.style.color = "green";
    }
    else {
      read.textContent = "Not Read";
      read.style.color = "red";
    }
    buttonRead.textContent = "Read / Unread";
    buttonRemove.textContent = "Remove Book";
    bookCard.dataset.bookId = array[i].id;

    buttonRead.addEventListener(("click"), () => {
        if (array[i].read === true) {
          array[i].read = false;
          read.textContent = "Not Read";
          read.style.color = "red";
          
        }
        else {
          array[i].read = true;
          read.textContent = "Read";
          read.style.color = "green";
        }

      });

    buttonRemove.addEventListener(("click"), () =>{
      books.removeChild(bookCard);
    })

  }     
      
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











