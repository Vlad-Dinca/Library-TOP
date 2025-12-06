
const myLibrary =[];

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read){
  myLibrary = Book(title, author, pages, read);
}

function resetDialog(){
  document.querySelector("input#title").value=""
  document.querySelector("input#author").value="";
  document.querySelector("input#pages").value=""
  document.querySelector("input#yes").checked=false
  document.querySelector("input#no").checked=false
}

let dialog = document.querySelector("dialog");
let addBook = document.querySelector("#addBook");

addBook.addEventListener("click", (event)=>{
  // event.preventDefault();
  dialog.showModal();;
})

let closeButton = document.querySelector("#closeButton")
closeButton.addEventListener("click", (event)=>{
  // event.preventDefault();
  resetDialog();
  dialog.close();
})