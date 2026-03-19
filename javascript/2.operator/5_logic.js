/*
    논리 연산자 : &&, ||(Shift + 엔터 위의 원 을 누른거.)

    && 은 and, || 은 or

    논리식1(boolean) && 논리식2(boolean) : 결과값(boolean 타입)
    논리식1(boolean) || 논리식2(boolean) : 결과값(boolean 타입)
    && 연산자는 논리식 1, 2 가 모두 true 여야만 true 가 나옴.
    || 연산자는 논리식 1, 2 중 1개만 true 여도 true 가 나옴.
*/

let a = 3;
let b = 7;
console.log('---- && : AND ---->');
console.log((a < b) && (a > b));    // true && false. 두 논리식 중 뒤가 false 이므로 false.
console.log((a < b) && (a == b));   // true && false. false 출력.
console.log((a > b) && (a == b));   // false && false. false 출력.
/* 이 위의 식은 순차적으로 처리하는 과정 중, 첫 논리식이 false 가 나왔음. 그러면 두 번째 논리식이 뭐든 
결과는 false 이므로 두 번째 논리식이 true 인지 판단하지 않고 결과를 바로 출력함. 이를 'shortcut 연산자' 라고 함
shortcut 되면 처리 속도가 빨라짐 */
console.log((a < b) && (a !== b));  // true && true. b가 크고, a와 b의 값이 같지 않기 때문에 true.


console.log('---- || : OR ---->');
console.log((a < b) || (a > b));    // true && false. 하나라도 true 가 있으므로 true. 'shortcut 연산자'
console.log((a < b) || (a == b));   // true && false. true 출력. 'shortcut 연산자'
console.log((a > b) || (a == b));   // false && false. 둘 중에 true 가 없으므로 false.
console.log((a < b) || (a !== b));  // true && true. b가 크고, a와 b의 값이 같지 않기 때문에 true. 'shortcut 연산자'

// a = 3, b = 7 형태로 숫자형일 경우 a && b 는 불가능 함. true / false 로 나와야 하기 때문.


// 로그인 처리 시 (패스워드 && 아이디) 비교 로직을 구현 (참고)
let userId = 'test';
let userPass = '1234';
if(userId == 'test' && userPass == '1234') {
    // 결과. 
}