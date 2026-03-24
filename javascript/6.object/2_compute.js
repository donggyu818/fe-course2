
/*
    모듈 불러오기
*/

// import {함수명} from "모듈 경로.js"
import { setValue, getValue, updateValue, deleteValue } from "../commons/object.js";


const hong = {
    name : '홍길동',
    age : 30
}

const apple = {
    name : 'apple'
}

console.log(hong);
console.log(apple);

console.log();

// 1. property, value 추가하기
setValue(hong, 'address', '서울시 강남구');
setValue(hong, 'job', 'SW 엔지니어');

setValue(apple, 'emoji', '🍎');

console.log(hong);
console.log(apple);

console.log();

// 2. property, value 가져오기
console.log(getValue(hong, 'name'));    // 출력하는 방법 1
let hong_name = getValue(hong, 'name');
console.log(hong_name);                 // 출력하는 방법 2

console.log();

// 3. property 값 업데이트
updateValue(apple, 'emoji', '🍏');
console.log(apple);

console.log();

// 4. property 값 삭제
deleteValue(hong, 'address');
deleteValue(hong, 'job');
deleteValue(apple, 'name');
console.log(hong);
console.log(apple);
