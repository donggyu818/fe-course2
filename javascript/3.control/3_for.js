/*
    제어문 : 반복 실행
    - for : 정확한 반복 횟수를 알고 있을 때.
    - while : 몇 번 반복할 진 몰라도 종료 시점을 알고 있는 경우.

    for(1️⃣초기값 ; 2️⃣조건절(true/fulse로 나옴) ; 4️⃣증가값) {
        3️⃣실행문;
    }
    - for 문 실행 순서 : 1 > 2 > 3(true일 경우 실행 됨) > 4 > [2 > 3 > 4 > ...] <- 반복 실행 구간. 조건이 false면 탈출.
    - ❗ 초기값 선언 시 키워드는 반드시 let 으로 정의. (증가값 반영이 안 되기에)

*/
    
   // 1부터 10까지 출력해보기
/*
    1️⃣초기값 : for 블록에서 사용되는 변수
    2️⃣조건절 : 10보다 작거나 같을 때까지 계속 반복, 결과는 true / false 로 체크
    3️⃣실행문 : 2️⃣의 결과가 true 면 실행.
    4️⃣증가값 : 단항 연산자(++) or 대입 연산자(+1) 이용하여 1씩 증가.
*/
for(let i=1 ; i <= 10 ; i++) {
    console.log(`i = ${i}`); // 소괄호 안에 i 로만 줘도 됨.
}

// 숫자 배열을 생성하고 내용을 출력
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]; // 얘의 장점은 배열이 추가되거나 지워져도 for 안의 내용을 바꿀 필요가 없음.
for (let i = 0; i < numbers.length; i++ ) { // 여기의 i는 위에서 지정했으므로 원래 지정하면 에러 나는데, 
                                            //for 문 안의 지정된 i 는 for 문 끝나고 지워지기에 사용 가능함.
    console.log(`numbers[${i}] = ${numbers[i]}`);
}

// 과일이 레몬이면 이모지 출력
let fruits = ['apple', 'orange', 'lemon', 'mango', 'banana'];
let emojis = ['🍎', '🍊', '🍋', '🥭', '🍌']
for (let i = 0; i < fruits.length; i++) {
    if(fruits[i] == 'lemon') {
    console.log(fruits[i], emojis[i]);
    // 1. break; <- 얘 넣으면 lemon 출력 즉시 for 문 종료.
    // 2. i = fruits.length <- 얘 넣어도 for 문 종료. (2️⃣ 조건절이 false가 되기 때문)
    }
}
// 2번 위치에서 lemon 을 출력했어도 for 문은 중지되지 않고 i++ 로 가서 mango로 감. if 에서 false 여서 안 나오는 것 뿐.
// for 문이 조건에 따른 출력 이후 바로 종료되지 않으면 프로세스가 계속 돌아가므로 속도가 느림.