const fs = require("fs");

const presentData = JSON.parse(fs.readFileSync("livros.json"));
const newData = {id:"3", nome:"Livro mais que irado, ele é top"}
;
fs.writeFileSync("livros.json", JSON.stringify([...presentData, newData ]))

console.log(JSON.parse(fs.readFileSync("livros.json")));