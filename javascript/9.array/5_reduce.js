/*
    배열의 누적합을 구하는 메소드 : 배열객체.reduce(callback)
*/
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce( (acc, cur) => { return acc + cur } );     // {} 가 있으면 return 을 넣어줘야 값이 출력됨.
console.log(`sum = ${sum}`);

let max = numbers.reduce( (acc, cur) => Math.max(acc, cur) );     // return 없으면 {} 생략.
let min = numbers.reduce( (acc, cur) => Math.min(acc, cur) );
console.log(`max/min = ${max}, ${min}`);