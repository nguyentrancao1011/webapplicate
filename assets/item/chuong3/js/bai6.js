function get_result(){
    var d = new Date();
    var user = document.getElementById("username").value;
    var pw = document.getElementById("password").value;
    var age = document.getElementById("birthday").value;
    var gender = get_gender();
    // Lấy input option 
    var select = document.getElementById("form-control");
    var option = select.options[select.selectedIndex];
    var text = option.text;
    var yr = age.slice(0,4);
    document.getElementById("text-result").innerHTML = "Chào mừng "+user+"<br>Bạn là "+gender+"<br>Mật khẩu của bạn có "+countChar(pw)+" ký tự <br>Tuổi của bạn là "+(2022 - (Number.parseInt(yr)))+"<br>Vấn đề bạn quan tâm là "+text;
}
function get_gender(){
    var gd;
    if(document.getElementById("male").checked){
        gd = 'Nam';
    }
    if(document.getElementById("female").checked){
        gd = 'Nữ';
    }
    return gd;
}

function countChar(s){
    var count = 0;
    for(var i=0; i<s.length; i++){
        count+=1;
    }
    return count;
}
