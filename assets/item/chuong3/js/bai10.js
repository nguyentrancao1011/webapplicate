var textIP = document.getElementById("text-input").value;
document.getElementById("text-header").innerHTML = textIP;

function changeColor(){
    textIP = document.getElementById("text-input").value;
    var backgrColor = document.getElementById("bgcolor").value;
    var textColor = document.getElementById("textcolor").value;
    document.getElementById("text-header").innerHTML = textIP;
    document.getElementById("bgr-header").style.backgroundColor = backgrColor;
    document.getElementById("bgr-header").style.color = textColor;
}