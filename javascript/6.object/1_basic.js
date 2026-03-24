/*
    object : 
        양식 : {}, 다양한 데이터 타입을 저장
        object literal, { property(key) : value } value 에 원시형 / 객체형 다 들어갈 수 있음.
        JSON(JavaScript Object Notation) 에서는 property(key)를 반드시 문자열로 정의
*/

// 학생의 성적을 관리하는 객체 생성, Object Literal
const hong = {
    name : '홍길동',
    age : 30
}
// hong = { // 재할당은 불가하지만 요소를 바꿀 순 있음.
//     name : '이순신'
// }

console.log(hong);
console.log(hong.name);
console.log(hong.age);

// 1. 프로퍼티를 통한 값 수정
hong.name = '홍길순';
hong.age = 25;
console.log(hong);
console.log(`hong=${hong}`); // 객체의 요소를 출력하는 것이 아닌, 객체의 값만 갖고오므로, type 만 출력하는 것.
// console.log(hong[name]);    // 오류.

console.log();

// 2. 프로퍼티를 통한 값 삭제
delete hong.name;
console.log(hong);



