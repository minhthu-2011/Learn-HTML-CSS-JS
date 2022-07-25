//Kiem tra so nguyên tố: số chia hết cho 1 và chính nó
số nguyên tố N
N%1==0  -> n=1
N%2!=0
N%3!=0
N%4!=0
N%5!=0
N%...!=0
N%N==0 -> n=2
=> nếu N chỉ chia hết cho 1 và N -> N là số nguyên tố

function soNguyenTo(N) {
	var n = 0;
	for(var i = 0; i <= N; i ++) {
		a = N % i;
		if (a==0){
			n = n + 1;
		}
	} 
	if (n == 2) {
		console.log(N + " là số nguyên tố");
	}
	else {
		console.log(N + " không là số nguyên tố");
	}
}
soNguyenTo(11);
soNguyenTo(6);

//Tìm số lớn nhất [4, 8, 12, 9]
- nếu 4 > 8: 4 là SLN -> so sánh 4 với 12: nếu 4 > 12: 4 là SLN -> so sánh 4 với 9: nếu 4 > 9: 4 là SLN 
                                                                                            9 > 4: 9 là SLN
												 12 > 4: 12 là SLN -> so sánh 12 với 9: nếu 12 > 9: 12 là SLN
                                                                                              9 > 12: 9 là SLN																							  
- nếu 8 > 4: 8 là SLN -> so sánh 8 với 12: nếu 8 > 12: 8 là SLN -> so sánh 8 và 9: nếu 8 > 9: 8 là SLN
                                                                                       9 > 8: 9 là SLN
											   12 > 8: 12 là SLN -> so sánh 12 với 9: nếu 12 > 9: 12 là SLN
											                                              9 > 12: 9 là SLN

if(4 > 8){
	if(4 > 12){
		if(4 > 9) {
			console.log("4 là số lớn nhất");
		}
		else {
			console.log("9 là số lớn nhất");
		}
	}
	else {
		if(12 > 9) {
			console.log("12 là số lớn nhất");
		}
		else {
			console.log("9 là số lớn nhất");
		}
	}
}
else {
	if(8 > 12) {
		if(8 > 9) {
			console.log("8 là số lớn nhất");
		}
		else {
			console.log("9 là số lớn nhất");
		}
	}
	else {
		if(12 > 9) {
			console.log("12 là số lớn nhất");
		}
		else {
			console.log("9 là số lớn nhất");
		}
	}
}
// Cách khác: sắp xếp mảng tăng dần/ giảm dần
function run(a, b, c, d){
    let myArray = [a, b ,c ,d]
    myArrayLength = myArray.length
    for(let i = 0; i < myArrayLength; i ++){
        for(let j = i + 1; j < myArrayLength; j ++){
            if(myArray[i] < myArray[j]){
                let temp = myArray[i]
                myArray[i] = myArray[j]
                myArray[j] = temp
            }
        }
    }
    let sorted_str = myArray.toString();
    console.log(sorted_str)
}

// sắp xếp từ lớn -> bé [a, b, c] -> [19, 3, 2]
so sánh a, b:- nếu a < b -> mảng [b, a] -> so sánh b, c: nếu b < c -> so sánh c, a: nếu c < a -> mảng [b, a, c]
                                                                                       a < c -> mảng [b, c, a]
															c > b -> mảng [c, b, a]
			 - nếu b < a -> mảng[a, b] -> so sánh a, c: nếu a < c -> so sánh b, c: nếu b > c -> mảng [a, b, c]
			                                                                           c > b -> mảng [a, c, b]
				                                        nếu c < a -> mảng [c, a, b]

var a = 19;
var b = 3;
var c = 2;
if(a < b){
	if(b < c) {
		if(c < a) {
			console.log('[' + b + ' > ' + a + ' > ' + c + ']');
		}
		else {
			console.log('[' + b + ' > ' + c + ' > ' + a + ']');
		}
	}
	else {
		console.log('[' + c + ' > '+ b + ' > '+ a + ']');
	}
}
else {
	if(a < c) {
		if(b > c) {
			console.log('[' + a + ' > ' + b + ' > ' + c + ']');
		}
		else {
			console.log('[' + a + ' > ' + c + ' > ' + b + ']');
		}
	}
	else {
		console.log('[' + c + ' > ' + a + ' > ' + b + ']');
	}
}

// Tính tổng từ 1->10
S = 0;
S = 0 + 1 
 -> 0 + 1 + 2 
 -> 0 + i

var S = 0;
for(var i = 1; i <= 10; i ++) {
	S = S + i;
}
console.log(S);

// Tính tổng số chẵn/ lẻ
S = 0;                    S = 1;
S = 0 + 2;                S = 1 + 3 = 1 + (2*1 + 1)
S = 0 + 2 + 4             S = 1 + 3 + 5 = 1 + (2*1 + 1) + (2*2 + 1)
S = S + 2*i               S = S + (2*i + 1)

var S = 0;
for(var i = 1; i <= 5; i ++) {
	S = S + 2*i;
}
console.log(S);

var s = 0;
for(var j = 1; j <= 10; j ++) {
	if(j %2== 0){
		s = s + j;
	}
}
console.log(s);

var S = 1;
for(var i = 1; i <= 4; i ++){
	S = S + (2*i + 1);
} 
console.log(S);

var s = 0;
for(var i = 1; i <= 10; i ++) {
	if (i %2 == 1) {
		s = s + i;
	}
}
console.log(s);

// Kiểm tra  số chính phương: 4 = 2^2 , 9 = 3^3 , ...
B1: Tìm 1 số <= n và bình phương số đó = n
    nếu: i <= n , i^2 = n -> n là số chính phương -> Dừng vòng lặp
B2: nếu: i == n -> n không là số chính phương

function soChinhPhuong(n) {
	for(var i = 0; i <= n; i ++) {
		if(Math.pow(i, 2) == n) {
			console.log(n + " là số chính phương");
			break;
		}
		if(i == n) {
			console.log(n + " không là số chính phương");
		}
	}
}
soChinhPhuong(7);


//Vẽ tam giác vuông cân *
*
**
***
****
*****
- Hàng dọc = hàng ngang
B1: i=0, i<=5, i++
B2: j=0, j<=5; j++



function veHinh(n) {
	for(var i = 0; i <= n; i ++) {
		for(var j = 0; j <= n; j ++) {
			document.write("*");
		}
		document.write('<br/>');
	}
}
veHinh(5);

//in tam giác cân
//Vẽ từng hàng:
for(var i=1; i <= 6; i ++) {
  document.write("-");
  if(i==3) {
      document.write("*");
  }
}
document.write('<br/>');
for(var i=1; i <= 4; i ++) {
  document.write("-");
  if(i==2) {
      document.write("***");
  }
}
document.write('<br/>');
for(var i=1; i <= 2; i ++) {
  document.write("-");
  if(i==1) {
      document.write("*****");
  }
}
document.write('<br/>');
for(var i=1; i <= 7; i ++) {
  document.write("*");
}

//Vẽ gộp:
for (var i = 1; i <= 4; i++) {
  for (var j = 6; j > 0; j --) {
    document.write("-");
  }
  for (j = 1; j <= 2*i-1; j ++) {
    document.write("*");
  }
  document.write('<br/>');
}


for(var i = 1; i <= 4; i ++) {
  for(var j = 4+1-i; j > 0; j --) {
	document.write("-");
  }
  for(j = 1; j <= 2*i-1; j ++) {
	document.write("*");
  }
  document.write('<br/>');
}

function veTamGiacCan(n) {
	for(var i = 1; i <= n; i ++) {
		for(var j = n+1-i; j > 0; j --) {
			document.write("-");
		}
		for(j = 1; j <= 2*i-1; j ++) {
			document.write("*");
		}
		document.write('<br/>');
		}
}
veTamGiacCan(5);

function veTamGiacCan(n) {
	for(var i = 1; i <= n; i ++) {
		for(var j = 1; j <= n+1-i; j ++) {
			document.write("-");
		}
		for(j = 1; j <= 2*i-1; j ++) {
			document.write("*");
		}
		document.write('<br/>');
	}
}
veTamGiacCan(5);