//Cach1: Dung ham isInteger
function soNguyenDuong(value) {
	return(Number.isInteger(value) && value > 0);
}
console.log(soNguyenDuong(2)); //true

//Cach2: Dung toan tu lay dư
let laSoNguyenDuong = (value) => { 
    return (value > 0 && value % 1 == 0);
};
console.log(laSoNguyenDuong("2")); //true

let laSoNguyenDuong = (value) => {
    return (typeof value == 'number' && value > 0 && value % 1 == 0);
};
console.log(laSoNguyenDuong("2")); //false

// Voi ham so nguyen am thi lam ngược lại
function soNguyenAm(value) {
	return(Number.isInteger(value) && value < 0);
}
console.log(soNguyenAm(-2));

let soNguyenAm = (value) => {
	return (typeof value == 'number' && value > 0 && value % 1 == 0);
};
console.log(soNguyenAm(-2));
