//Kiem tra 1 so nguyen to
var n = 0;
for(var i = 1; i <= 11; i ++) {
	var a = 11%i;
	if(a == 0) {
		n = n + 1;
	}
}
if(n == 2) {
	console.log("Day la so nguyen to");
}

//tong quat
function snt(N) {
	var n = 0;
	for(var i = 1; i <= N; i ++) {
		var a = N%i;
		if(a == 0) {
			n = n + 1;
		}
	}
	if(n == 2) {
		console.log(N + " la so nguyen to");
	}
	else {
		console.log(N + " khong la so nguyen to");
	}
}
snt(11);
snt(12);

//Số nhập vào từ bàn phím
function snt(N) {
	
	var n = 0;
	for(var i = 1; i <= N; i ++) {
		var a = N%i;
		if(a == 0) {
			n = n + 1;
		}
	}
	if(n == 2) {
		console.log(N + " la so nguyen to");
	}
	else {
		console.log(N + " khong la so nguyen to");
	}
}





