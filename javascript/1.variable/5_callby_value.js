/*
    call by value : 데이터 중복 시 값을 복제
    단, 값이 stack에 저장되어 있는 경우에 가능.
*/

let number = 100; // stack에 저장되는 숫자형이므로 가능.
let cnumber = number; // call by value

let flag = true;  // 불린형이라 stack 에 저장됨.
let cflag = flag;     // call by value

console.log(number, typeof number);
console.log(cnumber, typeof cnumber);
console.log(number === cnumber);

console.log();
console.log(flag, typeof flag);
console.log(cflag, typeof cflag);
console.log(flag === cflag);

