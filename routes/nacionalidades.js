var express = require('express');
var router = express.Router();
const db = require('../utils/db');
const { title, send } = require('process');




router.get('/listar', (req, res) => {
  let query = 'SELECT IdNacionalidade AS ID, NoNacionalidade AS Nacionalidade FROM tbnacionalidade ORDER BY NoNacionalidade'

  db.query(query, (erro, listagem)=>{
    if ( erro ) {
      res.send(erro);
    }

    res.json(listagem);
    
  })
});









router.use(express.urlencoded({extended:true})); // resultado das reqs agora pode vir em JSON

module.exports = router;
