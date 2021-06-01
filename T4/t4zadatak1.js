window.onload=function(){
    document.getElementById('prvaGodina').style.display="none";
    document.getElementById('drugaGodina').style.display="none";
}

function izlistajPredmete(ulaz){
    if(ulaz.id=="prva"){
        if(document.getElementById('prvaGodina').style.display=="none"){
            document.getElementById('prvaGodina').style.display="block";
            document.getElementById('plus').innerHTML="-";
        }
        else{
        document.getElementById('prvaGodina').style.display="none";
        document.getElementById('plus').innerHTML="+";
        }
    }
    else if(ulaz.id=="druga"){
        if(document.getElementById('drugaGodina').style.display=="none"){
            document.getElementById('drugaGodina').style.display="block";
            document.getElementById('plus1').innerHTML="-";
        }
        else{
        document.getElementById('drugaGodina').style.display="none";
        document.getElementById('plus1').innerHTML="+";
        }
    }
}