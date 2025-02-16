const mysql = require('mysql')
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        port: 3306,
        database: 'dbbiblioteca',
        multipleStatements: true

    }
)



db.connect((erro) => {
    if(erro){
        throw erro.name;
    }

    console.log("Deu certo!")
});

global.db = db;
module.exports = db;