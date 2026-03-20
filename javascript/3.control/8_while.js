/*
    while : 반복문 중 하나. 종료되는 조건을 알고 있는 경우 for 보단 이게 좋음.

    초기값      * for 와 달리 초기값을 밖에 씀
    while(조건식) {
        실행문;
        증가값;
    }
*/

// 1 ~ 10 까지 출력
// 7 까지 출력 후 종료
let i = 1;
while(i<=10) {
    console.log(`i = ${i}`);
    if (i === 7) break;
    i++;
}

// 메뉴 선택
// 메뉴 1 : 피자, 메뉴 2 : 핫도그, 메뉴 3 : 햄버거
let flag = true;
let menu = 1;
while (flag) {
    console.log(`메뉴 1 : 피자, 메뉴 2 : 핫도그, 메뉴 3 : 햄버거`);
    if (menu === 1) {
        console.log(`🍕`);
        flag = false;
    } else if (menu === 2) {
        console.log(`🌭`);
        flag = false;
    } else if (menu === 3) {
        console.log(`🍔`);
        flag = false;
    } else {
        console.log('메뉴 준비중입니다.');
        flag = false; // 원랜 위로 다시 가야하기에 없어야 하는 게 맞으나, 실제 시스템으로 설계할 때는 얘가 없고 html 등지에서 다른 창으로 이동 등으로 멈춰야 함.
    }
    
}