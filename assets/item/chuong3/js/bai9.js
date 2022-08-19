var a, elementIP;
function createArray(){
    elementIP = document.getElementById("element-input").value;
    a = new Array(elementIP);
    for(var i=0; i<elementIP; i++){
        a[i] = Math.floor(Math.random() * 50);
    }
    var arrDefault ='';
    for(var i =0; i<elementIP; i++){
        arrDefault += a[i] + " ";
    }
    document.getElementById("default-array").innerHTML = arrDefault;
}

function sortAscen(){
    var arrAscen = '';
    for(var i = 0; i<elementIP; i++){
        for(var j = i+1; j<elementIP; j++){
            if(a[i]>a[j]){
                var tmp;
                tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
        }
        arrAscen += a[i]+" ";
    }
    document.getElementById("ascending-array").innerHTML = arrAscen;
}

function sortDecrease(){
    var arrDecrease = '';
    for(var i = 0; i<elementIP; i++){
        for(var j = i+1; j<elementIP; j++){
            if(a[i]<a[j]){
                var tmp;
                tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
        }
        arrDecrease += a[i]+" ";
    }
    document.getElementById("decrease-array").innerHTML = arrDecrease;
}