//VD1: i + j = 6
for(var i = 0; i <= 6; i++) {
  for (var j = 0; j <= 6; j ++) {
    if ((i + j) === 6) {
      console.log(`x = ` + i + ' y = ' + j)
    }
  }
}

//VD2: Tinh tong tu 1-10
var S = 0;
for(var i = 1; i<=10; i++) {
  S = S + i;
}
console.log(S);

//Bai 1: Tinh tong tu 1-100
var s = 0;
for (var i = 1; i <= 100; i ++) {
	s = s + i;
}
console.log(s);

//Baii 2: Tính tích từ 1 đến 10
var s = 1;
for (var j = 1; j <= 10; j ++) {
	s = s*j;
}
console.log(s);

//Bai 3: Tìm số lớn nhất trong 3 số: 1, 0 , 10
let array = [1, 0, 10];
array.sort(function(a, b) {  // sắp xếp mảng theo thứ tự tăng dần
  return a - b;
});
console.log("max = " ,array[array.length-1]); // length tinh tu 1
n = 2
console.log("max thứ "+ n +" = ",array[array.length-n]);

//Bai 4: Kiểm tra 1 số có phải là số chẵn
var a;
a = prompt("Nhập vào số a", "0"); // Lấy giá trị từ người dùng
a = parseInt(a); // Chuyển sang kiểu number
 
if (a % 2 == 0){   // Kiểm tra số chẵn và lẽ
    document.write("a là số chẵn");
}
else{
    document.write("a là số lẽ");
}

//Bai 6: Kiểm tra năm 2022 có phải là năm nhuận không
// chia hết cho 4, không chia hết cho 100 
var year = 2022;
if(year % 4 == 0 && year % 100 !== 0) {
	document.write("Nam nay la nam nhuan");
}
else {
	document.write("Nam nay kp la nam nhuan");
}

