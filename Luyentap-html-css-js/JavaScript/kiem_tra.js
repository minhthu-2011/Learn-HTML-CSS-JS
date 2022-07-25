Bài 1: Tính tích của 10 số tự nhiên đầu tiên ( bắt đầu từ 1 )
s1 = 1
s2 = 1*2
s3 = 1*2*3
sn = s(n-1) * n

function tinhTich(n) {
	var s = 1;
	var i = 1;
	if (n > 0) {
		while (i <= n) {
			s = s * i;
			i ++;
		}
	}
	else {
		console.log("Nhap n > 0 de tiep tuc chay chuong trinh");
	}
	console.log(s);
}
tinhTich(10);

Bài 2: Tính tổng: A = 1 + 1/2 + 1/3 + ... + 1/n
A1 = 1
A2 = 1 + 1/2
A3 = 1 + 1/2 + 1/3
An = A(n-1) + 1/n

function tinhTong(n) {
	var A = 0;
	var i = 1;
	while (i <= n ) {
		A = A + 1/i;
		i++;
	}
	console.log(A);
}
tinhTong(2);

bài 3: Cho 1 số n ngẫu nhiên. Tìm số fibonaci lớn nhất không vượt quá n 
F = 1 				,n = 1     -> 1, 1, 2, 3, 5, 8, 13, ...
    1				,n = 2
	F(n-1) + F(n-2) ,n > 2

b1: Tìm tập F gồm các số Fibonacci <= n
	F(n) = F(n - 1) + F(n - 2)
	Nếu n==1 && n==2: -> F = 1
	Nếu n>2           -> F = F(n-1) + F(n-2)
b2: Lấy số Fibonacci lớn nhất trong tập F -> F
	
function F(n) {
	var F = 0;
	var f1 = 1;
	var f2 = 1;
	if(n==1) {
		console.log(1);
	}
	if(n==2) {
		console.log(1);
	}
	while ((f1+f2)<=n) {
		F = f1 + f2;
		f2 = f1;
		f1 = F;
	}
	console.log(F);
}
F(4)

Bài 4: Cho 1 số bất kỳ gồm 4 chữ số, tính tổng số các chữ số vd: 1234 -> 1 + 2 + 3 + 4 = 10.
a = 1234
a%10 + (a%10)%10 + ((a%10)%10)%10
123.4   12.34         1.234        -> 1  
234%10 = 23.4%10 = 2.34            -> 2
34%10 = 3.4 					   -> 3
4 								   -> 4
Lấy phần nguyên: Math.floor()

function tinhTong(a) {
	var sum = 0;
	while(a) {
		sum += Math.floor(a%10);
		
	}
	console.log(sum);
}
tinhTong(1244);