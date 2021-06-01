var odgovor = prompt("Unesite neki tekst", "Tekst(default)");
if (odgovor!=null && odgovor!="")
{
    var obrnuto=odgovor.split("").reverse().join("");
          alert(obrnuto);
}
