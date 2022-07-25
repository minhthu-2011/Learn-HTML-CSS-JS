// Bài 1

let user = {};
user.name = "David";
user.surname = "Xuan";
user.name = "Cafedev";
delete user.name;
console.log(user);

// Bài 2

// Chỉ cần lặp qua đối tượng và trả về false ngay lập tức nếu có ít nhất một thuộc tính.
let obj = {
	name: "thu",
	age: 17,
}
function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}


// Bài 3

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 390

// Bài 4

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}
// Bài 5
// Kết quả bị lỗi

function makeUser() {
  return {
    name: "David",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Error: Cannot read property 'name' of undefined

/*
Đó là bởi vì các quy tắc thiết lập this không xem xét định nghĩa đối tượng. Tại thời điểm gọi mới quan trọng.

Ở đây giá trị của bên trong makeUser() này là undefined, bởi vì nó được gọi dưới dạng một hàm, không phải là một phương thức với cú pháp “dot”.

Giá trị this đại diện cho toàn bộ hàm, các khối mã và các ký tự đối tượng không ảnh hưởng đến nó.

Vì vậy, ref có this thực sự lấy giá trị hiện tại của hàm là undefined.

Chúng ta có thể viết lại hàm và trả về như this với giá trị undefined:
*/

function makeUser(){
  return this; // this time there's no object literal
}

alert( makeUser().name ); // Error: Cannot read property 'name' of undefined

/* Như bạn có thể thấy kết quả của alert (makeUser(). Name) giống với kết quả của alert (user.ref.name) từ ví dụ trước.

Đây là trường hợp ngược lại: */

function makeUser() {
  return {
    name: "David",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

alert( user.ref().name ); // David

//Bây giờ nó hoạt động, vì user.ref() là một phương thức. Và giá trị của điều này được đặt thành đối tượng trước dấu chấm ..


// Bài 6

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// Bài 7

// Giải pháp là trả về chính đối tượng từ mọi cuộc gọi.

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
}

ladder.up().up().down().up().down().showStep(); // 1

// Chúng ta cũng có thể viết một cuộc gọi trên mỗi dòng. Đối với chuỗi dài, nó dễ đọc hơn:

ladder
  .up()
  .up()
  .down()
  .up()
  .down()
  .showStep(); // 1
  
  // Bài 8

/*
Vâng nó có thể.

Nếu một hàm trả về một đối tượng thì new trả về nó thay vì đối tượng này.

Vì vậy, họ có thể, chẳng hạn, trả về cùng một đối tượng được xác định bên ngoài obj:
*/

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true


// Bài 9

function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// Bài 10

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('How much to add?', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);