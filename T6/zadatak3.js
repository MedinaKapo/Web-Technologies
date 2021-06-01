/*var http = require('http');
var fs=require('fs');
var url=require('url');
http.createServer(function (req, res) {
    if(req.method=='POST'){
        let tijeloZahtiijeva='';
        req.on('data',function(data){
            tijeloZahtiijeva+=data;
        });
        req.on('end',function(){
            let parametri=new url.URLSearchParams(tijeloZahtiijeva);
            let novaLinija="\n"+parametri.get('ime')+","+parametri.get('prezime')+
            ","+parametri.get('adresa')+","+parametri.get('broj_telefona');
            fs.appendFile('imenik.txt',novaLinija,function(err){
                if(err)throw err;
                console.log("Novi red uspjesno dodan!");
                res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
                res.end(parametri.toString());
                fs.readFile('imenik.txt',function(err,contents){
            if(err)throw err;
            var contentsString=contents.toString();
            var sve=contentsString.split(/\r\n|\n/);
            var tabela='<style>table,tr,td{border: 1px solid black;border-collapse=collapse}</style>';
            for(var i=0;i<sve.length;i++){
                var linija=sve[i].split(',');
                tabela+='<tr><td>'+linija[0]+'</td><td>'+linija[1]+'</td><td>'+linija[2]+'</td><td>'+linika[3]+'</td><td>';
            }
            tabela+='</table>';
            res.end(tabela);
                });
            });
        });
        
    }
}).listen(8080);*/