/*
    비교 연산자 : >, <, >=, <=, ==(값 비교), ===(값 + 데이터 타입 비교)
    결과값은 불린형(boolean) 이므로 true / false 로 나옴.
    제어문의 조건 비교 시 사용. if, while 등
*/

let a = 3;
let b = 7;
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a === b);
console.log();

let c = 7;
console.log(b >= c); // true 나옴
console.log(b <= c); // true 나옴
console.log(b === c);
console.log();


const obj1 = {name : '홍길동', age : 30}
const obj2 = {name : '홍길동', age : '30'} //const 혹은 let 을 새로 썼으므로 별도로 만들어짐.
console.log(obj1 == obj2);      // 별도로 만들어졌으므로 obj1 과 obj2 는 다름.
console.log(obj1 === obj2);     // 역시 다름.
console.log(obj1.name == obj2.name);    // name 의 값은 같으므로 true.
console.log(obj1.name === obj2.name);    // 같은 문자형이므로 true.
console.log(obj1.age == obj2.age);    // 값만 비교하므로 true.
console.log(obj1.age === obj2.age);    // 데이터 타입이 숫자 / 문자로 달라서 false.
console.log(typeof obj1.age, typeof obj2.age);  // number / string
