let addBookButton = document.querySelector(".addBookButton");
addBookButton.addEventListener('click', openForm);

let inFormButton = document.querySelector(".inFormButton");
inFormButton.addEventListener('click', event => {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let date = document.getElementById("date").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    addBookToLibrary(title, author, date, pages, read);
    document.querySelector(".form-container").reset();
    closeForm();
    createCardStack()
});

let myLibrary = [
];

function Book(title, author, dateWritten, pageCount, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.dateWritten = dateWritten;
  this.pageCount = pageCount;
  this.read = read;
  this.dataIndex = undefined;
}

Book.prototype.toggleRead = function() {
    if (this.read === "Y"){
        this.read = "N";
    }
    else{
        this.read = "Y";
    }
}

function addBookToLibrary(title, author, dateWritten, pageCount, read) {
  let book = new Book(title, author, dateWritten, pageCount, read);
  myLibrary.push(book);
}

function createCardStack(){
    let mainContainer = document.querySelector(".main-container");
    let cardContainer = document.querySelector(".card-container");
    cardContainer.textContent = ""; //clear container to render a fresh stack each time
    myLibrary.forEach ((book, index) => {
        book.dataIndex = index; //set the object data attribute to value of array index in real time
        let card = document.createElement("div");
        card.classList.add("card");
        for (key in book){  
            if (key !== "dataIndex" && key !== "toggleRead"){
                let element = document.createElement("p");
                element.appendChild(document.createTextNode(book[key]));
                if (key === "title"){
                    element.classList.add("title");
                }
                card.appendChild(element);
            }         
        }
        //add delete button
        let deleteBookCardButton = document.createElement("button");
        deleteBookCardButton.classList.add("deleteBookCardButton");
        deleteBookCardButton.textContent = "Remove";
        deleteBookCardButton.addEventListener('click', removeBookCard);
        card.appendChild(deleteBookCardButton);
        //add toggle read button
        let toggleReadCardButton = document.createElement("button");
        toggleReadCardButton.classList.add("toggleReadCardButton");
        toggleReadCardButton.textContent = "Read";
        toggleReadCardButton.addEventListener('click', () => {
            book.toggleRead();
            createCardStack();
        });
        card.appendChild(toggleReadCardButton);
        cardContainer.appendChild(card);  
    }); 
}

function closeForm() {
    document.getElementById("bookForm").style.display = "none";
}

function openForm() {
    document.getElementById("bookForm").style.display = "block";;
}

function removeBookCard(event) {
    let bookTitle = event.currentTarget.parentNode.children[0].textContent;
    let obj = myLibrary.find(book => book.title === bookTitle);
    myLibrary.splice(obj.dataIndex, 1);

    createCardStack();
}