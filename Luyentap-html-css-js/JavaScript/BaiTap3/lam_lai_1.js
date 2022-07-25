Bài 1: Cho 1 mảng gồm 10 phần tử, tìm phần tử lớn nhất trong mảng
	b1: sắp xếp mảng tăng dần
	b2: gán max = 0;
	b3: lặp từ A[0] -> A[A.length]
		nếu A[i] < A[i + 1] -> max = A[i +1]
	
let A = [1, 4, 2, 3, 6, 7, 8, 9, 5, 10];
A.sort(function(a, b){
	return a - b;
});
var max = A[0];
for(var i = 0; i < A.length; i ++) {
	if(A[i] < A[i+1]) {
		max = A[i + 1];
	}
}
console.log("Phan tu lon nhat la: " + max);

Bài 2: Cho 1 mảng gồm 10 phần tử, tìm phần tử nhỏ thứ 3 trong mảng
	b1: sap xep mang tang dan
	b2: -> phan tu nho thu 3 la A[0] -> A[1] -> A[2]

let A = [1, 4, 2, 3, 6, 7, 8, 9, 5, 10];
A.sort(function(a, b) {
	return a - b;
});
console.log("Phan tu nho thu 3 trong mang la: " + A[2]);

Bài 3: Cho 1 mảng gồm 10 phần tử, tìm tổng và trung bình công của các phần tử

let A = [1, 4, 2, 3, 6, 7, 8, 9, 5, 10];
S = 0;
for(var i = 0; i < A.length; i++) {
	S = S + A[i];
}
console.log("Tong 10 phan tu trong mang: " + S);
console.log("Trung binh cong 10 phan tu trong mang: " + S/A.length);

Bài 4: Cho 1 mảng gồm 10 phần tử, tìm tất cả các số nguyên tố có trong mảng
	b1: cm SNT trong mảng
	b2: lặp lần lượt từng phần tử trong mảng
		nếu phần tử A[i] thỏa mãn hàm SNT -> A[i] là SNT

function kiemTraSNT(N) {
	var dem = 0;
	for(var j = 0; j <= N; j ++) {
		if(N % j == 0) {
			dem++;
		}
	}
	if(dem==2) {
		console.log(N + " la so nguyen to");
	}
	else {
		console.log(N + " khong phai la so nguyen to");
	}
}
A = [1, 4, 2, 3, 6, 7, 8, 9, 5, 10];
for(var i = 0; i < A.length; i ++) {
	kiemTraSNT(A[i]);
}

function kiemTraSNT(N) {
	var dem = 0;
	for(var j = 0; j <= N; j ++) {
		if(N % j == 0) {
			dem++;
		}
	}
  
	if(dem==2) {
    console.log(N);
	}
}
console.log("Cac so nguyen to trong mang la:");
A = [1, 4, 2, 3, 6, 7, 8, 9, 5, 10];
for(var i = 0; i < A.length; i ++) {
	kiemTraSNT(A[i]);
}

Bài 5: Cho 1 mảng gồm 10 phần tử, kiểm tra xem mảng có đối xứng không ? vd: 1,2,3,3,2,1 -> đối xứng
	b1: tách mảng thành 2 mảng bằng nhau A, B
	b2: so sánh lần lượt phần tử mảng A với mảng B
		cách 1: đảo ngược ptu mang B
		Cách 2: so sánh lần lượt từ trên xuống của mảng A với từ dưới lên của mảng B
	b3: nếu A[i] = B[j] -> mảng đối xứng

let A = [1, 4, 2, 3, 6, 7, 8, 9, 5, 10];
var B = [];
var C = [];
var u = 0, v = 0;
var dem = 0;
for(var i = 0; i < A.length; i ++) {
	if(i < A.length/2) {
		B[u] = A[i];
		u++;
	}
	else {
		C[v] = A[i];
		v++;
	}
}
for(var u = 0; u < B.length; u ++) {
	var v = 4 - u;
	if(B[u] == C[v]) {
		dem++;
	}
}
if(dem == 5) {
	console.log("Day la ham doi xung");
} else {
	console.log("Day la ham khong doi xung");
}

Bài 6: Cho 1 mảng gồm 10 phần tử, thay thế tất cả số âm = 0

let A = [1, -4, 2, -3, 6, -7, 8, -9, 5, -10];
for(var i = 0; i < A.length; i ++) {
	if(A[i] < 0) {
		A[i] = 0;
	}
}
console.log(A);

Bài 7: Cho 1 mảng gồm 10 phần tử, tìm phần tử có số lần xuất hiện nhiều nhất. vd: 1,2,2,3,4 -> là 2 vì có 2 giá trị
b1: sx phan tu tang dan
b2: so sanh lan luot tu A[i]->A[i+1]
	neu bang nhau thi tiep tuc dem
b3: phan tu nao co dem = max thi la phan tu xuat hien nhieu nhat

let A = [1, 4, 1, 3, 6, 3, 8, 3, 5, 10];
var dem = 0;
var max = 0;
var n = 0;
A.sort(function(a, b) {
	return a - b;
});
for(var i = 0; i < A.length; i ++) {
	if(A[i] === A[i+1]) {
		dem++;
	}
	if(max < dem) {
		n = A[i];
		max = dem;
	}
}
console.log("Phan tu xuat hien nhieu nhat la: " + n  + ", xuat hien " + max + "lan");

Bài 8: Cho 2 mảng có ngẫu nhiên số phần tử, trộn 2 mảng
	thành 1 mảng, đảm bảo mảng kết quả sắp xếp giảm dần. 
b1: tron 2 mang thanh 1 mang
b2: sap xep mang giam dam

A = [5, 7, 9, 2, 4];
B = [9, 8, 1, 6, 3];
A = A.concat(B);
A.sort(function(a, b) {
	return b - a;
});
console.log(A);

Bài 9: Cho 1 mảng gồm 10 object, mỗi object student gồm 
	có 2 thuộc tính là id: number & age: number. 
	Lọc các student có age > 10.

let student = [
	{id: 1, age: 5},
	{id: 2, age: 6},
	{id: 3, age: 7},
	{id: 4, age: 8},
	{id: 5, age: 9},
	{id: 6, age: 10},
	{id: 7, age: 11},
	{id: 8, age: 15},
	{id: 9, age: 16},
	{id: 10, age: 18},
];
for(var i = 0; i < student.length; i ++){
	if(student[i]['age'] > 10) {
		console.log(student[i]);
	}
}