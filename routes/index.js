var express = require('express');
var router = express.Router();
const db = require('../utils/db');
const { title, send } = require('process');


router.get('/', (req, res,) => {
  res.render('index', {title: "Home"})
})




router.use(express.urlencoded({extended:true})); // resultado das reqs agora pode vir em JSON

module.exports = router;
