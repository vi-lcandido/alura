const express = require("express");
const bookRoute = require("./routes/livro")

const app = express();

app.use(express.json());
app.use('/livros', bookRoute);

const port = 8000;

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
}) 