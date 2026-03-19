/*
    const : 상수 선언 시 사용
    - 정의된 상수에 데이터 재할당 불가
*/

const name = '홍길동'; // name 변수 선언 및 '홍길동'을 값으로 할당.
//name = '이순신';  TypeError: Assignment to constant variable. 라고 뜸
console.log(name); 
// const 는 데이터 재할당이 불가하기 때문에 이순신으로 바꾼다고 했을때 에러남

let name2 = '홍길동';
name2 = '이순신'; // let 은 데이터 재할당이 가능하기 때문에 바뀌게 됨.
console.log(name2);