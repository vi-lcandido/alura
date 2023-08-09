const express = require("express");
const bookRoute = require("./rotas/livro")

const app = express();

app.use('/livros', bookRoute);

const port = 8000;

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
}) 