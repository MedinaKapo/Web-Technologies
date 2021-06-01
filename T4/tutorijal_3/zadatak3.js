   // Dugme sa IDom "dugme"
   // Funkcija koja se izvršava klikom na dugme
   function prikazi(){
    var stotine=["stotinu","dvijestotine","tristotine","cetiristotine","petstotina","seststotina","sedamstotina","osamstotina","devetstotina"];
    var desetice=["deset","dvadeset","trideset","cetrdeset","pedeset","seszdeset","sedamdeset","osamdeset","devedeset"];
    var jedinice=["jedan","dva","tri","cetiri","pet","sest","sedam","osam","devet"];
    var posebni=["jedanaest","dvanaest","trinaest","cetrnaest","petnaest","sesnaest","sedamnaest","osamnaest","devetnaest"];
    
    var tekst=document.getElementById("tekst").value;
    var broj=0;
    var pocetnaPozicija=0;
    var krajnjaPozicija=0;
    var izbacivanje;
    var zamjena;
    for(var i=0;i<tekst.length;i++){
           if(parseInt(tekst[i])>=0 && parseInt(tekst[i])<=9){
               pocetnaPozicija=i;
               for(var j=i;j<tekst.length;j++){
                   if(parseInt(tekst[j])>=0 && parseInt(tekst[j])<=9){
                       izbacivanje+=j;
                       broj=broj*10+parseInt(tekst[j]);
                   }
                   else{
                       krajnjaPozicija=j-1;
                       break;
                   }
               }
                   
           }
           else{
               var ostatak;
               while(broj>0){
               if(broj>0 && broj<=9){
                   zamjena=jedinice.indexOf(broj);
                   break;
               }
               else if(broj>10 && broj<=19){
                   zamjena=posebni.indexOf(broj-10);
                   break;
               }
               else if(broj>=10 && broj>19 && broj<=90){
                   zamjena=desetice.indexOf(round(broj/10));
                   ostatak=broj-(broj/10);
                   broj=ostatak;
               }
               else if(broj>=100 && broj<=900){
                   zamjena=stotine.indexOf(round(broj/100));
                   ostatak=broj-(broj/100)*100;
                   broj=ostatak;
               }
          /*     else if(broj>=1000 && broj<=1000000){
              
               }*/
           }
               tekst.replace(izbacivanje,zamjena);
           i=krajnjaPozicija+1;
           broj=0;
       }
    }
    document.getElementById("tekst").value=tekst;
    alert(tekst);
   }
   var dugme = document.getElementById("dugme");
   dugme.addEventListener( "click", function prikazi() {}, false);

