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

module.exports = {
    getAllBooks,
    getBookById,
    insertBook
}