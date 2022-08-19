var lg = document.getElementsByClassName("table-ele");

function multi(){
    for(var i = 2; i<=9; i++){
        var tmp ='';
        for(var j = 2; j<=9; j++){
            tmp =tmp + i+'x'+j+'='+i*j+'<br>';
        }
        lg[i-2].innerHTML = tmp;
    }
}

multi();