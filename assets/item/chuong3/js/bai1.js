function calculate(){
    var x = document.getElementById("name").value;
    var y = document.getElementById("age").value;
    document.getElementById("text-name").innerHTML = "Chao ban "+ x;
    document.getElementById("text-age").innerHTML = "Tuoi cua ban la: "+(2022 - y);
}
