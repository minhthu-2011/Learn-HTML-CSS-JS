//Kiem tra so nguyen duong
//Cach 1:
function soNguyenDuong(value){
  return (Number.isInteger(value) && value > 0);
}
console.log(soNguyenDuong(8));

//Cach 2:
function laSoNguyenDuong(value2){
  return(typeof value2 == 'number' && value2 > 0 && value2 % 1 == 0 );
}
console.log(laSoNguyenDuong('10','9'));

//Kiem tra so nguyen am
function laSoNguyenAm(value){
    return (Number.isInteger(value) && value < 0);
}

let laSoNguyenAm = (value) => {
    return (typeof value == 'number' && value < 0 && value % 1 == 0);
};

//Sử dụng phương thức Number.isInteger() để kiểm tra một số giá trị.
function myFunction() {
	var res = "";
	res = res + "123 : " + ((Number.isInteger(123)) ? 
		'Là một số nguyên' : 'Không phải là một số nguyên') + "<br>";
	res = res + "10/3 : " + ((Number.isInteger(10/3)) ? 
		'Là một số nguyên' : 'Không phải là một số nguyên') + "<br>";
	res = res + "-4 : " + ((Number.isInteger(-4)) ? 
		'Là một số nguyên' : 'Không phải là một số nguyên') + "<br>";
	res = res + "4,132 : " + ((Number.isInteger(4.132)) ? 
		'Là một số nguyên' : 'Không phải là một số nguyên') + "<br>";
	res = res + "'123' : " + ((Number.isInteger('123')) ? 
		'Là một số nguyên' : 'Không phải là một số nguyên') + "<br>";
	res = res + "'freetuts' : " + ((Number.isInteger('freetuts')) ? 
		'Là một số nguyên' : 'Không phải là một số nguyên') + "<br>";
	res = res + "'1/6/2017' : " + ((Number.isInteger('1/6/2017')) ? 
		'Là một số nguyên' : 'Không phải là một số nguyên') + "<br>";
	res = res + "true : " + ((Number.isInteger(true)) ? 
		'Là một số nguyên' : 'Không phải là một số nguyên') + "<br>";

	document.getElementById("demo").innerHTML = res;
}

//Tinh tổng hai so
let numbers = {
    number1 : 20,
    number2 : 30
};
let sum = numbers.number1 + numbers.number2; // 50



