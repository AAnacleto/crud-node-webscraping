const express = require('express');
const bodyParser = require('body-parser');
const chamarDados = require('./index.js');
const mongoose = require('mongoose');
// const PI = require('../models/ProgramacaoModel.js');

const app = express();

let port = 5000;

app.listen(process.env.port || port, () =>{
    console.log('Servidor em execução no porto: '+ port);
  });

app.get('/', function(req, res){
    res.send('END POINT INVÁLIDO!');
  });

const routes = require('./routes/api');
app.use(bodyParser.json());

app.use('/api', routes); 

// Ligar á B.D.: 'test'->user da BD, ´nnn´->pass
mongoose.connect('mongodb+srv://allysson_anacleto:Equipamentos123@crud-nodejs.rgnomlx.mongodb.net/?retryWrites=true&w=majority');
// Confirma ligação na consola
mongoose.connection.on('connected', function () {
  console.log('Connected to Database '+'test');
});
// Mensagem de Erro
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

const lista = [];

// lista.push(chamarDados.getAtracao());

console.log("externa", chamarDados.getAtracao());

console.log(lista)







