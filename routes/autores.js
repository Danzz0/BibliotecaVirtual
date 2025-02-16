var express = require('express');
var router = express.Router();
const db = require('../utils/db');
const { title, send } = require('process');






router.delete('/delete/:id', (req, res) => {
  let id = req.params.id;

  let query = `DELETE FROM tbautor WHERE IdAutor = ${id};`;

  console.log(query)
  db.query(query, [], (erro)=>{
    if(erro){
      res.send(erro);
    }

    res.redirect(303, '/autores/listar');
  })
})









router.put('/edit/:id', (req, res) => {
  let id = req.params.id;
  
  let nome = req.body.nome;
  let nacionalidade = req.body.nacionalidade



  let query = `UPDATE tbautor SET NoAutor = '${nome}', IdNacionalidade = ${nacionalidade} WHERE IdAutor = ${id}`;


  console.log(query)

  db.query(query, (erro, listagem) => {
    if (erro){
      res.send(erro)
    }

    res.redirect(303, '/autores/listar'); // não pode ser caminho relativo 'EX: /listar'
  })
})



router.get('/edit/:id', (req, res) => {
    let id = req.params.id;
    let query = "SELECT IdAutor AS ID, NoAutor AS Autor, IdNacionalidade FROM tbautor WHERE IdAutor = ?;";


    db.query(query, [id], (erro, listagem) => {
      if ( erro ){
        res.send(erro);
      }

      res.render("autores-add", {resultado: listagem[0]});

    }) 
});







router.get('/listar', (req, res) => {
  let query = 'SELECT IdAutor AS ID, NoAutor AS Autor, NoNacionalidade AS Nacionalidade FROM tbautor'
      query += ' INNER JOIN tbnacionalidade'
      query += '   ON tbautor.IdNacionalidade = tbnacionalidade.IdNacionalidade'
      query += ' ORDER BY NoNacionalidade asc;'


  db.query(query, (erro, listagem)=>{
    if ( erro ) {
      res.send(erro);
    }

    res.render('autores', {title: "Autores", results: listagem});
  })
});






router.get('/add', (req, res) => {
  res.render('autores-add', {resultado: {}})
})






router.post('/add', (req, res) => {
  let nome = req.body.nome;
  let nacionalidade = req.body.nacionalidade;

  let query = `INSERT INTO tbautor (NoAutor, IdNacionalidade)`
      query += ` VALUES ("${nome}", ${nacionalidade});` 

  db.query(query, (erro, listagem)=>{
    if ( erro ) {
      res.send(erro);
    }

    res.redirect('listar');
  })
})






router.use(express.urlencoded({extended:true})); // resultado das reqs agora pode vir em JSON

module.exports = router;
