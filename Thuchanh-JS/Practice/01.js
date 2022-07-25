// 13 - 06 - 2022
let c = undefined;
let d = null;

var a = 'thu';
var o = a == d;
var b = 2;
var obj = { // Loại đối tượng có nhiều thuộc tính
    name: 'thu',
    age: 17
}

var boolean = true ; //false dùng trong biểu thức so sánh (if)

var fun = function(a){ // mô tả 1 hành động 
    console.log(a);
};

var arr = ['a', 'b', 'c']; // mô tả 1 danh sách, 1 tập hợp các phần tử, nhiều đối tượng

var a = 10;
a++;
++a;

let a = 'minh';
let b = a + ' ' + 'Thu';
console.log(b);

let a = 4 < 5;

if(4 > 5) {
    console.log(false);
}else {
    console.log(true);
}

let a = 10;
//neu a > 10 thì in xin chao, a< 10 && a>5 in chao thu, ngược lại thì in chao Duong
if(a > 10) {
    console.log('Xin Chào');
} else if(a < 10 && a > 5) {
    console.log('Chào Thư');
} else {
    console.log('Chào Dương');
}


let a = 10;
if(a % 2 == 0 && a % 5 == 0) {
    
}

let h = (a % 2 == 0) && (a % 5 == 0);

let m = !h;

let k = (a % 2 == 0) || (a % 5 == 0);

// 14 - 06 - 2022
// 1. Declaration function
function tinhTBC(a, b, c) {
    return (a + b + c)/3;
}
let s = tinhTBC(2, 4, 6);
console.log(s);

// 2. Expresstion function
let tinhTBC = function() {}

// 3. arrow function
let tinhTBC = (a, b, c) => (a+b+c)/3;


const mySring2 = '';
console.log(mySring2.charAt());

let a = 3;
console.log(a);


// đầu vào là 1 số, nếu số > 5 xin chào, < 5 && > 3 chào thư, else chào Dương
function kiemTra(x) {
    if(x > 5) {
        return 'Xin Chào';
    } else if(x > 5 && x < 3) {
        return 'Chào Thư';
    } else {
        return 'Chào Dương';
    }
}
let S = kiemTra(3);
console.log(S);

//đầu vào là a, b. a + b > 5 xin chào, < 5 && > 3 chào thư, else chào Dương
function checkNumber(a, b) {
    let sum = a + b;
    if(sum > 5) {
        return 'Xin Chào';
    } else if(sum > 5 && sum < 3) {
        return 'Chào Thư';
    } else {
        return 'Chào Dương';
    }
} 
let check = checkNumber(1, 5);
console.log(check);

//Giải phương trình bậc 2 a*x^2 + b*x + c = 0
function tinhPTB2(a, b, c) {
    let d = (b * b) - (4 * a * c);
    if(a == 0) {
        if(b == 0) {
            console.log('Đây kp phương trình bậc 2');
        } else {
            console.log('x = ' +  -c / b);
        }
    }else {
        if(d >= 0) {
            console.log('x1 = ' + ((-b + Math.sqrt(d)) / 2*a));
            console.log('x2 = ' + ((-b - Math.sqrt(d)) / 2*a));
        } else {
            console.log('Phương trình vô nghiệm');
        }
    }
}
tinhPTB2(0, 2, 1);

// cách hoạt động
- tên hàm luôn bắt đầu bằng 1 động từ 
- tham số trong hàm: có thể có 1 hoặc nhiều tham số, 
                     tham số ko có kiểu cố định
                     có thể truyền vào bất kỳ kiểu dữ liệu nào
- thân hàm: bao bởi cặp dấu {} , hàm chỉ chạy trong cặp dấu đó
            logic code sẽ chạy từ trên xuống dưới đến khi nào gặp dấu ngoặc nhọn cuối cùng, 
            hoặc chạy đến khi gặp return nó sẽ dừng hàm -> khi đó mọi biểu thức bên dưới đều sẽ ko thực thi nữa.
- hàm có 2 quá trình: khai báo hàm(nêu nội dung hàm) , gọi hàm
- lưu ý khi thao tác với hàm: 1 là ko có return
                              2 là tất cả đều phải có return
// return : trả về 1 kết quả , đồng thời cũng có nghĩa là kết thúc hàm đó
- khi return có thể return bất kỳ kiểu dữ liệu nào (8 kiểu)

// chuyển đổi giữa các loại hàm
//bai tap
 

let str = 'Học JavaScript';
let arr = str.split('');
let arrReve = arr.reverse();
console.log(arrReve.join(""));

let str = 'Học JavaScript';
let arr = str.split(' ');
let arrReve = arr.reverse();
console.log(arrReve.join(" "));

let numb = 19.8;
//console.log(numb.toFixed());
let numbe = new Number(19);
console.log(typeof numb);



let arr = [
    'JavaScript',
    'PHP',
    'CSS'
    null
];
console.log(arr);