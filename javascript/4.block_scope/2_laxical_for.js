/*
    

*/

// 1 ~ 5 까지 출력
for(let i=1; i<6; i++) {
    console.log(i);     // 여기에서 j를 출력하고자 하면 에러가 발생함.
                        // j 는 상위 지역에 위치하기에 하위만 찾는 지역 특성 상 j를 찾지 못해서 에러 뜨는 것.
    for (let j = 10; j<60; j+=10){
        console.log(i); 
    }
    
}       // i 는 지역 변수이므로, 여기서 지역이 끝났으니 i 는 사라짐. 그래서 아래에서 i를 배정할 수 있는 것.

// fruits 배열 요소 출력
let fruits = ['🍇','🍈','🍉','🍊','🍋','🍌']
for(let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
    
}

console.log();
