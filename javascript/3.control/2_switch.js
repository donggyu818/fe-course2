/*
    제어문 : 조건 분기
    switch(조건절 : 숫자, 문자) {
        case 숫자, 문자 : 
            실행문 ;
        break;
        case 숫자, 문자 :
            실행문 ;
        break;
        ...
        default : 실행문; // 조건절에 해당하는 숫자, 문자가 없는 경우 출력됨.
    }
*/

// 선택한 숫자에 해당하는 요일을 출력
// 0 : 월요일, 1 : 화요일, 2 : 수요일
// let result = undefined;
switch (1) { // 소괄호 안에 1 을 넣어도 If와 달리 제대로 나옴. 얘는 괄호 안이 숫자/글자 로 세팅되어서 그럼.
    case 0:
        console.log('월요일');
        // result = '월요일' 17줄이 활성화 되어있다면 이거 키고 20번 지웠을 때 잘 됨.
        break; // break 의 용도는 switch 밖으로 빠져나오게 만드는 것. break 가 빠졌다면 아래까지 출력됨.

    case 1:
        console.log('화요일');
        break;

    case 2:
        console.log('수요일');
        break;

    default:
        console.log('요일을 선택해 주세요.');
        break;
}
// console.log(`선택한 요일은 ${result} 입니다.`); // result 살리면 이것도 가능.

// 입력받은 숫자가 홀수이면 사과, 짝수이면 오렌지 출력
let sum = 355;
switch (sum%2) { // 소괄호가 숫자, 문자로 되어있기에 true, false로 안 나옴. !(sum%2) 는 0의 반대 란 말이므로 해석 불가.
    case 1:
        console.log('🍎');
        break;

    default:
        console.log('🍊');
        break;
}
