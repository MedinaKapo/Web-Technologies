function sabiranje(){
      var a = parseInt(document.getElementById("sabirak1").value);
   var b = parseInt(document.getElementById("sabirak2").value);
   var c=a+b;
   document.getElementById("zbir").value = c;
}



var dugme = document.getElementById("dugme");
   // Funkcija koja se izvršava klikom na dugme
   dugme.addEventListener( "click", function sabiranje(){}, false);

//drugi nacin
/*// Dugme sa IDom "dugme"
   var dugme = document.getElementById("dugme");
   // Funkcija koja se izvršava klikom na dugme
   dugme.addEventListener( "click", function( ev ) {
       var a = parseInt(document.getElementById("sabirak1").value);
    var b = parseInt(document.getElementById("sabirak2").value);
    var c=a+b;
    document.getElementById("zbir").value = c;
   }, false);*/
