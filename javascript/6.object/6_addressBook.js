/*

*/

// import { getObjects, createObject, deleteObject, getObject, setValue, getValue, updateValue, deleteValue  } from "../commons/object.js";
// 위처럼 너무 길면 아래도 됨. 편한 건 위에를 추천.
import * as object from "../commons/object.js";

// 회원 주소록 생성
// 홍길동, 스미스, 이순신, 김유신, 제임스
let addressBook = object.getObjects();     // object 주소 공유     // let addressBook = {} 이거면 완전 별개의 object 가 만들어지는 것.

// 1. 객체 생성
object.createObject('hong');

// 2. hong 주소 가져오기
let hong = object.getObject('hong');

// 3. name, age, address 추가
object.setValue(hong,  'name', '홍길동');
object.setValue(hong,  'age', '30');
object.setValue(hong,  'address', '서울시');

// 4. name, age, address 출력
console.log(object.getValue(hong,'name'));
console.log(object.getValue(hong,'age'));
console.log(object.getValue(hong,'address'));

// 5. 주소를 '부산시' 로 업데이트
object.updateValue(hong, 'address', '부산시');

// 6. 주소를 삭제하기.
object.deleteValue(hong, 'address');

// 7. 객체를 삭제하기.
object.deleteObject('hong');


console.log(object.addressBook);