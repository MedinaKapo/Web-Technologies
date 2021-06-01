const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { table } = require('console');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/unos',function(req,res){
    res.sendFile("/forma.html",{root:__dirname});
});

app.post('/',function(req,res){
   let tijelo = req.body;
   let novaLinija = "\n"+tijelo['ime']+","+tijelo['prezime']+
       ","+tijelo['adresa']+","+tijelo['broj_telefona'];
   fs.appendFile('imenik.txt',novaLinija,function(err){
       if(err) throw err;
       //res.write({message:"Uspješno dodan red",data:novaLinija});
   });
    fs.readFile('imenik.txt',function(err,contents){
    if(err)throw err;
    var contentsString=contents.toString("utf-8");
    var sve=contentsString.split(/\n/);
    var tabela='<style>table,tr,td{border: 1px solid black;border-right:1 px solid black;}</style>';
    tabela='<table style="border: 1px solid black; border-collapse:collapse;">';
    for(var i=0;i<sve.length;i++){
        var linija=sve[i].split(',');
        tabela+='<tr style="border: 1px solid black;"><td stle="border: 1px solid black; margin:25px;">'+
        linija[0]+'</td><td style="border: 1px solid black; margin:25px;">'+linija[1]+'</td><td style="border: 1px solid black; margin:25px;">'
        +linija[2]+'</td><td style="border: 1px solid black; margin:25px;">'+linija[3]+'</td></tr>';
    }
    tabela+='</table>';
   // res.write(tabela);
    res.end(tabela);
        });
      
});
app.listen(8085);