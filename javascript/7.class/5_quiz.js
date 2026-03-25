/*
    학생(Student) 클래스 정의
    필드 : #이름, #나이, #주소, 이모지
    메소드 : setter/getter, display
*/

let dataList = [
    { name: '홍길동', age: 20, address: '서울시', emoji: '🧑'},
    { name: '김철수', age: 21, address: '부산시', emoji: '🧑'},
    { name: '박영희', age: 22, address: '서울시', emoji: '👩'},
    { name: '박정민', age: 23, address: '인천시', emoji: '🧑'},
    { name: '홍길순', age: 24, address: '서울시', emoji: '👩'},
];

// 학생(Student) 클래스 정의
class Student {
    #name;
    #age;
    #address;
    emoji;

    constructor (name, age, address, emoji) {
        this.#name = name;
        this.#age = age;
        this.#address = address;
        this.emoji = emoji;
    }

    getStuName = () => { return this.#name; }
    getStuAge = () => this.#age;    // 한 줄이니 이렇게 생략해도 됨. 여러 줄이면 반드시 {} 해야 함.
    getStuAddress = () => { return this.#address; }
    getStuEmoji = () => { return this.emoji; }

    setStuName = (name) => this.#name = name;   // 여기도 생략 가능.
    setStuAge = (age) => { this.#age = age; }
    setStuAddress = (address) => { this.#address = address; }
    setStuEmoji = (emoji) => { this.emoji = emoji; }

    display = () => {
        console.log( this.#name, this.#age, this.#address, this.emoji );
    }
}

// 1. 학생 객체 생성
let hong = new Student('홍길동', 20, '서울시', '🧑');   // 하나하나 만들면 불편하기에 배열을 객체 생성하면 편해짐.
hong.display();

// 2. dataList 배열 객체를 이용하여 학생 객체 생성 후 학생리스트(배열)에 저장
const studentList = [];
for(let i=0; i<dataList.length; i++) {
    let obj = dataList[i];
    let student = new Student(obj.name, obj.age, obj.address, obj.emoji);
    studentList.push(student);
}

console.log(studentList);

console.log();

// 3. 학생 리스트 배열의 객체 출력
console.log(`-------- 학생 리스트 --------`);

for(let i=0; i<studentList.length; i++) {
    let student = studentList[i];
    console.log(
        student.getStuName()+'\t',
        student.getStuAge() + '\t',
        student.getStuAddress() + '\t',
        student.getStuEmoji() + '\t',
    );
}
console.log(`-----------------------------`);