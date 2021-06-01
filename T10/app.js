/*const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const sequelize = require('./baza.js');
const express = require("express");
const app = express();
const Imenik = sequelize.import(__dirname+"/imenik.js");
Imenik.sync();*/
const Sequelize=require('sequelize');
const db=require('./baza.js');
db.sequelize.sync({force:true}).then(function(){
    initialize().then(function(){
        console.log("kreirane tabele");
        process.exit();
    });
});

function initialize(){
    var imenikLista=[];
    var adresarLista=[];

    return new Promise(function(resolve,reject){
        imenikLista.push(db.imenik.create({ime:"Medina",prezime:"Kapo",adresa:"Dob.bolnice 7",brojTelefona:"062/941-555"}));
        imenikLista.push(db.imenik.create({ime:"Ilma",prezime:"Musovic",adresa:"grada kalgarija 2",brojTelefona:"062/877-537"}));
        imenikLista.push(db.imenik.create({ime:"Amila",prezime:"Rozajac",adresa:"adija mulabegovica",brojTelefona:"062/390-634"}));

        Promise.all(imenikLista).then(function(clan){
            adresarLista.push(db.adresar.create({idKontakt:1,idPoznanik:2}));
            adresarLista.push(db.adresar.create({idKontakt:2,idPoznanik:3}));
        }).catch(function(err){
            console.log("GReska");
            console.log(err);
        });
    });
}