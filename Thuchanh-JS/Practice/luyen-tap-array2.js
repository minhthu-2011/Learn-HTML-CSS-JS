// 1. Cho một mảng số nguyên a0, a1, a2, …, an-1. 
//Liệt kê các phần tử xuất hiện trong mảng đúng 1 lần.
// b1: sắp xếp mảng tăng dần
// b2: lặp lần lượt từng phần tử trong mảng
// so sánh bằng 2 phần tử cạnh nhau, nếu: 
// -> true: dem++
// -> false: đưa phần tử có dem = 1 vào 1 mảng
let arr1 = [1, 3, 6, 5, 2, 3, 4, 6];
function timSoXuatHienMotLan(a) {
    a.sort();
    let arr = [];
    let dem = 1;
    for(let i = 0; i <= a.length; i++) {
        if(a[i] == a[i+1]) {
            dem ++;
        } else {
            let obj = {num: a[i], count: dem};
            arr.push(obj);
            dem = 1;
        }
    }
    console.log(arr);
    let arrOne = [];
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i].count == 1) {
            arrOne.push(arr[i].num);
        }
    }
    return arrOne;
}
console.log(timSoXuatHienMotLan(arr1));

// let arr1 = [1, 3, 6, 5, 2, 3, 4, 6];
function timSoXuatHienMotLan(a) {
    a.sort();
    let arr = [];
    let dem = 1;
    for(let i = 0; i <= a.length; i++) {
        if(a[i] == a[i+1]) {
            dem ++;
        } else {
            let obj = {num: a[i], count: dem};
            arr.push(obj);
            dem = 1;
        }
    }
    console.log(arr);
    let arrOne = [];
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i].count == 1) {
            arrOne.push(arr[i].num);
        }
    }
    return arrOne;
}
console.log(timSoXuatHienMotLan(arr1));

// 2. Cho một mảng số nguyên a0, a1, a2, …, an-1. 
//Liệt kê số lần xuất hiện của các phần tử trong một mảng đã cho.
let arr2 = [1, 3, 6, 5, 2, 3, 4, 6];
function lietKeLanXuatHien(a) {
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
    console.log(arr);
    for(let i = 0; i < arr.length; i++) {
        console.log('phần tử ' + arr[i].num + ' xuất hiện ' + arr[i].count);
    }
}
lietKeLanXuatHien(arr2);

// 3. Cho một mảng số nguyên a0, a1, a2, …, an-1. 
//Hãy sắp xếp mảng theo thứ tự tăng dần, sau đó chèn phần tử k vào mà vẫn đảm bảo mảng là tăng dần.
// b1: 
let arr3 = [1, 3, 6, 5, 2, 3, 4, 6];
function sapXepTangDan(arr, k) {
    arr.push(k);
    arr.sort();
    console.log(arr);
}
sapXepTangDan(arr3, 9);

// 4. Write a program to remove duplicate elements from an array
// loại bỏ các phần tử trùng lặp khỏi một mảng
let arr4 = [1, 3, 6, 5, 2, 3, 4, 6];
function removeDuplicate (a) {
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
    let arrOne = [];
    for(let j = 0; j < arr.length; j++) {
        arrOne.push(arr[j].num);
    }
    return arrOne;
}
console.log(removeDuplicate(arr4));

// Ví dụ: tìm số lớn nhất - max/ nhỏ nhất - min
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);
console.log(min);
// expected output: 2

// 5. Write a program to find the second largest element in an array
// Tìm phần tử lớn thứ 2 trong mảng
// cách 1:
// b1: sắp xếp mảng nhỏ dần
// b2: loại bỏ các phần tử trùng nhau
// b3: lấy phần tử thứ 2 từ dưới lên -> phần tử nhỏ thứ 2
let arr5 = [1, 3, 6, 5, 2, 3, 4, 6];
function findSecondLargest(a) {
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
    return arr[arr.length - 2].num;
}
console.log(findSecondLargest(arr5));

// cách 2: 
// b1: Tìm số lớn nhất: max
// b2: sắp xếp mảng nhỏ -> lớn
// b3: kiểm tra lần lượt từ dưới lên: 
// khi nào có số <max thì return
// let arr5 = [1, 3, 6, 5, 2, 3, 4, 6];
function findMaxNumber(a) {
    max = a[0];
    for(i = 1; i < a.length; i ++) {
        if(max < a[i]) {
            max = a[i];
        }
    }
    return max;
}
function findSecondLargest(a) {
    let m = findMaxNumber(a);
    a.sort();
    for(let i = a.length; i > 0; i --) {
        if(a[i] < m) {
            return a[i];
        }
    }
}
console.log(findSecondLargest(arr5));

// 6. Write a program to find the second smallest element in an array
// Tìm phần tử nhỏ nhứ 2 trong mảng
// Cách 1:
let arr6 = [1, 3, 6, 5, 2, 3, 4, 6];
function findSecondSmall(a) {
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
    return arr[1].num;
}
console.log(findSecondSmall(arr6));

// Cách 2:
// let arr6 = [1, 3, 6, 5, 2, 3, 4, 6];
function findMinNumber(a) {
    min = a[0];
    for(i = 1; i < a.length; i ++) {
        if(min > a[i]) {
            min = a[i];
        }
    }
    return min;
}
function findSecondSmall(a) {
    let min = findMinNumber(a);
    a.sort();
    for(let i = 0; i < a.length; i++) {
        if(a[i] > min) {
            return a[i];
        }
    }
}
console.log(findSecondSmall(arr6));

// 7. Write a program to get the difference between the largest and smallest values in an array of integers. The length of the array must be 1 and above
// lấy hiệu giữa giá trị lớn nhất và nhỏ nhất trong một mảng + độ dài mảng > 1
let arr7 = [1, 3, 6, 5, 2, 3, 4, 6];
function findMinNumber(a) {
    min = a[0];
    for(i = 1; i < a.length; i ++) {
        if(min > a[i]) {
            min = a[i];
        }
    }
    return min;
}
function findMaxNumber(a) {
    max = a[0];
    for(i = 1; i < a.length; i ++) {
        if(max < a[i]) {
            max = a[i];
        }
    }
    return max;
}
function sutractNumber(a) {
    if(a.length < 2) {
        return 'Hãy nhập lại mảng có độ dài lớn hơn 1';
    } else {
        let max = findMaxNumber(a);
        let min = findMinNumber(a);
        return max - min;
    }
}
console.log(sutractNumber(arr7));

// 8. Write a program to compute the average value of an array of integers except the largest and smallest values
// tính giá trị trung bình của một mảng số nguyên trừ giá trị lớn nhất và nhỏ nhất
// b1: Tìm min , max của mảng đã cho
// b2: tạo 1 mảng mới ko có giá trị min và max
// b3: tính TBC của mảng mới 
let arr8 = [1, 3, 6, 5, 2, 3, 4, 6];
function findMinNumber(a) {
    min = a[0];
    for(i = 1; i < a.length; i ++) {
        if(min > a[i]) {
            min = a[i];
        }
    }
    return min;
}
function findMaxNumber(a) {
    max = a[0];
    for(i = 1; i < a.length; i ++) {
        if(max < a[i]) {
            max = a[i];
        }
    }
    return max;
}
function averageValue(a) {
    let min = findMinNumber(a);
    let max = findMaxNumber(a);
    let arr = [];
    let S = 0;
    for(let i = 0; i < a.length; i++) {
        if(a[i] != min && a[i] != max) {
            arr.push(a[i]);
        }
    }
    for(let i = 0; i < arr.length; i++) {
        S = S + a[i];
    }
    return S/arr.length;
}
console.log(averageValue(arr8));

// 9. Write a program to check if an array of integers without 0 and -1
// kiểm tra mảng ko chứa 0 và -1
let arr9 = [1, 10, 6, 0, 2, -1, 4, 6];
function checkArray(a) {
    let dem = 0;
    for(let i = 0; i < a.length; i ++) {
        if(a[i] == 0 || a[i] == -1) {
            dem ++;
        }
    }
    if(dem >= 1) {
        return false;
    } else {
        return true;
    }
}
checkArray(arr9);

// let arr9 = [1, 10, 6, 0, 2, -1, 4, 6];
function checkArray(a) {
    for(let i = 0; i < a.length; i ++) {
        if(a[i] == 0 || a[i] == -1) {
            return false;
        }
    }
    return true;
}
checkArray(arr9);

// 10. Write a program to find the sum of the two elements of a given array which is equal to a given integer
// tìm tổng hai phần tử của mảng bằng một số nguyên cho trước
// b1: Cộng từng phần tử trong mảng với từng phần tử còn lại
// S = a[0] + từng phần tử còn lại trong mảng
// S = a[1] + từng phần tử còn lại trong mảng
// b2: nếu S = n -> trả về a[i] và a[j]

// b1: i = 0 -> j = 1 -> arr.length-1
// b2: i = 1 -> j = 2 -> arr.length-1
// b3: i = 2 -> j = 3 -> arr.length-1

let arr10 = [1, 10, 6, 0, 2, -1, 4, 6];
function findSum(arr, n) {
    let s;
    let a = [];
    for(let i = 0; i < arr.length; i ++) {
        for(let j = i + 1; j < arr.length - 1; j ++) {
            s = arr[i] + arr[j];
            if(s == n) {
                let obj = {numI: arr[i], numJ: arr[j]};
                a.push(obj);
            }
        }
    }
    console.log(a);
    for(let i = 0; i < a.length; i++) {
        console.log('Phần tử ' + a[i].numI + ' và ' + a[i].numJ + ' có tổng bằng ' + n);
    }
}
findSum(arr10, 10);

// 11. Write a program to print all the LEADERS in the array. An element is leader if it is greater than all the elements to its right side.
// in ra các phần tử lãnh đạo (là phần tử lớn hơn tất cả phần tử bên phải nó)
// VD arr11 = [2, 9, 4, 6, 3, 5, 1]; -> 9, 6, 5
// b1: so sánh a[i] > a[j]:
// 2 > 9 -> true: dem++ -> dem = arr.length - i
//       -> false: dem = 0 tạo thêm 1 mảng mới arrNew.push(a[i])
// 9 > 4
let arr11 = [2, 9, 4, 6, 3, 5, 1];
function printLeaders(arr) {
    let dem = 0;
    let arrNew = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < (arr.length - i); j++) {
            if(arr[i] > arr[j]) {
                dem++;
            } else {
                let obj = {num: arr[i], count: dem};
                arrNew.push(obj);
                dem = 0;
            }
        }
    }
    console.log(arrNew);
}
printLeaders(arr11);


if(dem == arr.length - j) {
    console.log(arr[i]);
}

// 12. Write a program to find smallest and second smallest elements of a given array
// tìm phần tử nhỏ nhất và nhỏ thứ 2 của mảng
let arr12 = [2, 9, 4, 6, 3, 5, 1];
function findSmallest(a) {
    min = a[0];
    for(i = 1; i < a.length; i ++) {
        if(min > a[i]) {
            min = a[i];
        }
    }
    return min;
}
function findSecondSmallest(a) {
    a.sort();
    let min = findSmallest(a);
    for(let i = 0; i < a.length; i++) {
        if(a[i] > min) {
            return '2 phần tử nhỏ nhất mảng: ' + min + ', ' + a[i];
        }
    }
}
console.log(findSecondSmallest(arr12));

// Cách 2: 
// let arr12 = [2, 9, 4, 6, 3, 5, 1];
function findSmallest(a) {
    min = a[0];
    for(let i = 1; i < a.length; i ++) {
        if(min > a[i]) {
            min = a[i];
        }
    }
    return min;
}
function findSecondSmallest(a) {
    let min1 = findSmallest(a);
    let arr = [];
    for(let i = 0; i < a.length; i++) {
        if(a[i] !== min1) {
            arr.push(a[i]);
        }
    }
    console.log(arr);
    min2 = arr[0];
    for(let j = 1; j < arr.length; j ++) {
        if(min2 > arr[j]) {
            min2 = arr[j];
        }
    }
    return '2 phần tử nhỏ nhất mảng: ' + min1 + ', ' + min2;
}
console.log(findSecondSmallest(arr12));

// Cách 3: 
// let arr12 = [2, 9, 4, 6, 3, 5, 1];
function findSecondSmallest(a) {
    a.sort();
    return '2 phần tử nhỏ nhất mảng: ' + a[0] + ', ' + a[1];
}
console.log(findSecondSmallest(arr12));

// 13. Write a program to find all combination of four elements of a given array whose sum is equal to a given value.
// tìm tổng hợp bốn phần tử của một mảng đã cho có tổng bằng một giá trị cho trước
// 1+10+6+0 -> 1+6+0+2 -> 1+0+2-1 -> 1+2-1+4 -> 1-1+4+6
// 10+6+0+2 -> 10+0+2-1 -> 10+2-1+4 -> 10-1+4+6 
// 6+0+2-1 -> 6+2-1+4 -> 6-1+4+6
// 0+2-1+4 -> 0-1+4+6
// 2-1+4+6
let arr13 = [1, 10, 6, 0, 2, -1, 4, 6];
function findFourElement(arr, n) {
    let S;
    let a = [];
    for(let i = 0; i < arr.length; i ++) {
        for(let j = i + 1; j < arr.length - 1; j ++) {
            for(let m = j + 1; m < arr.length - 1; m ++) {
                for(let n = m + 1; n < arr.length - 1; n ++) {
                    S = arr[i] + arr[j] + arr[m] + arr[n];
                    let obj = {valueS: S, numI: arr[i], numJ: arr[j], numM: arr[m], numN: arr[n]};
                    a.push(obj);
                }
            }
        }
    }
    for(let i = 0; i < a.length; i++) {
        if(a[i].valueS == n) {
            console.log('4 số có tổng bằng ' + n + ' là: ' + a[i].numI + ', ' + a[i].numJ + ', ' + a[i].numM + ', ' + a[i].numN);
        }
    }
}
findFourElement(arr13, 10);


// 14. Write a program to arrange the elements of a given array of integers where all positive integers appear before all the negative integers 
// sắp xếp các phần tử của một mảng số nguyên đã cho, trong đó tất cả các số nguyên dương đều xuất hiện trước tất cả các số nguyên âm
let arr14 = [1, -1, 2, -2, 3, 4, -3];
let arrD, arrA;
let arr0 = [];
function arrangeElements(arr) {
    arrD = arr.filter(function(i) {
        return i > 0;
    });
    arrA = arr.filter(function(i) {
      return i < 0;
    });
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i] == 0) {
            arr0.push(arr[i]);
        }
    }
    console.log(arrD.concat(arr0, arrA));
}
arrangeElements(arr14);

// let arr14 = [1, -1, 2, -2, 3, 4, -3];
let arrD = [];
let arrA = [];
let arr0 = [];
function arrangeElements(arr) {
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i] == 0) {
            arr0.push(arr[i]);
        } else if(arr[i] > 0) {
            arrD.push(arr[i]);
        } else {
            arrA.push(arr[i]);
        }
    }
    console.log(arrD.concat(arr0, arrA));
}
arrangeElements(arr14);
 
// 15.  Write a program to separate even and odd numbers of a given array of integers. Put all even numbers first, and then odd numbers
// tách các số chẵn và lẻ của một mảng số nguyên cho trước. Đặt tất cả các số chẵn trước rồi đến các số lẻ
let arr15 = [1, 2, 3, 4, 5, 6, 7, 8];
let arrC = [];
let arrL = [];
let arr0 = [];
function separateNumber(arr) {
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i] == 0) {
            arr0.push(arr[i]);
        } else if(arr[i] % 2 == 0) {
            arrC.push(arr[i]);
        } else {
            arrL.push(arr[i]);
        }
    }
    console.log(arrC.concat(arr0, arrL));
}
separateNumber(arr15);

// 16. Write a program to find maximum product of two integers in a given array of integers
// tìm tích lớn nhất của hai số nguyên trong một mảng
// Cách này sẽ bị sót TH let arr16 = [1, 2, 3, 4, 5, 6, 7, 9, 9];
// Nên cách này chỉ dùng cho bài tìm tích của số lớn nhất là lớn thứ 2 của mảng
let arr16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
function findMaxNumber(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i ++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
function findMaximum(arr) {
    let max1 = findMaxNumber(arr);
    let arrNew = [];
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i] !== max1) {
            arrNew.push(arr[i]);
        }
    }

    let max2 = arrNew[0];
    for(let i = 1; i < arrNew.length; i ++) {
        if(max2 < arrNew[i]) {
            max2 = arrNew[i];
        }
    }
    return max1 * max2;
}
console.log(findMaximum(arr16));

// -> sắp xếp mảng tăng dần -> là tích của 2 số nguyên cuối mảng
// let arr16 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function findMaximum(arr) {
    arr.sort();
    let max1 = arr[arr.length-1];
    let max2 = arr[arr.length-2];
    return max1 * max2;
}
console.log(findMaximum(arr16));

// 17. Write a Java program to shuffle a given array of integers (use random function)
// Example:
// Input :
// nums = { 1, 2, 3, 4, 5, 6 }
// Output:
// Shuffle Array: [4, 2, 6, 5, 1, 3] or [1,2,3,4,6,5] .... v.v
// Viết chương trình JS để xáo trộn một mảng số nguyên đã cho (sử dụng hàm random)
let arr17 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let list = arr17.sort(() => Math.random() - 0.5);
console.log(list);

// 18. Write a Java program to form the largest number from a given list of non negative integers
// Example:
// Input :
// nums = {1, 2, 3, 0, 4, 6}
// Output:
// Largest number using the said array numbers: 643210
// Viết chương trình Java để tạo thành số lớn nhất từ ​​danh sách các số nguyên không âm đã cho
// sắp xếp mảng giảm dần -> chuyển mảng giảm dần thành string -> number lớn nhất
let arr18 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function numberLargest(arr) {
    arr.sort(function(a, b) {return b-a;});
    let str = arr.join('');
    let numb = Math.floor(str);
    return numb;
}
console.log(typeof(numberLargest(arr18)) + ' ' + numberLargest(arr18));


//yc1: 18, 16 (sửa lại cách 1), 13, 11
//yc2: tìm hiểu về map, forEach, filter, find
// tiêu chí: 
// 1. ý nghĩa
// 2. tìm điểm giống/ khác
// 3. dùng trong TH nào

// Hàm trả về mảng nhân đôi mảng gốc
let arr = [1, 2, 3, 4, 5, 6, 6, 7];
function nhanDoiMang(arr) {
    let arrX2 = [];
    for(let i = 0; i < arr.length; i ++) {
        arrX2.push(arr[i] * 2);
    }
    return arrX2;
}
console.log(nhanDoiMang(arr));

// map()
let new_arrNumb = arr.map(function(item){
    return item * 2; // nhân đôi giá trị
});
console.log(new_arrNumb);

// forEach()
let arr = [1, 2, 3, 4, 5, 6, 6, 7];
function nhanDoiMang(arr) {
    let arrX2 = [];
    arr.forEach(function(i) {
        arrX2.push(i * 2);
    });
    return arrX2;
}
console.log(nhanDoiMang(arr16));

let num = arr.forEach(function(num, index) {
    return num * 2;
});
console.log(num); // undefined

// filter()
// find()
let trees = [ 
    "birch", 
    "maple", 
    "oak", 
    "poplar"
];
let resultFind = trees.find(tree => tree.startsWith("m"));
let resultFilter = trees.filter(tree => tree.startsWith("m"));
console.log(resultFind); // maple
console.log(resultFilter); // ['maple']