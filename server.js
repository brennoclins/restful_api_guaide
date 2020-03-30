const express = require('express');
const app = express();
const data = require('./data.json');

app.use(express.json());

app.get("/clients", (req, res) => {

    res.json(data);
});

app.get("/clients/:id", (req, res) => {

    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if(!client) return res.status(204).json();
    res.json(client);
});

app.post("/clients", (req, res) => {

    const { name, email } = req.body;
    //logica de programação pra salvar o cliente no banco de dados
    //...
    res.json({ name, email });
});

app.put("/clients/:id", (req, res) => {

    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if(!client) return res.status(204).json();

    const { name, email } = req.body;
    client.name = name;
    client.email = email;
    res.json(client); 
});

app.delete("/clients/:id", (req, res) => {
    
    const { id } = req.params;
    const clientsFiltered = data.filter(cli => cli.id != id);

    res.status(200).json(clientsFiltered);
});

app.listen(3000, () => {
    console.log('Server is running');
});