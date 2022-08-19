function get_value(){
    var a = document.getElementById("valueA").value;
    var b = document.getElementById("valueB").value;
    var c = document.getElementById("valueC").value;
    var delta = Math.pow(b,2) - 4*a*c;
    if(delta < 0){
        document.getElementById("text-results").innerHTML = "Phương trình vô nghiệm";
    }
    else if(delta == 0){
        document.getElementById("text-results").innerHTML = "Phương trình có nghiệm kép x1 = x2 = "+-(b/2*a);
    }
    else{
        document.getElementById("text-results").innerHTML = "Phương trình có 2 nghiệm: "+"<br>x1 = "+((-b+Math.sqrt(delta))/2*a)+"<br>x2 = "+((-b-Math.sqrt(delta))/2*a);
    }
}


function clean(){
    var gt = document.querySelectorAll(".value");
    for(var i=0; i<gt.length; i++){
        gt[i].value = '';
    }
}
