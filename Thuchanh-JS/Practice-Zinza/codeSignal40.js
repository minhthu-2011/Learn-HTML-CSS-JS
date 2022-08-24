//1. Write a function that returns the sum of two numbers.
function solution(param1, param2) {
    return param1 + param2;
}

//2. Given a year, return the century it is in
function solution(year) {
    return Math.ceil(year/100);
}

//3. Given the string, check if it is a palindrome. (chuỗi đối xứng)
function solution(inputString) {
    let str = inputString.split('').reverse().join('');
    return inputString == str;
}

//4. Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
function solution(inputArray) {
    let maxT = inputArray[0] * inputArray[1];
    for(let i = 1; i < inputArray.length - 1; i++) {
        maxT = Math.max(maxT, inputArray[i] * inputArray[i+1]);
    }
    return maxT;
}

//5. Below we will define an n-interesting polygon
function solution(n) {
    return Math.pow((n-1), 2) + Math.pow((n), 2);
}

//6. For statues = [6, 2, 3, 8], the output should be solution(statues) = 3. Ratiorg needs statues of sizes 4, 5 and 7.
function solution(statues) {
    let min = statues[0];
    for(let i = 1; i < statues.length; i ++) {
        min = Math.min(min, statues[i]);
    }
    let max = statues[0];
    for(let i = 1; i < statues.length; i ++) {
        max = Math.max(max, statues[i]);
    }
    return ((max - min + 1) - statues.length);
}

//7. Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
function solution(seq) {
    let bad = 0
    for(let i = 1; i < seq.length; i++) {
        if(seq[i] <= seq[i-1]) {
            bad ++;
            if(bad > 1) return false;
            if(seq[i] <= seq[i-2] && seq[i+1] <= seq[i-1]) return false;
        }
    }
    return true
}
console.log(solution([1, 3, 2, 1]));
// ?????????????????????????

//8. [[0, 1, 1, 2]
//    [0, 5, 0, 0]
//    [2, 0, 3, 3]]  -> 1 + 5 + 1 + 2 = 9
function solution(matrix) {
    let s = 0;
    for(let j = 0; j < matrix[0].length; j ++){
        for(var i = 0; i < matrix.length; i ++){
          if(matrix[i][j] === 0) break;
          else s += matrix[i][j];
        }
    }
    return s;
}

//9. Given an array of strings, return another array containing all of its longest strings.
function solution(inputArray) {
    let lmax = inputArray[0].length;
    let arr = [];
    for(let i = 0; i < inputArray.length; i ++) {
        lmax = Math.max(lmax, inputArray[i].length);
    }
    for(let j = 0; j < inputArray.length; j ++) {
        if(inputArray[j].length == lmax) {
            arr.push(inputArray[j]);
        }
    }
    return arr;
}

//10. Given two strings, find the number of common characters between them.
function solution(s1, s2) {
    if(s1.length > s2.length) {
      for (let i = 0; i < s1.length; i++) {
          s1 = s1.replace(s2[i], "!");
      }
      return s1.replace(/[^!]/g, "").length;
    } else {
      for (let i = 0; i < s1.length; i++) {
          s2 = s2.replace(s1[i], "!");
      }
      return s2.replace(/[^!]/g, "").length;
    }
}

//11. Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
function solution(n) {
    let s1 = 0, s2 = 0;
    let arr1 = [], arr2 = [];
    let N = n.toString();
    let A = N.split('');
    for(let i = 0; i < A.length/2; i ++){
        arr1.push(Number(A[i]));
    }
    for(let i = A.length/2; i < A.length; i ++){
        arr2.push(Number(A[i]));
    }
    for(let j = 0; j < arr1.length; j ++) {
        s1 += arr1[j];
    }
    for(let j = 0; j < arr2.length; j ++) {
        s2 += arr2[j];
    }
    return s1 == s2;
}
console.log(solution(1230));

//12. For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
function solution(a) {
    var people = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            people.push(a[i]);
        }
    }
    
    people.sort(function(a, b) {
        return a - b;
    });

    for (var j = 0; j < a.length; j++) {
        if (a[j] > 0) {
            a[j] = people.shift();
        }
    }
    
    return a;
}
console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));

//13. Write a function that reverses characters in (possibly nested) parentheses in the input string.
// Input strings will always be well-formed with matching ()s.
// chỉ đảo ngược chuỗi nằm trong ()
function solution(inputString) {
    while (inputString.includes('(')) {
        inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
    }
    return inputString;
}
// ??????????????????

//14. Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.
// For a = [50, 60, 60, 45, 70], the output should be solution(a) = [180, 105].
function solution(a) {
    let arr1 = [];
    let arr2 = [];
    for(let i = 0; i < a.length; i ++) {
        if(i % 2 == 0) {
            arr1.push(a[i]);
        } else {
            arr2.push(a[i]);
        }
    }
    let arr = [];
    let d1 = 0;
    let d2 = 0;
    arr1.map(function(i){
        d1 += i;
    });
    arr2.map(function(i){
        d2 += i;
    });
    arr.push(d1, d2);
    return arr;
}
solution([50, 60, 60, 45, 70]);

//15. Given a rectangular matrix of characters, add a border of asterisks(*) to it.
// picture = ["abc",  => solution(picture) = ["*****",
//            "ded"]                          "*abc*",
//                                            "*ded*",
//                                            "*****"]
function solution(picture) {
    for(let i = 0; i < picture.length; i++) {
        console.log('*' + picture[i] + '*');
        picture[i] = '*' + picture[i] + '*';
    }
    let a = [];
    for(let i = 0; i < picture[0].length; i ++) {
        a.push('*');
    }
    picture.unshift(a.join(''));
    picture.push(a.join(''));
    return picture;
}
console.log(solution(["abc", "ded"]));

//16. Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
// a = [1, 2, 3] , b = [1, 3, 2] => a = b
function solution(a, b) {
    a.sort();
    let arra = [];
    let dema = 1;
    for(let i = 0; i < a.length; i++) {
        if(a[i] == a[i+1]) {
            dema ++;
        } else {
            let obj = {num: a[i], count: dema};
            arra.push(obj);
            dema = 1;
        }
    }
    b.sort();
    let arrb = [];
    let demb = 1;
    for(let i = 0; i < b.length; i++) {
        if(b[i] == b[i+1]) {
            demb ++;
        } else {
            let obj = {num: b[i], count: demb};
            arrb.push(obj);
            demb = 1;
        }
    }
    let dem = 0;
    if(arra.length == arrb.length) {
        for(let i = 0; i < arra.length; i ++) {
            if(arra[i].count == arrb[i].count && arra[i].num == arrb[i].num){
                dem ++;
            }
        }
    }
    if(dem == arrb.length) {
        return true;
    }
    return false;
}
console.log(solution([1, 2, 3], [1, 10, 2]));

// Casch 2: True 
function solution(a, b) {
    sum = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {sum++}
    }
    a.sort(); 
    b.sort();
    return a.toString() == b.toString() && sum < 3
}

//17. You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
// IP: [-1000, 0, -2, 0] -> OP: 5
function solution(inputArray) {
    let people = [];
    let s = 0;
    for(let i = 0; i < inputArray.length; i ++) {
        if(inputArray[i] >= inputArray[i+1]) {
            people.push(inputArray[i]+1);
            s += (inputArray[i]+1) - inputArray[i+1];
            inputArray[i+1] = people.shift();
        }
    }
    return s;
}
console.log(solution([-1000, 0, -2, 0]))

//18. Given a string, find out if its characters can be rearranged to form a palindrome.
// palindrome: là 1 chuỗi đảo ngược lại vẫn là chuỗi ban đầu
function solution(inputString) {
    return inputString.split('').sort().join('').replace(/(\w)\1/g,'').length < 2; 
}

//19. 
function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    if((yourLeft == friendsLeft || yourLeft == friendsRight) && (yourRight == friendsLeft || yourRight == friendsRight)) {
        return true;
    }
    return false;
}

//20. Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
function solution(inputArray) {
    let arr = [];
    for(let i = 0; i < inputArray.length; i ++) {
        if(arr.length < inputArray.length-1) {
            arr.push(Math.abs(inputArray[i] - inputArray[i+1]));
        }
    }
    let maxInNumbers = Math.max.apply(Math, arr); 
    return maxInNumbers
}

//21. Given a string, find out if it satisfies the IPv4 address naming rules.
// it's a string of four numbers each between 0 and 255 inclusive, with a "." character in between each number. 
function solution(inputString) {
    let arr = inputString.split('.');
    console.log(arr);
    if(arr.length == 4) {
        let check = arr.every(num => (num <= 255 && num >= 0 && num !== '' && num !== '00' && num !== '01'));
        return check;
    } 
    return false;
}
console.log(solution("64.233.161.00"));

//22. Find the minimal length of the jump enough to avoid all the obstacles.
// IP = [5, 3, 6, 7, 9]   || OP = 4
