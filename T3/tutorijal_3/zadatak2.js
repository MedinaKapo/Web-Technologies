var result="<table>";
for(var i=0;i<11;i++){
    if(i==0)result+="<tr class='greyRow'>";
    else if(i%2==0)result+="<tr class='yellowRow'>";
    else result+="<tr>";
    for(var j=0;j<11;j++){
        if(j==0)result+="<td class='greyRow'>";
        else result+="<td>";
        if(i==0 && j==0){
            result+="x";
        }
        else if(i==0 && j>0){
            result+=' '+j+' ';
        }
        else if(i>0 && j==0){
            result+=' '+i+' ';
        }
        else{
            result+=' '+i*j+'</td> ';
        }
    }
    result += '</tr><br>';
}
result += '</table>';
document.write(result);
