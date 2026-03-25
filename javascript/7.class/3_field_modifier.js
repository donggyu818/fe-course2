/*
    클래스의 필드에 선언되는 변수, 상수에 대한 접근 제한자
    변수, 상수 앞에 #을 붙이면 private 이 됨. 이는 클래스 내에서만 접근 가능하고 외부에서 접근 불가. #을 붙이려면 꼭 정의해야 함.
    #이 붙지 않으면 public. 클래스 내부 접근, 외부 접근 다 가능.
*/

class Person {
    #empno;
    name;
    age;

    constructor(empno, name, age) {
        this.#empno = empno;    // 앞의 empno 는 Person 전역 내 정의된 empno. 뒤의 empno 는 위치 상 입력될 값.
        this.name = name;
        this.age = age;
    }

    display = () => {
        console.log(this.#empno, this.name, this.age);
    }
    setEmpNo = (empno) => {
        this.#empno = empno;
    }
    getEmpNo = () => {
        return this.#empno;
    }
}

let hong = new Person('1234', '홍길동', 30);
hong.display();
console.log(hong.name);
console.log(hong.age);
console.log(hong.empno);    // 에러는 X. 접근은 되지만 값은 주지 않아 undefined 가 뜸.
hong.empno = '4567';        // 외부에서 접근이 불가하기 때문에 값이 바뀌지 않고 '1234' 로 뜸

hong.display();

console.log('--- empno 변경 ---');
hong.setEmpNo('4567');
console.log(hong.getEmpNo());

