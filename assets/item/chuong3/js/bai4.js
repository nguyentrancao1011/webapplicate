function operator(){
    if(document.getElementById("add").checked){
        var kq = get_result('add');
        document.getElementById("text-result").value = kq;
    }
    if(document.getElementById("subtract").checked){
        var kq = get_result('subtract');
        document.getElementById("text-result").value = kq;
    }
    if(document.getElementById("multiply").checked){
        var kq = get_result('multiply');
        document.getElementById("text-result").value = kq;
    }
    if(document.getElementById("divide").checked){
        var kq = get_result('divide');
        document.getElementById("text-result").value = kq;
    }
}


function get_result(action){
    var a = document.getElementById("inputA").value;
    var b = document.getElementById("inputB").value;
    var result;
    switch(action){
        case 'add': 
            result = parseInt(a) + parseInt(b);
        break;
        case 'subtract': 
            result = parseInt(a) - parseInt(b);
        break;
        case 'multiply':
            result = a*b;
        break;
        case 'divide':
            result = a/b;
        break;
    }
    return result;
}