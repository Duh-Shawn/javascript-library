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

function addBookToLibrary() {
  // do stuff here
  let title = prompt("title"); 
  let author = prompt("author"); 
  let dateWritten = prompt("date written"); 
  let pageCount = prompt("page count"); 
  let read = prompt("have you read this already?"); 
  let book = new Book(title, author, dateWritten, pageCount, read);
  myLibrary.push(book);
}

function createCardStack(){
    let cardContainer = document.querySelector(".card-container");
    myLibrary.forEach ((book) => {
        let card = document.createElement("div");
        card.classList.add("card");
        for (key in book){
            card.appendChild(document.createElement("p")).appendChild(document.createTextNode(book[key]));
        }
        console.log(card);
        cardContainer.appendChild(card); 
    });

}