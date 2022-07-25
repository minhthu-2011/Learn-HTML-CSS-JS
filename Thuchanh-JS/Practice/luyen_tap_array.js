// 1.	Tính tb cộng các số lẻ trong mảng
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function tinhTbCong(arr) {
    let S = 0;
    let dem = 0;
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i] % 2 == 1) {
            S = S + arr[i];
            dem ++;
        }
    }
    console.log(S/dem);
}
tinhTbCong(arr1);

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function tinhTbCong(arr) {
    let S = 0;
    let dem = 0;
    let i = 0;
    while (i < arr.length) {
        if(arr[i] % 2 == 1) {
            S = S + arr[i];
            dem++;
        }
        i++;
    }
    console.log(S/dem);
}
tinhTbCong(arr1);

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function tinhTbCong(arr) {
    let S = 0;
    let dem = 0;
    arr.forEach(function(i) {
        if(i % 2 == 1) {
            S = S + i;
            dem++;
        }
    });
    return S/dem;
}
console.log(tinhTbCong(arr1));

// 2.	Tìm số lớn nhất trong mảng
//b1: gán max = arr[0]; //max = 1
//b2: so sánh max < arr[1] // true/ false
// true: max = arr[1]
// false: max = arr[0]
let arr2 = [1, 2, 11, 4, 5, 6, 12, 8, 9, 10];
function findNumberMax(arr) {
    let maxNumb = arr[0];
    for(let i = 1; i < arr.length; i ++) {
        if(maxNumb < arr[i]) {
            maxNumb = arr[i];
        }
    }
    return maxNumb;
}
console.log(findNumberMax(arr2));

// let arr2 = [1, 2, 11, 4, 5, 6, 12, 8, 9, 10];
function findNumberMax(arr) {
    let maxNumb = arr[0];
    while (i < arr.length) {
        if(maxNumb < arr[i]) {
            maxNumb = arr[i];
        }
        i ++;
    }
    return maxNumb;
}
console.log(findNumberMax(arr2));

// let arr2 = [1, 2, 11, 4, 5, 6, 12, 8, 9, 10];
function findNumberMax(arr) {
    let maxNumb = arr[0];
    arr.forEach(function(i) {
        if(maxNumb < i) {
            maxNumb = i;
        }
    });
    return maxNumb;
}
console.log(findNumberMax(arr2));

// 3.	Tìm số nhỏ nhất trong mảng
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function findMinNumber(a) {
    let min = a[0];
    for(let i = 1; i < a.length; i ++) {
        if(min > a[i]) {
            min = a[i];
        }
    }
    return min;
}
console.log(findMinNumber(arr3));
    
// let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function findMinNumber(a) {
    let min = a[0];
    let i = 1; 
    while(i < a.length) {
        if(min > a[i]) {
            min = a[i];
        }
        i ++;
    }
    return min;
}
console.log(findMinNumber(arr3));

// let arr3 = [10, 2, 3, 4, 5, 6, 1, 8, 9, 10, 11];
function findMinNumber(a) {
    let min = a[0];
    a.forEach(function(i) {
        if(min > i) {
            min = i;
        }
    });
    return min;
}
console.log(findMinNumber(arr3));

// 4.	Đếm có bn số chính phương trong mảng
function checkSquareNumber(n) {
    for(var i = 1; i < n; i++) {
        if(Math.pow(i, 2) == n) {
            return true;
        }
    }
    return false;
}

let A = [1, 2, 4, 5, 8, 9, 16];
function findSquareNumber(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        let numb = checkSquareNumber(arr[i]);
        if(numb == true) {
            count ++;
        }
    }
    return count;
}
console.log(findSquareNumber(A));

//Cách 2:
let A1 = [1, 2, 4, 5, 8, 9, 16];
function findSquare(a) {
    let count = 0;
    for(let i = 0; i < a.length; i++) {
        for(let j = 1; j < a[i]; j++) {
            if(Math.pow(j, 2) == a[i]) {
                count++;
            }
        }
    }
    console.log('số các số chính phương của mảng là: ' + count);
}
findSquare(A1);

// let A1 = [1, 2, 4, 5, 8, 9, 16];
function findSquare(a) {
    let count = 0;
    let i = 0; 
    while(i < a.length) {
        let j = 1;
        while(j < a[i]) {
            if(Math.pow(j, 2) == a[i]) {
                count++;
            }
            j++;
        }
        i++;
    }
    console.log('số các số chính phương của mảng là: ' + count);
}
findSquare(A1);

// let A1 = [1, 2, 4, 5, 8, 9, 16];
function findSquare(a) {
    let count = 0;
    a.forEach(function(i) {
        for(let j = 1; j < i; j++) {
            if(Math.pow(j, 2) == i) {
                count++;
            }
        }
    });
    return count;
}
console.log('số các số chính phương của mảng là: ' + findSquare(A1));

// 5.	Đếm có bn số nguyên tố trong mảng
function checkPrimeNumber(n) {
    var dem = 0;
    for(var i = 1; i <= n; i ++) {
        if(n % i == 0) {
            dem++;
        }
    }
    if(dem == 2) {
        return true;
    } else {
        return false;
    }
}
let B = [1, 7, 2, 4, 5, 8, 9, 16];
function findPrime(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        let numb = checkPrimeNumber(arr[i]);
        if(numb == true) {
            count++;
        }
    }
    console.log(count);
}
findPrime(B);

// let B = [1, 7, 2, 4, 5, 8, 9, 16];
function checkPrimeNumber(n) {
    let dem = 0;
    let i = 1;
    while( i <= n) {
        if(n % i == 0) {
            dem++;
        }
        i ++;
    }
    if(dem == 2) {
        return true;
    } else {
        return false;
    }
}
function findPrime(arr) {
    let count = 0;
    let i = 0; 
    while(i < arr.length) {
        let numb = checkPrimeNumber(arr[i]);
        if(numb == true) {
            count++;
        }
        i++;
    }
    console.log(count);
}
findPrime(B);

// 6.	Tính tb cộng các số ở vị trí chẵn [1, 5, 3, 9, 5, 6, 7, 8]
let arr6 = [1, 5, 3, 9, 5, 6, 7, 8];
function tinhTbCongVtriChan(a) {
    let S = 0;
    let count = 0;
    for(let i = 1; i < a.length; i++) {
        if(i%2 == 0) {
            S = S + a[i];
            count++;
        }
    }
    return S/count;
}
console.log(tinhTbCongVtriChan(arr6));

// let arr6 = [1, 5, 3, 9, 5, 6, 7, 8];
function tinhTbCongVtriChan(a) {
    let S = 0;
    let count = 0;
    let i = 1;
    while(i < a.length) {
        if(i%2 == 0) {
            S = S + a[i];
            count++;
        }
        i++;
    }
    return S/count;
}
console.log(tinhTbCongVtriChan(arr6));

// 7.	Cho 1 mảng có 10ptu tìm tất cả các ptu lẻ trong mảng
let arr7 = [1, 5, 3, 9, 5, 6, 7, 8];
function timPhanTuLe(a) {
    for(let i = 0; i < a.length; i++) {
        if(a[i] % 2 == 1) {
            console.log(a[i]);
        }
    }
}
timPhanTuLe(arr7);

// let arr7 = [1, 5, 3, 9, 5, 6, 7, 8];
function timPhanTuLe(a) {
    let i = 0;
    while(i < a.length) {
        if(a[i] % 2 == 1) {
            console.log(a[i]);
        }
        i++;
    }
}
timPhanTuLe(arr7);

// let arr7 = [1, 5, 3, 9, 6, 6, 7, 8];
function timPhanTuLe(a) {
    a.sort();
    a.forEach(function(i) {
        if(i % 2 == 1) {
            console.log(i);
        }
    });
}
timPhanTuLe(arr7);

// 8.	Đếm số phần tử chẵn trong mảng
let arr8 = [1, 5, 3, 9, 5, 6, 7, 8];
function demPhanTuChan(a) {
    let count = 0;
    for(let i = 0; i < a.length; i++) {
        if(a[i] % 2 == 0) {
            count ++;
        }
    }
    return count
}
console.log(demPhanTuChan(arr8));

// let arr8 = [1, 5, 3, 9, 5, 6, 7, 8];
function demPhanTuChan(a) {
    let count = 0;
    let i = 0;
    while(i < a.length) {
        if(a[i] % 2 == 0) {
            count ++;
        }
        i++;
    }
    return count;
}
console.log(demPhanTuChan(arr8));

// let arr8 = [1, 5, 3, 9, 5, 6, 7, 8];
function demPhanTuChan(a) {
    let count = 0;
    a.forEach(function(i) {
        if(i % 2 == 0) {
            count ++;
        }
    });
    return count;
}
console.log(demPhanTuChan(arr8));

// ko dùng for / while/ do while : 9->15
// 9.	Tìm phần tử xuất hiện nhiều nhất trong mảng
//b1: sắp xếp mảng -> mục đích: để các ptu bằng nhau ở cạnh nhau [1, 5, 5, 5, 6, 8, 9, 9]
//1. cout = 1
//2. 1==5 -> cout = 1[1]
//3. 5==5 -> cout = 2[5]
//4. 5==5 -> cout = 3[5]
//5. 5==6 -> cout = 3[5] -> max = 3 -> số cần tìm là 5 -> đưa vào array
//6. 6==8 -> cout = 1[6]
//7. 8==9 -> cout = 1[8]
//8. 9==9 -> cout = 2[9]
// -> mục đích tìm maxCout
// obj = {
//     cout: 3,
//     numb: 5
// }
// đưa {cout,number} vào 1 mảng
// max = arr[0]
// kết quả max = 3
//b2: xét lần lượt từng ptu trong mảng
//so sánh ptu 1 == ptu 2: true/ false
// true: cout ++;
// false: x
let arr9 = [1, 5, 9, 5, 6, 5, 9, 9, 8];
function demPhanTu(a) {
    a.sort();
    let arr = [];
    let dem = 1;
    for(let i = 0; i < a.length; i++) {
        if(a[i] == a[i+1]) {
            dem ++;
        } else {
            let obj = {num: a[i], count: dem};
            arr.push(obj);
            dem = 1;
        }
    }
    // Tìm max
    // let maxCount = arr[0].count;
    // let maxNum = arr[0].num;
    // let arrMax = [];
    let objMax = {
        maxNum: arr[0].num,
        maxCount: arr[0].count
    }
    for(let i = 1; i < arr.length; i ++) {
        if(objMax.maxCount < arr[i].count) {
            objMax.maxCount = arr[i].count;
            objMax.maxNum = arr[i].num;
        }
    }
    console.log('Phần tử có số lần xuất hiện nhiều nhất là: ' + objMax.maxNum
    + ' có số lần xuất hiện là ' + objMax.maxCount);
}
demPhanTu(arr9);

// 10.	Cho 1 mảng và 1 số, in tất cả các phần tử có giá trị nhỏ hơn số đó
let arr10 = [1, 2, 3, 4, 5, 6, 7, 8];
function soSanhMang(arr, n) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < n) {
            console.log(arr[i]);
        }
    }
}
soSanhMang(arr10, 6);

//Dùng forEach()
// let arr10 = [1, 2, 3, 4, 5, 6, 7, 8];
function soSanhMang(arr, n) {
    arr.forEach(function(i) {
        if(i < n) {
            console.log(i);
        }
    });
}
soSanhMang(arr10, 6);

// 11.	Một mảng đối xứng tức là số phần tử chẵn = số tử lẻ , kiểm tra xem 1 mảng bất kỳ có là mảng đx
let arr11 = [1, 2, 3, 4, 5, 6, 7, 8];
function checkArray(a) {
    let demChan = 0;
    let demLe = 0;
    for(let i = 0; i < a.length; i++) {
        if(a[i] % 2 == 0) {
            demChan ++;
        } else {
            demLe ++;
        }
    }
    if(demChan == demLe) {
        console.log('Hàm đã cho là hàm đối xứng');
    } else {
        console.log('Hàm đã cho không là hàm đối xứng');
    }
}
checkArray(arr11);

//let arr11 = [1, 2, 3, 4, 5, 6, 7, 8];
function checkArray(a) {
    let demChan = 0;
    let demLe = 0;
    a.forEach(function(i) {
        if(i % 2 == 0) {
            demChan ++;
        } else {
            demLe ++;
        }
    });
    if(demChan == demLe) {
        console.log('Hàm đã cho là hàm đối xứng'); //true
    } else {
        console.log('Hàm đã cho không là hàm đối xứng'); // false
    }
}
checkArray(arr11);

// 12.	In các chỉ số của các số chẵn trong mảng (vị trí)
let arr12 = [1, 2, 3, 4, 5, 6, 7, 8];
function inViTriSoChan(a) {
    for(let i = 0; i < a.length; i++) {
        if(a[i] % 2 == 0) {
            console.log(a[i] + ' ở vị trí ' + i);
        }
    }
}
inViTriSoChan(arr12);

// let arr12 = [1, 2, 3, 4, 5, 6, 7, 8];
function inViTriSoChan(arr) {
    arr.filter(function(a, i) {
        if(a % 2 == 0) {
            console.log(a + ' vị trí ' + i);
        }
    });
}
inViTriSoChan(arr12);

arr12.filter(function(a, i) {
    return a > 5;
})

// 13.	Cho một mảng bất kỳ  và 1 số nguyên m, hãy viết hàm chèn m vào giữa mảng
let arr13 = [1, 2, 3, 4, 5, 6, 7];
function chenSoGiuaMang(arr, n) {
    if(arr.length % 2 == 0) {
        arr.splice(arr.length/2, 0, n);
    } else {
        arr.splice(arr.length/2, 1, n);
    }
    console.log(arr);
}
chenSoGiuaMang(arr13, 10);

// 14.	Một mảng được xem là đặc biệt khi có từ 2 phần tử liên tiếp xuất hiện trong mảng (VD: [1, 5, 3, 7, 7, 9])
let arr14 = [1, 2, 3, 4, 5, 6, 6, 7];
function checkArray(arr) {
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i] == arr[i + 1]) {
            return true;
        } 
    }
    return false;
}
checkArray(arr14);

arr[i]: i = 0 -> 1
        i = 1 -> 2
        i = 2 -> 3

// let arr14 = [1, 2, 3, 4, 5, 6, 6, 7];
a = 1 -> i = 0
a = 2 -> i = 1
a = 3 -> i = 2

i = 0 -> a = 1

let arr14 = [1, 2, 3, 4, 5, 6, 6, 7];
function checkArray(arr) {
    arr.forEach(function(a, i) {
        if(a == arr[i + 1]) {
            return true;
        }
    });
    return false;
}
checkArray(arr14);

// 15.	Tính tích các số chia hết cho 2 trong mảng
let arr15 = [1, 2, 3, 4, 5, 6, 6, 7];
function tinhTich(arr) {
    let S = 1;
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i] % 2 == 0) {
            S = S * arr[i];
        }
    }
    console.log('Tích của các số chia hết cho 2 trong mảng = ' + S);
}
tinhTich(arr15);

// let arr15 = [1, 2, 3, 4, 5, 6, 6, 7];
function tinhTich(arr) {
    let S = 1;
    arr.forEach(function(i) {
        if(i % 2 == 0) {
            S = S * i;
        }
    });
    return S;
}
console.log('Tích của các số chia hết cho 2 trong mảng = ' + tinhTich(arr15));

// 16.	Cho 1 mảng bất kỳ, viết hàm chuyển đổi sao cho mỗi ptu của mảng kết quả sẽ gấp đổi mảng gốc (VD: [1, 2, 3, 4] -> [2, 4, 6, 8])
let arr16 = [1, 2, 3, 4, 5, 6, 6, 7];
function nhanDoiMang(arr) {
    let arrX2 = [];
    for(let i = 0; i < arr.length; i ++) {
        arrX2.push(arr[i] * 2);
    }
    return arrX2;
}
console.log(nhanDoiMang(arr16));

//let arr16 = [1, 2, 3, 4, 5, 6, 6, 7];
function nhanDoiMang(arr) {
    let arrX2 = [];
    arr.forEach(function(i) {
        arrX2.push(i * 2);
    });
    return arrX2;
}
console.log(nhanDoiMang(arr16));

//let arr16 = [1, 2, 3, 4, 5, 6, 6, 7];
let new_arrNumb = arr16.map(function(item){
    return item * 2; // nhân đôi giá trị
});
console.log(new_arrNumb);

//trả về mảng ko có các ptu trùng nhau
let arr = ['a', 'b', 'c', 'a', 'b', 'c', 'd'];
console.log([...(new Set(array))]);

//De quy: 
//1. Xác định được điểm dừng
//2. logic handel (xử lý logic) => tạo ra điểm dừng
// khi nào ko gọi lại hàm deQuy nữa thì nó sẽ dừng
//VD1: tạo 1 hàm đếm ngược
function countDown(num) {
    if(num > 0) {
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}
countDown(5);

//Vi du array
let courses = [
    {
        id: 1,
        name: 'CSS',
        coin: 0
    },
    {
        id: 2,
        name: 'HTML',
        coin: 0
    },
    {
        id: 3,
        name: 'JS',
        coin: 400
    }
]

//map() : khi muốn chỉnh sửa, thay đổi element của 1 ptu trong mảng
//ts1: lặp qua từng phần tử
function coursesHandler(course, index) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index
    }
}

let newCourses =  courses.map(coursesHandler);
console.log(newCourses);

//chỉ lấy ra tên khóa học đưa vào 1 mảng mới
function coursesHandler(course) {
    return course.name;
}
let newCourses2 =  courses.map(coursesHandler);
console.log(newCourses2);

//reduce() : 