const PI = require("../models/ProgramacaoModel");

exports.test = function (req, res) {
    res.send("Olá! Teste ao Controller");
  };

exports.details = (req, res ) => {
    res.send({type: 'GET'})
}

exports.add = (req, res ) => {
    res.send({type: 'POST'})
}

exports.update = (req, res ) => {
    res.send({type: 'PUT'})
}

exports.delete = (req, res ) => {
    res.send({type: 'DELETE'})
}

exports.create = (req, res) => {
    PI.create(req.body).then(function(pi){
        res.send(pi);
    })
  };

  