/*
    사원(Employee) 클래스 정의
    - 사원번호(#(private)), 사원명, 나이를 입력받아 객체 생성
*/
class Employee {
    #empno;

    constructor(empno, name, age) {
        this.#empno = empno;
        this.name = name;
        this.age = age;
    }

    // getter / setter 함수 만들어주기.
    getEmpno = () => { return this.#empno; }
    getName = () => { return this.name; }
    getAge = () => { return this.age; }
    setEmpno = (empno) => { this.#empno = empno; }
    setName = (name) => { this.name = name; }
    setAge = (age) => { this.age = age; }

    display = () => {
        console.log(this.#empno, this.name, this.age);
    }
}

let hong = new Employee();  // 여기서 만약에 지정을 안 한다면 아래(외부에서 호출하는 법)처럼 넣을 수 있음.
hong.setEmpno('1234');
hong.setName('홍길동');
hong.setAge(30);
console.log(hong.getEmpno());
console.log(hong.getName());
console.log(hong.getAge());

console.log();

hong.display();

let smith = new Employee('4567', '스미스', 36);
smith.display();

let empList = [];
// empList[0] = hong;  // 얘를 붙이고 아래 출력을 하면 주소가 들어가있으므로 15 ~ 24 줄이 다 나옴. 단, # 붙인 건 안 넘어감.
// empList[1] = smith;
empList.push(hong);
empList.push(smith);
console.log('empList.pop(hong) ::\n',empList.pop(hong));    // ::\n = 줄바꿈
console.log(empList, typeof empList);   // "[] object" 배열이고 객체 타입이다 라는 거.

let empListObj = {};
empListObj['hong'] = hong;
empListObj['smith'] = smith;
console.log(empListObj);
