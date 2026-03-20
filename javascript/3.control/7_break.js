/*
    반복문을 강제 종료하는 방법
    1. break : break 를 만나면 바로 종료
    2. 조건식 : 조건이 false 가 되게 만듦, break 보다 한 번 더 조건을 체크하게 됨. (비교적 지연됨)
*/

// 1~10 까지 반복, i = 7 이면 종료

for (let i=1; i<=10; i++) {
    console.log(`i = ${i}`);
    if (i===7) { // 이 중괄호는 지금처럼 결과 하나만 줄 때 생략 가능함.
        break;  // break 를 만나면 for 문이 바로 종료되므로, if 문이 console 뒤로 가야 7까지 출력됨.
    }
    

console.log();
// i = 7 이면 종료 - 조건식을 false 로 만들기
}
for (let i=1; i<=10; i++) {
    console.log(`i = ${i}`);
    if(i===7) i=11;
}