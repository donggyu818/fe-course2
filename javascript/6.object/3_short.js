/*
*/

console.log();

let name = '홍길동';
let age = 30;
let address = '서울시 강남구';

let person = {
    // name : name,
    // age : age
    // 위와 같이 변수를 객체의 값으로 정의하는 경우, 아래처럼 property(key) 생략 가능.
    name, age, address
}

console.log(person);

console.log();

// 두 개의 값(x, y)을 입력받아, 객체로 리턴하는 함수 생성
function createObject(x, y) {
    return { x, y };
}
const createObjectArrow = (x, y) => {
    return { x, y };
}
let number1 = createObject(1, 2);
let number2 = createObjectArrow(1, 2);

console.log(number1);
console.log(number2);

console.log();

// 사원의 이름, 나이, 주소, 소속부서 정보를 입력받아 사원객체를 생성하고 반환하는 함수 정의
// createEmployee, arrow function 사용

const createEmployee = (name, age, address, info) => {
    return { name, age, address, info } // 생략된 것. 원본 : name : name, ...
}

let emp1 = createEmployee('홍길동', 30, '서울시 강남구', '개발부');
// 만약 위에 arrow function 으로 양식을 주지 않았다면 " let emp1 = { name : '홍길동', age : 30, ... }" 로 써야해서 길어짐.
console.log(emp1);
let emp2 = createEmployee('Smith', 35, '부산시 해운대구', '영업부');
console.log(emp2);

console.log();

let empList = [
    ['홍길동', '30', '서울시', '개발부'], // 넘어올 때 문자로 정의되어서 넘어오기에 30을 그냥 문자로 줌.
    ['Smith', '35', '부산시', '영업부'],
    ['이순신', '40', '인천시', 'HR부서']
];

/* 데이터 출력
for (let i=0; i<empList.length; i++) {  // 일렬로 나열
    let rows ='';
    for (let j=0; j<empList[i].length; j++) {   //열은 4열로, 배열 하나의 길이임. => empList[i] 가 됨.
        rows += empList[i][j] + '\t';
    }
    console.log(rows);
}
*/
for (let i=0; i<empList.length; i++) {
    let object = {};
    for (let j=0; j<empList[i].length; j++) {
        if (j==0) object.name = empList[i][j];  // object.name 은 있으면 값을 그냥 가져오지만 없으면 name을 넣어서 가져옴
        else if (j==1) object.age = empList[i][j];
        else if (j==2) object.address = empList[i][j];
        else if (j==3) object.info = empList[i][j];
    }
    console.log(object);
}

console.log();

for (let i=0; i<empList.length; i++) {  // 여기 안에 name 이 아니라 이름이 name2 로 달라도 정상 출력됨. 여기 안의 정의된 값이기 때문.
                                        // 매개변수 <-> 파라미터 인자
    let object = null; // createEmployee 가 여기 없기 때문에 입력받지 못함. => null
    let name, age, address, info = undefined;   // 값이 여기 지역에서 출력되기 때문에 상위 지역 for 문에서 입력받으면 출력 안 됨. 여기에 없는 값 정의하기.
    // let age = undefined;     // 위처럼 한 줄에 다 지정해도 되고 하나하나 지정해도 됨.
    // let address = undefined;
    // let info = undefined;    
    for (let j=0; j<empList[i].length; j++) {
        if (j==0) name = empList[i][j];  // object.name 은 있으면 값을 그냥 가져오지만 없으면 name을 넣어서 가져옴
        if (j==1) age = empList[i][j];
        if (j==2) address = empList[i][j];
        if (j==3) info = empList[i][j];
    }
    object = createEmployee(name, age, address, info);
    console.log(object);
}