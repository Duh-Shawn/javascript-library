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

function createTable(){
    let bookTable = document.createElement("table");
    document.body.appendChild(bookTable);
    var orderArrayHeader = ["Title", "Author", "Date Written", "Page Count"];
    let thead = document.createElement("thead");
    bookTable.appendChild(thead);
    //iterate through header array
    orderArrayHeader.forEach((header) => {
        thead.appendChild(document.createElement("th")).
          appendChild(document.createTextNode(header));
    });
    myLibrary.forEach ((book) => {
        let row = bookTable.insertRow(0);
        let title = row.insertCell(0); 
        let author = row.insertCell(1); 
        let dateWritten = row.insertCell(2); 
        let pageCount = row.insertCell(3); 
        let read = row.insertCell(4);
        //fill cells
        title.textContent = book.title; 
        author.textContent = book.author; 
        dateWritten.textContent = book.dateWritten; 
        pageCount.textContent = book.pageCount; 
        read.textContent = book.read;
    });
}