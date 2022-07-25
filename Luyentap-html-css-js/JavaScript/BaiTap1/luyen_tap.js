[1, 0, 10]
B1: so sánh 2 số đầu tiên 1, 0 
    nếu 1 > 0 -> so sánh 1 với 10 -> nếu 1 > 10 thì 1 là số lớn nhất
	                              -> nếu 10 > 1 thì 10 là SLN
	nếu 0 > 1 -> so sánh 0 với 10 -> nếu 0 > 10 thì 0 là số LN
	                              -> nếu 10 > 0 thì 10 là số LN
								  
if (1 > 0) {
	if (1 > 10) {
		console.log("1 la so lon nhat");
	}
	else {
		console.log("10 la so lon nhat");
	}
}
else {
	if (0 > 10) {
		console.log("0 la so lon nhat");
	}
	else {
		console.log("10 la so lon nhat");
	}
}

// sap xep tang dan
b1: so sanh 1 và 0: nếu 1>0 -> mảng [0, 1] -> so sánh 1 với 10: nếu 1 > 10 -> mảng [0, 10, 1]    // thiếu TH: nhỡ 0>10 -> [10, 0, 1]
                                                                nếu 10 > 1 -> mảng [0, 1, 10]
                    nếu 0>1 -> mảng [1, 0] -> so sánh 0 với 10: nếu 0 > 10 -> mảng [1, 10, 0]
					                                            nếu 10 > 0 -> mảng [1, 0, 10]

if(1>0) {
	if(1>10) {
		console.log('[0,10, 1]');
	}
	else {
		console.log('[0,1, 10]');
	}
}
else {
	if(0>10) {
		console.log('[1, 10, 0]');
	}
	else {
		console.log('[1, 0, 10]');
	}
}

// CM : 4 là số chính phương
 4 = 2 * 2
 4 / 1 = 4 so sanh 1 và 4: nếu 1 = 4 -> Day la so CP -> Dung
                               1 khác 4 -> 4 / 2 = 2 -> so sánh 2 và 2: nếu 2 = 2 -> đây là số chính phương -> dừng
							                                            nếu 2 khác 2 -> 4/3 = 1 -> so sánh 3 và 1: nếu 3 = 1 thì đây là số chính phương -> dừng
							                                                                                       nếu 3 khác 1 -> 4 / 4 = 1 -> so sánh 4 và 1: nếu 4 = 1 -> đây là số CP -> dừng
																												                                                    4 khác 1 -> Đây kp là số CP
																																						
lần lặp cuối cùng là i = 4 và n = 1 thì đây kp số chính phương
for(var i = 1; i <= 4; i ++) {
	var n = 4/i;
	if(n == i) {
		console.log("Day la so chinh phuong");
		break;
	}
	if(i==4 && n==1) {
		console.log("Day kp la so CP");
	}
}	

// tính tổng từ 1->10
S = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
b1: đặt tổng từ 1-10 là: S
b2: S = 0
b3: S = 0 + 1
S = S + i;

var S = 0;
for(var i = 1; i <= 10; i ++) {
	S = S + i;
}

console.log(S);

//tinh tong 1^2 + ... 10^2
S = 0;
S = 0 + 1^2
S = 0 + 1^2 + 2^2
S = S + i*i;

var S = 0;
for(var i = 1; i <= 10; i ++) {
	S = S + i*i;
}
console.log(S);
//So chẵn
số chẵn: 4/2 = 1 dư 0 -> a = 2 * 1 + 0
3/ 2 = 1 du 1 -> a = 2 * 1 + 1 -> 3 khong la so chan
		 4 / 2 = 2 dư 0      = 2 * 2 + 0
		 6                   = 2 * 3 + 0
		 8
		 7 / 2 = 3 du 1 -> 
		 

//Tinh tong cac so chan tu 1->10
B2: S = 0
B3: S = 0 + 2
    S = 0 + 2 + 4
	S = 0 + 2 + 4 + 6
	S = S + (2*i)
	
var S = 0;
for (var i = 1; i <= 5; i ++) {
	S = S + 2*i;
}
console.log(S);

1, 2 ,3, 4, 5, 6, 7,8,9,10
B1: chọn ra các số chẵn: 2, 4, 6, 8, 
    xét 1: 1 ko chia hết cho 2 -> 1 chia 2 dư khác 0 1%2 != 0
	xét 2: 2 chia hết cho 2 -> 2 chia 2 dư 0 -> lấy  2%2 == 0  -> i %2 == 0
	xét 3: ko chia hết cho 2                         3%2 != 0
	xét 4: có chia hết cho 2 -> lấy                  4%2 == 0
	xét 5: ko chia hết cho 2                          
	xét 6: có chia hết cho 2 -> lấy
	xét 7: ko chia hết cho 2
	xét 8: có chia hết cho 2 -> lấy
	xét 9: ko chia hết cho 2
	xét 10: có chia hết cho 2 -> lấy
B2: Tính tổng các số ở bước 1

var S = 0;
for(var i = 1; i <= 10; i ++){ // Dong 116
	if(i%2==0) { //B1
		S = S + i;//B2
	}
}
console.log(S);

// Tinh tong cac so le
B1: chọn ra số lẻ: 1, 3, ..., 9
	i%2!=0
B2: Tính tổng

var S = 0;
for(var i = 1; i <= 10; i ++){
	if(i%2!=0){
		S = S + i;
	}
}
console.log(S);

- Viết ra các bước tư duy chi tiết
- Nếu như bước nào có các bước lặp đi lặp lại -> sử dụng vòng lặp for -> công thức tổng quát
- Chuyển sang ngôn ngữ máy theo lần lượt các bước đã làm