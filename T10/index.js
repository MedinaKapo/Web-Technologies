const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const db=require('./baza.js');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true}));

var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'imenikWT'
});

pool.getConnection(function(error, connection) {
	if (error) throw error;
	console.log('Connected');
});
/*app.get('/imenik', function(req, res) {	
	var query = pool.query('SELECT * FROM imenik');
	var tabela = "<style>table, tr, td {border: 1px solid black;border-collapse:collapse}</style><table><tr><td>Ime i prezime</td><td>Adresa</td><td>Broj telefona</td></tr>";
query
  .on('error', function(err) {
    
    console.log("ERROR", err);
  })
  .on('fields', function(fields) {
  
  })
  .on('result', function(row) {
    
    var noviRed = processRow(row, function() {
    	console.log(row);
    });
    tabela += noviRed;
  })
  .on('end', function() {
   
  	tabela += "</table>";
  	res.send(tabela);
  });
	
});*/

app.get('/imenik',function(req,res){
	db.imenik.findAll({
		attributes:['ime','prezime','adresa','brojTelefona']
	})
	.then(
		svi=>{
			var tabela = "<style>table, tr, td {border: 1px solid black;border-collapse:collapse}</style><table><tr><td>Ime</td><td>Prezime</td><td>Adresa</td><td>Broj telefona</td></tr>";
			for(var i=0;i<svi.length;i++){
				var red=processRow(svi[i]);
				tabela+=red;
			}
			res.send(tabela);
		}
	)
});

function processRow(row) {
	var red = "<tr><td>" + row["ime"] + "</td><td>" + row["prezime"] + "</td><td>" + row["adresa"] +"</td><td>" + row["brojTelefona"] + "</td></tr>";
	return red;
}

app.get('/forma', function(req, res) {
	res.sendFile('/forma.html', {root: __dirname});
});

app.post('/unos', function(req, res) {
   let tijelo = req.body;  
  /* var post = {ime_prezime: tijelo['ime']+' ' +tijelo['prezime'], adresa: tijelo['adresa'], broj_telefona: tijelo['brojTelefona']};
   var query = pool.query('INSERT INTO imenik SET ?', post, function(error, results, fields) {
   		if (error) throw error;
   });
   res.send("Ubaceno u bazu");*/
   db.imenik.create({ime:tijelo["ime"],prezime:tijelo["prezime"],adresa:tijelo["adresa"],brojTelefona:tijelo["brojTelefona"]})
   .then(res.send("Ubaceno"));
});

app.get('/poznanik/:kontakt', function(req, res) {
	var kontakt = req.params.kontakt;
	  var tabela = "<style>table, tr, td {border: 1px solid black;border-collapse:collapse}</style><table><tr><td>Ime</td><td>Prezime</td><td>Adresa</td><td>Broj telefona</td></tr>";
	 /* var query = pool.query("SELECT * FROM imenik, adresar WHERE adresar.idKontakta = ? AND adresar.idPoznanik = imenik.id", kontakt); 
	  query
	.on('error', function(err) {

	  console.log("ERROR", err);
	})
	.on('fields', function(fields) {

	})
	.on('result', function(row) {

	  var noviRed = processRow(row, function() { 
		  console.log(row);
	  });
	  tabela += noviRed;
	})
	.on('end', function() {

		tabela += "</table>";
		res.send(tabela);
	  //connection.end();
	});*/

	db.sequelize.query("SELECT imeniks.ime,imeniks.prezime,imeniks.adresa,imeniks.brojTelefona FROM imeniks,adresar WHERE adresar.idKontakt="+kontakt+" AND adresar.idPoznanik=imeniks.id",
	{type:db.sequelize.QueryTypes.SELECT})
	.then(poznanici=>{
		for(var i=0;i<poznanici.length;i++){
			var novi=processRow(poznanici[i]);
			tabela+=novi;
		}
		res.send(tabela);
	});
  
  });



app.listen(3000);

//connection.end();