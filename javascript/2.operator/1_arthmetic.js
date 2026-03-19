/*
    사칙연산 : +, -, *, /, %(모듈러, 나머지 연산자), **(지수 연산자)
*/

console.log(3 + 5);
console.log(3 - 5);
console.log(3 * 5);
console.log(3 / 5);
console.log(3 % 5); // 3/5 하면 몫은 0, 나머지가 3 이므로 3 출력
console.log(3 ** 5);

// 이렇게 계산 결과 값을 불러올 때마다 코드를 작성하면 길어지므로 아래처럼 변수를 지정하면 단순해짐.
let a = 3;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// 짝수, 홀수 선택 => %(moduler, 나머지 연산자) 사용. 2로 나눴을 때 짝수는 0 홀수는 1

let number = 100;
let number2 = 101;

// number 값이 짝수인지, 홀수인지 구분하고 싶다면? => number%2 한 나머지가 0 이면 짝수.
console.log(number%2);  // 짝수
console.log(number2%2); // 홀수

/* 
+ 는 두 가지 의미가 있음. 
1. 더하기
2. 접합연산자 : " '문자열' + " 처럼 + 기호 앞에 문자열이 오는 경우
*/
console.log(10 + 10);   // 더하기가 되어 20
console.log('10' + 10); // 접합연산자가 되어 1010
console.log('홍길동' + '이순신'); // 접합연산자가 되어 홍길동이순신
console.log('합계 = ' + 10 + 10);  // '합계' 가 문자이므로 뒤에 붙은 + 는 접합연산자가 됨.
// 그럼 + 뒤의 10은 문자가 되고 마지막 10은 숫자가 되어 "합계 = 1010 이 됨."
console.log('합계 = ' + (10 + 10));  // 더하기를 먼저 처리하게 소괄호로 감싸면 "합계 = 20" 이 나옴



