var tmp2, st1, stringReverse, strTmp, cnt = 0, s2, pattern;
st1 = document.getElementById("string1").value;
function chuanHoa(){
    st1 = document.getElementById("string1").value;
    cnt+=1;
    if(cnt == 1){
        strTmp = st1;
    }
    st1 = st1.trim().toLowerCase();
    var tmp = st1.split('');
    for(var i=1; i<tmp.length-1; i++){
        if(tmp[i] == tmp[i+1]){
            for(var j = i; j<tmp.length-1; j++){
                tmp[j] = tmp[j+1];
            }
            tmp[tmp.length - 1] = null;
            i--;
            tmp.length--;
        }
    }
    var s1 = tmp.join('');
    var listString = s1.split(' ');
    var convert = listString.map(function(val){
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    tmp2 = convert.join(' ');
    if(tmp2 == ''){
        document.getElementById("text-result").innerHTML = "Hãy nhập chuỗi muốn chuẩn hóa.";
    }
    else{
        document.getElementById("string1").value = tmp2;
        document.getElementById("text-result").innerHTML = "Chuoi sau khi chuan hoa: "+tmp2;
        st1 = tmp2;
    }
}

function daoChuoi(){
    // chuanHoa();
    // if(tmp2 == ''){
    //     document.getElementById("text-result").innerHTML = "Vui lòng nhập chuỗi."
    // }
    // else{
    if(st1 == ''){
        document.getElementById("text-result").innerHTML = "Vui lòng nhập chuỗi.";
    }
    else{
        var tmp3 = tmp2.split(' ');
        stringReverse = tmp3.reverse().join(' ');
        document.getElementById("string1").value = stringReverse;
        document.getElementById("text-result").innerHTML = "Chuỗi sau khi đảo: "+stringReverse;
        st1 = stringReverse;
    }
    // }
}

function restore(){
    document.getElementById("string1").value = strTmp;
}

function replaceString(){
    s2 = document.getElementById("string2").value;
    pattern = new RegExp(s2, "gi");
    var s3 = document.getElementById("string3").value;
    if(s2==''){
        document.getElementById("text-result").innerHTML = "Vui lòng nhập chuỗi s2 hợp lệ (chuỗi hoặc số).";
    }   
    else{
        var rplStr = st1.replace(pattern, s3);
        document.getElementById("string1").value = rplStr;
        document.getElementById("text-result").innerHTML = "Chuỗi sau khi thay thế s2 bằng s3 là: "+rplStr;
        st1 = rplStr;
    }
}

function insertString(){
    st1 = document.getElementById("string1").value;
    var insertStr;
    var lengthString = st1.length;
    s2 = document.getElementById("string2").value;
    var index = document.getElementById("insert-index").value;
    if(st1 == ''){
        document.getElementById("text-result").innerHTML = "Vui lòng nhập chuỗi.";
    }
    else{
        if(index == ''){
            document.getElementById("text-result").innerHTML = "vui lòng nhập vị trí chèn từ 1-"+lengthString;
        }
        else{
            insertStr = st1.slice(0,index - 1) + s2 +st1.slice(index - 1);
            document.getElementById("text-result").innerHTML = "Chuỗi sau khi chèn s2 vào s1 là: "+insertStr;
            document.getElementById("string1").value = insertStr;
        }
    }
    st1 = insertStr;
}

function dltString(){
    s2 = document.getElementById("string2").value;
    pattern = new RegExp(s2, "gi");
    st1 = st1.replace(pattern, '');
    document.getElementById("string1").value = st1;
    document.getElementById("text-result").innerHTML = "Chuỗi sau khi xóa ký tự " + s2 +" là: " + st1;
}
