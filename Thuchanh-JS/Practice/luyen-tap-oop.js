// Luyện tập OOP
// khởi tạo class
class Person {
    say() {
        return 'Hello babe';
    }
}
let me = new Person();
console.log(me.say());

// tính đóng gói
function Person(firstName, lastName) {
    let fstName = firstName;
    let lstName = lastName;
    
    this.setFirstName = function(firstName) { 
        fstName = firstName; 
    };
  
    this.getFirstName = function() {
        return fstName; 
    };
    
    this.setLastName = function(lastName) { 
        lstName = lastName; 
    };
  
    this.getLastName = function() { 
        return lstName; 
    };
}
let person1 = new Person('Khoa', 'Nguyen');
console.log(person1.fstName); // Undefined, không thể truy cập được
console.log(person1.getFirstName()); // Khoa

// VD2:
let calculator = function(A, B) {
    let valueA = A;
    let valueB = B;
    this.value = 0;
    function tinhTong() {
        return valueA + valueB;
    }
    this.tong = function() {
        return tinhTong();
    }
}
let cal = calculator(3, 2);
cal.value = 10;
console.log(cal.tong());

// Tính kế thừa
function Person() {
    this.firstName = 'Per';
    this.lastName = 'son';
    this.sayName = function() { return this.firstName + ' ' + this.lastName };
  }
  
  // Viết một Constructor Function khác
  function SuperMan(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // Ta muốn SuperMan sẽ kế thừa các thuộc tính của Person
  // Sử dụng prototype để kế thừa
  SuperMan.prototype = new Person();
  
  // Tạo một object mới bằng Constructor Function 
  var sm = new SuperMan('Khoa', 'Nguyen');
  sm.sayName(); // Khoa Nguyen. Hàm này kế thừa từ prototype của Person