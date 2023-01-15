let myLibrary = [];

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.id = Date.now()
}



const container = document.querySelector(".cards")

// (1) Cancels the reset that sumbit would do when button is clicked
// (2) sets a new book object that gets its value from the form
// (3) pushes the new book to the library array
function addBookToLibrary(ev) {
    ev.preventDefault();

    const book = new Book(title.value, author.value, pages.value)
        
    myLibrary.push(book)
    
    let card = document.createElement("div");
    let cardText = document.createElement("div")
    let para1 = document.createElement("p");
    let para2 = document.createElement("p"); 
    let para3 = document.createElement("p"); 
    let read = document.createElement("p") 
    let readCheckDiv = document.createElement("div")
    let readCheck = document.createElement("input")
    readCheck.type = "checkbox"
    //check box read or not
    let jscheckbox = document.createElement('input')
    jscheckbox.type = "checkbox";
    jscheckbox.name = "jscheckbox"
    jscheckbox.id = "jscheckbox"  

    //div that holds delete and checkbox delete side to side
    let DeleteDiv = document.createElement("div")

    // delete div
    let deleteCheckBoxDiv = document.createElement("div")
    //check box delete
    let checkboxDelete = document.createElement("button")   
    
    checkboxDelete.addEventListener('click', deleteBook)
    checkboxDelete.value = book.id
            
    container.appendChild(card).className = "card";
    card.appendChild(cardText).className = "cardText"
    cardText.appendChild(para1).className = "title"
    cardText.appendChild(para2).className = "author"
    cardText.appendChild(para3).className = "pages"
    cardText.appendChild(DeleteDiv).className = "deleteDiv"
    DeleteDiv.appendChild(deleteCheckBoxDiv)
    DeleteDiv.appendChild(checkboxDelete).className = "deleteButton"
    cardText.appendChild(readCheckDiv).className = "readCheckDiv"
    readCheckDiv.appendChild(read).className = "read" 
    readCheckDiv.appendChild(readCheck)
    

    para1.textContent =  "Title:" +  " " + title.value
    para2.textContent = "Author:" + " " + author.value
    para3.textContent = "Pages:" + " " + pages.value
    read.textContent = "Read"
    deleteCheckBoxDiv.textContent = "Delete" 
    
    
}
 
function deleteBook(event) {
    const id = event.target.value;
    myLibrary = myLibrary.filter(
       book => {
       if(book.id == id) {
        return false
       } else {
        return true
       }
    })
    event.target.closest('.card').remove();
}

const SubmitBtn =  document.getElementById('btn')
SubmitBtn.addEventListener('click', addBookToLibrary)