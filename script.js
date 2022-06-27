let addBookButton = document.querySelector(".addBookButton");
addBookButton.addEventListener('click', openForm);

let inFormButton = document.querySelector(".inFormButton");
inFormButton.addEventListener('click', event => {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let date = document.getElementById("date").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("title").value;
    addBookToLibrary(title, author, date, pages, read);
    document.querySelector(".form-container").reset();
    closeForm();
    createCardStack()
});


let myLibrary = [{
    title: "title1",
    author: "author1",
    dateWritten: 1970,
    pageCount: 100,
    read: "yes"
},
{
    title: "title2",
    author: "author2",
    dateWritten: 1970,
    pageCount: 100,
    read: "yes"
},
{
    title: "title3",
    author: "author3",
    dateWritten: 1970,
    pageCount: 100,
    read: "yes"
}];

function Book(title, author, dateWritten, pageCount, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.dateWritten = dateWritten;
  this.pageCount = pageCount;
  this.read = read;
}

function addBookToLibrary(title, author, dateWritten, pageCount, read) {
  let book = new Book(title, author, dateWritten, pageCount, read);
  myLibrary.push(book);
}

function createCardStack(){
    let mainContainer = document.querySelector(".main-container");
    let cardContainer = document.querySelector(".card-container");
    cardContainer.textContent = ""; //clear container to render a fresh stack each time
    myLibrary.forEach ((book) => {
        let card = document.createElement("div");
        card.classList.add("card");
        for (key in book){
            card.appendChild(document.createElement("p")).appendChild(document.createTextNode(book[key]));
        }
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteBookButton");
        deleteButton.textContent = "Remove";
        card.appendChild(deleteButton);
        cardContainer.appendChild(card); 
    });

}

function closeForm() {
    document.getElementById("bookForm").style.display = "none";
}

function openForm() {
    document.getElementById("bookForm").style.display = "block";;
}