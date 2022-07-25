//---- Tim lieu ve ma ascii ---------
// 1. Tính độ dài của chuỗi không dùng hàm có sẵn
let str1 = 'hello every hihi';
// chuyển thành mảng str1.split('');
let i = 0;
while(i < str1.length) {
    i++;
}
console.log('Độ dài chuỗi là: ' + i);

// tìm từng phần tử trong chuỗi != null -> duyệt mảng 
// let str1 = 'hello every hihi';
for(let i = 0; i < 1000 ; i++) {
    if(str1[i] == null) {
        return i;
    }
}

// 
let i = 0;
while(str[i] != null) {
    i ++;
}
return i;

let str = 'hello';
str[0] != null -> true
str[1] != null -> true
str[2] != null -> true
str[3] != null -> true
str[4] != null -> true
str[5] != null -> false

// 2. Nhập chuỗi s từ bàn phím. Kiểm tra tính đối xứng của chuỗi vừa nhập. 
// Vd: hung2hung -> doi xung
let str2 = 'hung2hung';
let str21, str22;
function checkSymmetry(str) {
    if(str.length % 2 == 0) {
        str21 = str.slice(0, str.length/2);
        str22 = str.slice(str.length/2, str.length);
    } else {
        str21 = str.slice(0, str.length/2);
        str22 = str.slice(str.length/2 + 1, str.length);
    }
    // so sánh luôn 2 chuỗi -> sửa
    let arr21 = str21.split('');
    let arr22 = str22.split('');
    for(let i = 0; i < arr21.length; i ++) {
        if(arr21[i] == arr22[i]) {
            return true;
        } else {
            return false;
        }
    }
}
checkSymmetry(str2);

// 3. Nhập vào 1 chuỗi và 1 ký tự, kiểm tra ký tự có trong chuỗi hay không, nếu có đưa ra số lần xuất hiện của ký tự đó trong chuỗi.
// b1: chuyển chuỗi thành 1 mảng các ký tự
// b2: lặp mảng -> so sánh k == arr[i] -> true: dem ++
// dem == 0 : ký tự k ko có trong mảng
// dem > 0 : in ra số lần xuất hiện của ký tự k
let str3 = 'a b c d abc';
function checkString(str, k) {
    let arr = str.split('');
    let dem = 0;
    arr.forEach(function(i) {
        if(i == k) {
            dem ++;
        }
    });
    if(dem == 0) {
        console.log('ký tự ' + k + ' không có trong chuỗi');
    } else {
        console.log('ký tự ' + k + ' xuất hiện ' + dem + ' lần trong chuỗi');
    }
}
checkString(str3, 'a');

// ko dùng arr -> sửa
// let str3 = 'a b c d abc';
function checkString(str, k) {
    let dem = 0;
    for(let i = 0; i < str.length; i++) {
        let check = str.charAt(i);
        if(check == k) {
            dem++;
        }
    }
    if(dem == 0) {
        console.log('ký tự ' + k + ' không có trong chuỗi');
    } else {
        console.log('ký tự ' + k + ' xuất hiện ' + dem + ' lần trong chuỗi');
    }
}
checkString(str3, 'a');

// 4. Chuyển chuỗi s thành chữ viết hoa vd: 'hihi' -> 'HIHI'
let str4 = 'hihi';
console.log(str4.toUpperCase());

// 5. Nhập vào tên đầy đủ -> in ra họ, tên
let str5 = 'Đỗ Thị Minh Thư';
function printName(str) {
    let arr = str.split(' ');
    console.log('Họ: ' + arr[0]);
    console.log('Tên: ' + arr[arr.length - 1]);
}
printName(str5);

// 6. Đếm có bao nhiêu khoảng trắng trong chuỗi
let str6 = 'hihi hi hi ha ha';
console.log(str6.split(' ').length-1);

// 7. Nhập vào một chuỗi, hãy loại bỏ những khoảng trắng thừa trong chuỗi
let str7 = 'hihi hi hi ha ha';
let arr = str7.split(' ');
let strJ = arr.join('');
console.log(strJ);

// let str7 = 'hihi hi hi ha ha';
let newstr = str7.replace(/\s/g, '');
console.log(newstr);

// 8. Đổi tất cả các kí tự có trong chuỗi thành chữ thường
let str8 = 'HA A HIIIII';
console.log(str8.toLowerCase());

// 9. Viết chương trình đảo ngược các kí tự trong chuỗi
let str9 = 'i love me';
function reverseString(str) {
    let arr = str.split('');
    let strToArr = arr.reverse();
    let newStr = strToArr.join('');
    return newStr;
}
console.log(reverseString(str9));

// 10. Cho chuỗi str, nhập vào vị trí vt và số kí tự cần xóa n, hăy xóa n kí tự tính từ vị trí vt trong chuỗi str.
// b1: xóa n ký tự từ vt: dùng hàm substr -> đưa ra chuỗi đã xóa
// b2: đưa ra chuỗi sau khi đã xóa: dùng replace
let str10 = 'Đỗ Thị Minh Thư';
function deleteStr(str, vt, n) {
    let del_str = str.substr(vt, n).trim();
    let rep_str = str.replace(del_str, '');
    console.log('Chuỗi ký tự cần xóa là: ' + del_str);
    console.log('Chuỗi còn lại là: ' + rep_str);
}
deleteStr(str10, 0, 2);

// 11. Viết chương trình tìm kiếm xem ký tự nào xuất nhiện nhiều nhất trong chuỗi
// b1: chuyển string -> array
//     bỏ khoảng trắng, sắp xếp ký tự arr.sort()
// b2: so sánh từng phần tử arr với các ptu còn lại
//     arr[0] == arr[1 -> arr.length-1] -> true: dem ++
//     false: dem = 0; arr.push(obj{k, count})
// b3: tìm arr[i].count max
let str11 = 'Đỗ Thị Minh Thư';
function findMax(str) {
    let arrT1 = str.split(' ');
    let strT2 = arrT1.join('');
    let arr = strT2.split('');
    arr.sort();
    let dem = 1;
    let arrN = [];
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i] == arr[i+1]) {
            dem++;
        } else {
            let obj = {k: arr[i], count: dem};
            arrN.push(obj);
            dem = 1;
        }
    }
    console.log(arrN);
    let countMax = arrN[0].count;
    let kMax = arrN[0].k; 
    for(let i = 1; i < arrN.length; i++) {
        if(arrN[i].count > countMax){
            countMax = arrN[i].count;
            kMax = arrN[i].k;
        }
    }
    return kMax + ' xuất hiện ' + countMax;
}
console.log(findMax(str11));

// kho dùng arr -> sửa
// b1: bỏ tất cả khoảng trắng trong chuỗi: split + join -> nếu đề tài yêu cầu thì thêm bước này
// b2: đếm số lần xuất hiện của từng phần tử (str.split('str[i]').length - 1)
// b3: đưa ký tự và số lần đếm tương ứng vào 1 obj -> arr
// b4: tìm demMax -> đưa ra ký tự có demMax tương ứng 
// let str11 = 'abcabcaa';
function findMax(str) { 
    // let arrT1 = str.split(' ');
    // let strT2 = arrT1.join('');
    let arr = [];
    for(let i = 0; i < str.length; i++) {
        let count = str.split(str[i]).length - 1;
        let obj = {k: str[i], c: count};
        arr.push(obj);
    }
    let arrMax = arr[0];
    arr.forEach(function(i) {
        
    });
}
findMax(str11);

// 12. Cho 1 từ tiếng anh, đếm số nguyên âm và phụ âm có trong từ đó
// 5 nguyên âm u, e, o, a, i và 
// 21 phụ âm b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z.
let str12 = 'meals';
function countEnglish(str) {
    let arr = str.split('');
    let arrNA = ['u', 'e', 'o', 'a', 'i'];
    let arrPA = ['b' , 'c' , 'd' , 'f' , 'g' , 'h', 'j' , 'k' , 'l' , 'm' , 'n' , 'p' , 'q' , 'r' , 's' , 't' , 'v' , 'w' , 'x' , 'y' , 'z'];
    let demNA = 0
    let demPA = 0;
    for(let i = 0; i < arr.length; i ++) {
        for(let j = 0; j < arrNA.length; j ++) {
            if(arr[i] == arrNA[j]) {
                demNA ++;
            }
        }
        for(let n = 0; n < arrPA.length; n ++) {
            if(arr[i] == arrPA[n]) {
                demPA ++;
            }
        }
    }
    return demNA + ', ' + demPA;
}
console.log(countEnglish(str12));

// ko dùng arr -> sửa -> hàm sẵn
// let str12 = 'meals';
function countEnglish(str) {
    let arrNA = ['u', 'e', 'o', 'a', 'i'];
    let arrPA = ['b' , 'c' , 'd' , 'f' , 'g' , 'h', 'j' , 'k' , 'l' , 'm' , 'n' , 'p' , 'q' , 'r' , 's' , 't' , 'v' , 'w' , 'x' , 'y' , 'z'];
    let demNA = 0
    let demPA = 0;
    for(let i = 0; i < str.length; i ++) {
        let check = str.charAt(i);
        for(let m = 0; m < arrNA.length; m ++) {
            if(check == arrNA[m]) {
                demNA ++;
            }
        }
        for(let n = 0; n < arrPA.length; n ++) {
            if(check == arrNA[n]) {
                demPA ++;
            }
        }
    }
    return demNA + ', ' + demPA;
}
console.log(countEnglish(str12));

// 13. Write a program to check whether a given substring is present in the given string
// kiểm tra xem một chuỗi con đã cho có trong chuỗi đã cho hay không
// vd: A: This is a test string 
// -> input: string 
// -> Exist in A
let A = 'This is a test string';
function checkSubstring(str, str_sub) {
    let arr = str.split(' ');
    console.log(arr);
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i] == str_sub) {
            return 'Exist in A';
        }
    }
    return 'No exist in A'
    
}
console.log(checkSubstring(A, 'string'));

// ko dùng arr -> sửa

k = 'test';
b1: k[0] == A[0] -> true 
b2: k[1] == A[1] -> false
b3: k[0] == A[1] -> false
b4: k[0] == A[2] -> false
b5: k[0] == A[3] -> false
b6: k[0] == A[4] -> false
b7: k[0] == A[5] -> false
b8: k[0] == A[6] -> false
b9: k[0] == A[7] -> false
b10: k[0] == A[8] -> false
b11: k[0] == A[9] -> false
b12: k[0] == A[10] -> true
b13: k[1] == A[11] -> true
b14: K[2] == A[12] -> true
b15: k[3] == A[13] -> true   khi số lần true = k.length-1 
k[i] == A[13] -> dừng khi k[i] == null / i = k.length
b16: return true;

// let A = 'This is a test string';
function checkSubstring(str, k) {
    let j = 0;
    for(let i = 0; i < str.length; i ++) {
        if(k[j] == str[i]) {
            j++;
            if(k[j] == null) {
                return true;
            }
        } else if(j != 0){
            i--;
            j = 0;
        } else {
            j = 0;
        }
    }
    return false;
}
console.log(checkSubstring(A, 'stri'));

// 14. Write a program to find the largest and smallest word in a string
// tìm từ lớn nhất và nhỏ nhất trong một chuỗi
// Vd: It is a string with smallest and largest word -> largest: smallest & smallest: a
// b1: chuyển str -> arrL = ['It', 'is', 'a', 'string', 'with', 'smallest', 'and', 'largest', 'word'];
// b2: chuyển arr -> obj = [k: 'It', length: arrL[0].length];
// b3: tìm arrN[i].length max/ min
// b4: return arrN[i].k
let str14 = 'It is a string with smallest and largest word';
function findLargest(str) {
    let arr = str.split(' ');
    let arrN = [];
    arr.forEach(function(i) {
        let obj = {k: i, leng: i.length};
        arrN.push(obj);
    });

    let largest = arrN[0].leng;
    for(let i = 1; i < arrN.length; i ++) {
        if(arrN[i].leng > largest) {
            largest = arrN[i].leng;
        }
    }

    let smallest = arrN[0].leng;
    for(let i = 1; i < arrN.length; i ++) {
        if(arrN[i].leng < smallest) {
            smallest = arrN[i].leng;
        }
    }

    for(let i = 1; i < arrN.length; i ++) {
        if(arrN[i].leng == largest || arrN[i].leng == smallest) {
            console.log(arrN[i].k);
        }
    }
}
findLargest(str14);

// ko dùng arr thì gặp khoảng cách thì đếm lại

// sửa lại các bài tập