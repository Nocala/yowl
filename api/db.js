const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  port : 3306, 
  user: 'root',
  password: 'yowl',
  database: 'yowl_database'
});
 
// Vérifier la connexion
db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
  } else {
    console.log('Connecté à la base de données MySQL !');
  }
});
 
module.exports = db;