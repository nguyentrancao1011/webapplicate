function statistic(){
    var textValue = document.getElementById("form-input").value;
    textValue = textValue.trim();
    var lengthString = textValue.length;
    var lengthWord = textValue.split(' ').length;
    var check = new Array(255);
    var checkOut = new Array(255);
    for(var i =0; i<255; i++){
        check[i] = 0;
        checkOut[i] = 0;
    }
    for(var i=0; i<lengthString; i++){
        check[textValue.charCodeAt(i)]++;
    }

    var textRs = "Characters: "+lengthString+"<br>Words: "+lengthWord;
    for(var i=0; i<255; i++){
        if(check[i] != 0){
            textRs+= "<br>Character "+'\''+String.fromCharCode(i)+"\': "+check[i];
            // checkOut[i] = 1;
        }
    }
    document.getElementById("text-result").innerHTML = textRs;
}