const fs = require("fs");

function getAllBooks() {
   return JSON.parse(fs.readFileSync("livros.json"))
};

function getBookById(id) {
    const books = JSON.parse(fs.readFileSync("livros.json"));

    //aqui filtrará o livro a partir do ID, como idealmente retornará só um passo a posição que é a posição desse objeto filtrado como filteredBook
    const filteredBook = books.filter( book => book.id === id )[0]

    return filteredBook
}

function insertBook (newBook) {
    const books = JSON.parse(fs.readFileSync("livros.json"));
    const newBooksArray = [ ...books, newBook ]

    fs.writeFileSync("livros.json", JSON.stringify(newBooksArray))
}

function modifyBook(modifications, id) {
    let presentBooks = JSON.parse(fs.readFileSync("livros.json"));
    const indexFromBookToModify = presentBooks.findIndex( book => book.id === id);

    // spread no objeto = modifiedContent vai ser o meu objeto presentBooks na posição indexFromBookToModify + o que vai ser passado em modifications
    const modifiedContent = { ...presentBooks[indexFromBookToModify], ...modifications };

    // aqui é a aplicação das alterações de modifiedContent em presentBooks[indexFromBookToModify], assim edita o valor com apenas o que eu quero modificar
    presentBooks[indexFromBookToModify] = modifiedContent;

    fs.writeFileSync("livros.json", JSON.stringify(presentBooks))

}

function removeBookById(id) {
    const books = JSON.parse(fs.readFileSync("livros.json"));
    // const indexFromBookToRemove = newPresentBooks.findIndex( book => book.id === id );

    // if(indexFromBookToRemove > -1) {
    //     newPresentBooks.splice(indexFromBookToRemove, 1);
    //     fs.writeFileSync("livros.json", JSON.stringify(newPresentBooks));
    // }
    const filteredBook = books.filter( book => book.id !== id )
    
    fs.writeFileSync("livros.json", JSON.stringify(filteredBook));
};

module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    modifyBook,
    removeBookById
}