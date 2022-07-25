var a, b;

function nhapA() {
  a = prompt('Nhap A');
}

function nhapB() {
  b = prompt('Nhap B');
}

function printResult() {
  if (a == 0) {
    if (b == 0) {
      console.log("PT vo so nghiem");
    } else {
      console.log("PT vo nghiem");
    }
  } else {
    x = -b / a;
    alert(x);
  }
}
