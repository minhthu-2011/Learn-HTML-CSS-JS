1. viết chương trình in các phần tử của dãy Fibonacci từ 0 đến n.
// F(n) = 1, 		khi n=1
		  1,		khi n=2
		  F(n-1) + F(n-2) khi n>2
// 0, 1, 1, 2, 3, 5, 8, 13, ... -> F1 = 1
								   F2 = F0 + F1 = 1
								   F3 = F1 + F2 = 2
								   F4 = F2 + F3 = 3
								   Fi = F(i-1) + F(i-2) 
								   
b1: F = F(i-1) + F(i-2)
	i=1; i<=n; i++
b2: Nếu i==1 và i==2 -> F = 1;
b3: Nếu i>2 -> F = F(i-1) + F(i-2)

function dayFibonacci(n) {
	for (var i = 1; i <= n; i++) {
		if(i==1) {
			console.log(1);
		}
		if(i==2) {
			console.log(1);
		}
		if(i>2) {
			console.log(dayFibonacci(n-1) + dayFibonacci(n-2));
		}
	}
	
}
dayFibonacci(4); 

2. Viết chương trình tính giai thừa của n bất kỳ n!: 
0! = 1
1! = 1
2! = 1*2 = 1!*2
3! = 1*2*3 = 2!*3
4! = 1*2*3*4 = 3!*4
n! = 1*2*3*...*n = (n-1)!*n
(n+1)! = n!*(n+1)

function giaiThua(n) {
	var N = 1;
	for(var i = 1; i <= n; i ++) {
		N *= i;
	}
	console.log("n! = " +N);
}
giaiThua(3);


3. Viết chương trình tính kết quả biểu thức S= 1+1/2^3+1/3^3+...+1/n^3
S1 = 1
S2 = 1 + 1/2^3
S3 = 1 + 1/2^3 + 1/3^3
Sn = S + 1/i^3;    Math.pow(1/i, 3)   || 1/Math.pow(i, 3)

b1: S = S + 1/i^3;
b2: gán S = 1;
B3: cho S chạy từ i=1 -> i=n , i++

function tinhTong(n) {
	var S = 1;
	for(var i = 1; i <= n; i ++) {
		S = S + Math.pow(1/3, 3); 
	}
	console.log(S);
}
tinhTong(3);

4. Viết chương trình với x, y là số tự nhiên. Hãy tính x^y
b1: x, y là số tự nhiên
	x >= 0
	y >= 0
b2: Tính x^y 
	Math.pow(x, y)
	
function tinhGT(x, y) {
	if(x >= 0 && y >= 0) {
		var s = Math.pow(x, y);
		console.log(s);
	}
	else {
		console.log("x và y phải là một số tự nhiên");
	}
}
tinhGT(2, 2);

5. Cho hai số nguyên dương a và b. 
   Tìm tổng của tất cả các số lẻ và chẵn nằm giữa hai số đó.
b1: a, b là hai số dương
	a >= 0 && b >= 0
b2: Tính tổng số chẵn:
	i%2==0 -> S = S + i;
b3: Tính tổng số lẻ:
	i%2!=0 -> S = S + i;

function tinhGT(a, b) {
	if(a >= 0 && b >= 0) {
		var S = 0;
		var s = 0;
		for(var i = a; i <= b; i ++) {
			if(i%2==0) { 
				S = S + i;
			}
			if(i%2!=0){
				s = s + i;
			}
		}
		console.log(S);
		console.log(s);
	}
	else {
		consolo.log("a và b phải là hai số nguyên dương");
	}
}
tinhGT(1, 10);