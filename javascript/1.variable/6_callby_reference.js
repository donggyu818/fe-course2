/* 
    call by reference : 데이터 중복 시 주소 복제
    - 값이 heap에 저장되어 있는 경우
*/

let name1 = '홍길동'; // 이건 문자형이므로 Stack 에 데이터가 들어가지 않고 주소(코드)만 들어감
let name2 = name1;  // call by reference
let name3 = new String('홍길동'); // 위와 값은 똑같지만 new 때문에 위와 다른 새로운 주소(코드)가 만들어짐.
// new 는 무조건 heap 에 들어감.
let name4 = name3;  // call by reference

console.log(name1, typeof name1);
console.log(name2, typeof name2);
console.log(name3, typeof name3);
console.log(name4, typeof name4);

console.log(name1 === name2);
console.log(name1 === name3);
console.log(name3 === name4);

let nlist = [1, 2, 3, 4, 5]; // 배열
let nlist2 = nlist;    // call by reference

let person = {          // 객체
    name : '홍길동',
    age : 30
}
let person2 = person;  // call by reference

console.log(nlist, typeof nlist);
console.log(nlist2, typeof nlist2);
console.log(nlist == nlist2);       // 값만 비교
console.log(nlist === nlist2);      // nlist, nlist2 의 객체주소와 타입 동일여부 비교
console.log(nlist[2] === nlist2[2]); // nlist[2]의 값인 3 과 nlist2[2] 의 타입인 number 까지 비교.
console.log(person, typeof person);
console.log(person2, typeof person2);
console.log(person === person2);
console.log(person.name === person2.name);

// person2 의 name 값을 '이순신'으로 바꾸기
person2.name = '이순신';
console.log(person.name, person2.name); // person2 만 이순신으로 바꿨는데 person 과 person2 둘 다 이순신으로 나옴
/* ❗ person2 의 이름을 이순신으로 바꾼다는 것은 시스템 상으로 person2 의 코드를 가진 내용이 이순신으로 바뀐다는 것.
person 도 person2 와 동일한 코드를 쫒는 것이기 때문에 person 도 이순신으로 출력 됨. */

person2.age = 40;
console.log(person.age, person2.age); 
/* ❗ 숫자형인 age가 stack에 저장되어 person2만 바뀔 것 같지만
person 이 객체이기 때문에 통째로 heap 에 저장되어 있으므로
age도 person 과 person2 가 통째로 바뀜. */

let a = 10;
let b = a;
a = 200;
console.log(a, b); 
/* 의 형태는 위와 달리 단순 숫자형이므로 
Stack 에 저장되기 때문에 a = 200, b = 10 이 출력 됨. */