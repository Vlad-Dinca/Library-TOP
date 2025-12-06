
let myLibrary =[];

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read){
  
   let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

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
  dialog.showModal();
})

submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", (event) =>{
  let title, author, pages, read;
  title  = document.querySelector("input#title").value;
  author = document.querySelector("input#author").value
  pages = document.querySelector("input#pages").value
  read = document.querySelector('input[name="read"]').checked;
  addBookToLibrary(title, author, pages, read);
  console.log(myLibrary);
  resetDialog();
  dialog.close();
  
})


let closeButton = document.querySelector("#closeButton")
closeButton.addEventListener("click", (event)=>{
  // event.preventDefault();
  resetDialog();
  dialog.close();
})