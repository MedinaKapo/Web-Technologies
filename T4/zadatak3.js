function submit(){
    var tekst=document.getElementById("tekst").value;
   /* var regex=/(<([^>]+)>)/ig;
    var regex2=/(&amp)/ig;
    var regex3=/(&nbsp)/ig;
    var regex4=/(&quot)/ig;
    var noviTekst=tekst.replace(regex,"");
    document.getElementById("tekst").value=noviTekst;
    if(document.getElementById("tekst").contains("&amp")){
        noviTekst=tekst.replace(regex2,'&');
        document.getElementById("tekst").value=noviTekst;
    }
    /*
    noviTekst=tekst.replace(regex3,'');
 document.getElementById("tekst").value=noviTekst;
    noviTekst=tekst.replace(regex4," '");
   document.getElementById("tekst").value=noviTekst;*/
   var regex=/(<([^>]+)>)/ig;
   var novi=tekst.replace(regex,"").replace(/&amp/ig,'&').replace(/&nbsp/ig,' ').replace(/&quot/ig,' " ');
   document.getElementById("tekst").value=novi;
}