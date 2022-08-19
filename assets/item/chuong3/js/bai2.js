// alert(date());
// function date(){
//     var text;
//     prompt("Nhap vao thang:");
//     prompt("Nhap vao nam: ");
//     var month = document.getElementById("")
//     if(confirm(month)){
//         alert(year());
//     }
//     if(confirm(year)){
//         checkTime();
//     }
// }

// function checkTime(){
//     document.getElementById("text-time").innerHTML = "Thang "+month.value+" nam "+year.value;
// }
var d = new Date();
alert(date());
function get_day(year, month){
    return new Date(year, month, 0).getDate();
}
function date(){
    var month = prompt("Nhập vào tháng: ");
    var year = prompt("Nhập vào năm: ", 2000);
    document.getElementById("text-time").innerHTML = "Tháng "+month+ " Năm "+year +" có "+get_day(year, month)+" ngày";
}

 //Thực hiện hàm clock theo chu kỳ 1 giây

function get_day_time(){
    var days = ["Chủ nhật", 2, 3, 4, 5, 6, 7];
    document.getElementById("date_today").innerHTML = "Hôm nay, thứ "+days[d.getDay()]+" ngày "+d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
    //Khởi tạo đối tượng timer sử dụng Date Object
    var timer = new Date();
    //Gọi các phương thức của đối tượng timer
    var hour = timer.getHours();  //Lấy giờ hiện tại (giá trị từ 0 - 23)
    var minute = timer.getMinutes();  //Lấy phút hiện tại
    var second = timer.getSeconds();  //Lấy giây  hiện tại
    //Thêm ký tự 0 đằng trước nếu giờ, phút, giây < 10 với câu lệnh điều khiển if
    if(hour < 10) {
        hour = "0" + hour;
    }
    if(minute < 10) {
        minute = "0" + minute;
    }
    if(second < 10) {
        second = "0" + second;
    }
    //Hiện thị thời gian lên thẻ div id="clock" với phương thức innerHTML
    document.getElementById("time_today").innerHTML = hour + ":" + minute + ":" + second;
    setInterval("get_day_time()",1000);
}
