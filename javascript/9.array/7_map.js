/*
    배열의 모든 요소를 순회하면서, 콜백 함수의 조건을 적용하여 새로운 배열을 생성 후 반환.
    - 배열객체.map(callback)
*/

let numbers = [1, 2, 3, 4, 53, 12, 27];
let fnumbers = [1.123, 2.345, 3.4354];

// numbers 의 모든 요소에 X 100 하기.
let squarenum = numbers.map( (item) => item * 100 );
console.log(squarenum);

// fnumbers 의 모든 요소를 정수로 반환
let result2 = fnumbers.map ( (number) => Math.trunc(number) );
console.log(result2);

