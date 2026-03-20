/*
    block 단위로 실행되는 lexical environment

*/
{
    let a = 10;     // 전역 변수
    console.log(a);
    {
        let a = 20; // 지역 변수
        console.log(a);
        {
            let a = 30; // 지역 변수
            console.log(a);

        }   // 지역 스코프 : Local block scope

    }       // 지역 스코프 : Local block scope
    
}           // 전역 스코프 : Global block scope



{
    let a = 10;     // 전역 변수
    console.log(a);         // 여기서 b와 c 는 불러오지 못함.
    {
        let b = 20; // 지역 변수
        console.log(a, b);  // 전역/지역 변수 안의 지역 변수에서 하위 변수 불러오기 가능.
        {
            let c = 30; // 지역 변수
            console.log(a, b, c);
        }   // 지역 스코프 : Local block scope
    }       // 지역 스코프 : Local block scope
}           // 전역 스코프 : Global block scope