var http = require('http');
const fs=require('fs');
const url=require('url');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    if(req.method=='GET'){
            
               // let parametri = url.parse(req.url,true).query.q;
               let parametri;

               parametri = new URLSearchParams(req.url);
               var indeks=parseInt(parametri.toString().indexOf('q'))+2;
               var duzina=parseInt(parametri.toString().length);
               var podstring=parametri.toString().substring(indeks,duzina);
              // console.log(podstring);
        fs.readFile('imenik.txt',function(err,contents){
            if(err)throw err;
            
            var contentsString=contents.toString("utf-8");
            var sve=contentsString.split(/\r\n|\n/);
            var jsonSadrzaj='[';
            for(var i=0;i<sve.length;i++){
                var linija=sve[i].split(',');
            //    console.log(parametri.toString().toLowerCase());
            var linija1=linija[0].toLowerCase();
            var podstring1=podstring.toLowerCase();
            if(linija1==podstring1){
                jsonSadrzaj+='{"ime":'+linija[0]+'", "prezime":"'+linija[1]+'", "adresa":"'+
                linija[2]+'", "broj_telefona":"'+linija[3]+'"}';
                if(i!=sve.length-1)jsonSadrzaj+=',';
                }
            }
            jsonSadrzaj+=']';
            res.end(jsonSadrzaj);
        });
    
 
    
    
    }
}).listen(8080);