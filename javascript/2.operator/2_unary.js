/*
    단항 연산자 : ++, --, !, !!
    ++, -- 는 변수의 앞에 붙냐 뒤에 붙냐에 따라 값이 달라질 수 있음.
*/

let a = 10;
console.log(++a); // 전위. a에 1을 더한 수치를 출력시켜라 = 11
console.log(a++); // 후위. a를 먼저 출력시키고 a에 1을 더해라 = 11 출력, 메모리의 a = 12.
console.log(a); // 현재 a의 메모리 값인 12가 나옴.
console.log(); // 이러면 한 줄 비우는 효과가 나옴.

let b = 10;
console.log(b--); // 후위. 10이 출력되고 메모리엔 b = 9.
console.log(--b); //전위. b가 9 이므로 1을 뺀 8을 출력.
console.log(b);   // b = 8
console.log(++b); // b = 9
console.log(b++); // b = 9, 메모리엔 b = 10
console.log(b);   // b = 10
console.log();

let flag = true;
console.log(flag);
console.log(!flag); // ! 는 반댓값을 출력. 원래 true 이므로 false 로 출력됨.
console.log(!!flag); // ! 가 두 번 있으므로 true 로 출력됨.






// console.log(++b++); 단항 연산자는 두 번 동시에 쓸 수 없음.


