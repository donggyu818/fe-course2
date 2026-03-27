/*
    Iterable(순회) Object : 내부에서 계속 순환하는 객체. Iteration Protocol 을 준수하는 객체
    - ** for .. of 구문. for 는 안 되고 for .. of 만 됨.
    - String, Array, Set, Map 이 포함이 됨. 대문자로 정의 => class 로 정의된 거. => new 로 정의
    - ...(Spread Operator : 스프레드 연산자, 전개 구문) : 블록 안에서 객체의 데이터를 전개함(펼쳐놓음)
    - ...(Rest Parameter) : 매개변수 모든 값을 배열로 저장
    - ...(Destructring Object: 구조분해 할당) : 객체를 분해한 후 변수에 할당
*/
// String 객체 생성 후 for..of 구문 사용 ⭕ => Iteration Protocol 을 준수하는 객체
let strList = new String('Hello~ JavaScript!!');
for( let str of strList ) {
    console.log(str);
}

console.log();

// Number 객체 생성 후 for..of 구문 사용 ❌ => Iteration Protocol 을 준수하지 않는 객체. 이거는 MDN 에서 검색 후 왼쪽 필터에서 iter 검색했을 때 안 나옴.
// Number 클래스는 Iteration Protocole 을 준수하지 않음
// let numbers = new Number(12345);
// for( let number of numbers ) {
//     console.log(number);
// }

// Array 객체 생성 후 for..of 사용
let numbers = [1, 2, 3, 4, 5];
for ( let number of numbers ) {
    console.log(number);
}

// forEach()
numbers.forEach( (number) => {
    console.log(`number = ${number}`);
});

// find() - 3, findIndex() - 3의 인덱스 주소
let findnumber = numbers.find( (number) => number === 3 );
console.log(`find = ${findnumber}`);
let findIndex = numbers.findIndex( (number) => number === 3 );
console.log(`findindex = ${findIndex}`);

// filter() - 짝수만 반환
let evenNumbers = numbers.filter( (number) => number%2 === 0 );     // 'number%2 === 0' 는 !(number%2) 로 해도 됨. (! = 부정)
console.log(`evenNumbers = ${evenNumbers}`);

// map() - 모든 요소에 +10
let plusenumber = numbers.map( (number) => number + 10 );
console.log(`더하기 10 : ${plusenumber}`);
