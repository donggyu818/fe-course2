/*
    제어문 : 조건 분기
    단일 if(조건절),
    if(조건절) .. else,
    if(조건절1) .. else if(조건절2).. else if(조건절3).. else..

    ✔중요 삼항 연산자 : (조건절)? statement(true 일 때) : statement2(false 일 때) ;
*/

// 1. 입력되는 과일 이름이 'apple' 인 경우에만 이모지 출력
let fname = undefined;
fname = 'apple';
if (fname == 'apple') {
    console.log('🍎');
}
fname = 'orange'; // else 를 주지 않았으므로 false 일 때 출력값이 없음.

// 2. (1번 조건 +)과일 이름이 'apple' 이 아닌 경우 과일 이름을 출력
if (fname == 'apple') {
    console.log('🍎');
} else {console.log(fname);
}

console.log();

fname = 'apple'
// 삼항 연산자로 바꿔보기. (조건이 여러 개면 못 씀.)
console.log((fname == 'apple') ? console.log('🍎') : console.log(fname));
// 위에 처럼 되면 undefined 가 뜸.
(fname == 'apple') ? console.log('🍎') : console.log(fname);
// 이렇게 하면 undefined 안 뜨고 잘 나옴.
let result = (fname == 'apple') ? '🍎' : fname;
console.log('삼항연산자 결과값 : ' , result);
// 33번 처럼 출력하고 싶으면 32번으로 let 지정 후 변수를 출력하면 됨.

console.log();

// 선택한 메뉴를 출력
let menus = ['피자', '핫도그', '커피'];
if (menus[0] == '피자') {
    console.log('🍕');
} else if(menus[1] == '핫도그') {
    console.log('🌭');
} else if(menus[2] == '커피') {
    console.log('☕');
} else {
    console.log('메뉴를 선택해 주세요.');
}
// 이 때는 피자만 나옴. 첫 번째로 true 가 나왔기 때문에 출력하고 종료.

// 입력 받은 숫자가 홀수이면 사과, 짝수이면 오렌지를 출력
let number = undefined;
number = 124;
let end = (number % 2)
if (end == 1) {
    console.log('🍎');
} else {
    console.log('🍊');
}

/* 강사님이 하신 거
if((number % 2) == 1) {}

    만약 if(number%2) {~~} 로 하면 무조건 false 값이 뜸.
    이 이유는 number = 124일 때 number%2 = 0 이므로 0이 출력되고 시스템은 0 을 false 라고 번역.
    조건식의 결과가 0, 1 이면 boolean 타입으로 자동 변환 되기 때문.

if (!(number%2)) 형태로 써도 괜찮음. 
*/
let fresult = undefined;
if (!(number%2)) {
    fresult = '오렌지';
} else {
    fresult = '사과';
}
// console.log('실행결과 : ', fresult); 이거랑 아래랑 똑같이 나옴.
console.log(`실행결과 : ${fresult}`);

console.log();

// 삼항 연산자
(!(number%2)) ? fresult = '오렌지' : fresult = '사과'
console.log('실행결과 2번째 : ', fresult);
// console.log(`실행결과 2번째 : ${fresult}`);


