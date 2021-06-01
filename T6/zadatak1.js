var http = require('http');
var fs=require('fs');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    if(request.method=='GET'){
        fs.readFile('imenik.txt',function(err,contents){
            if(err)throw err;
            //buffer
            var contentsString=contents.toString("utf-8");
            var sve=contentsString.split(/\r\n|\n/);
            var jsonSadrzaj='[';
            for(var i=0;i<sve.length;i++){
                var linija=sve[i].split(',');
                jsonSadrzaj+='{"ime":'+linija[0]+'", "prezime":"'+linija[1]+'", "adresa":"'+
                linija[2]+'", "broj_telefona":"'+linija[3]+'"}';
                if(i!=sve.length-1)jsonSadrzaj+=',';
            }
            jsonSadrzaj+=']';
            response.end(jsonSadrzaj);
        });
    }
}).listen(8080);