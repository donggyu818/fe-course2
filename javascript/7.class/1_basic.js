/*
    class(클래스) : 객체를 생성하기 위한 설계도(틀). 생성자 함수(6-5)랑 유사한 방향.
    - 생성자 함수와의 차이점을 알고, 객체지향(html5) 언어의 클래스와는 다름을 이해해야 함.
    - 자바스크립트에서 실행 시 내부적으로 프로토타입 기반의 형식으로 실행됨.
    - new 키워드를 사용하여 객체를 생성. new 없으면 실행 불가.

    형식
    class 클래스명 {
        필드명(Field)
        생성자(Constructor)
        메소드(Method)
    } (<< 순서는 지키는 게 좋음)

*/


class Animal {
    // name = undefined;   //  1. 선언 (생략 가능.)
    // Field - 변수, 상수 => static으로 정의. 클래스 변수, 상수로 부름.
    static MAX_SIZE = 10;   // 상수는 대문자로 하므로 원래대로라면 상수이지만, 얜 다름.
                            // static 으로 정의된 변수(소문자), 상수(대문자)는 객체 생성 전 메모리에 저장. 따라서 아래 console 했을 때 잘 나옴.
                            // stack frame 에 저장. Heap 이 아님.
    static classname = 'Animal';

    // let name;    // 원래 아래 name, emoji, 등을 언급할 때 let 을 통해 지정해줘야 하는데 여긴 안 함.
                    // 대신 아래에서 this.name 으로 함.

    // Constructor - 객체 생성 시 호출, new 로 호출하기 위한 것.
    constructor(name, emoji) {
        this.name = name;   // 2 호출
        this.emoji = emoji;
    }
    // Method - 기능, 동작을 함수로 정의
    display = () => {    // 여기에 static 을 붙이면 display 자체는 stack 에 저장되지만, 뒤의 함수 {} 부분은 Heap 에 저장.
        console.log(this.name, this.emoji);
    }
}

console.log(`Animal.MAX_SIZE = ${Animal.MAX_SIZE}`);
console.log(`Class명 = ${Animal.classname}`);


let dog = new Animal('happy','🐶');
console.log(dog);       // ** 여기서 static 으로 생성된 친구들은 출력되지 않음. => Heap 에 저장되어있지 않기 때문에 객체를 통해 Heap 에서 못 가져오는 것. => stack 에 저장.
console.log(dog.name);
console.log(typeof dog);    // 객체 타입으로 생성됨.
dog.display();   // static 으로 지정된 게 아니므로 객체에 있음. Animal 에서 불러옴 > Animal 은 dog 로
// Animal.display();   // 출력 안 됨. display 부분의 말 처럼 {} 부분이 Heap 에 저장되고 여기에는 저장된 name, emoji 가 없기 때문에 나오지 않음.
                    // 반면, dog.display(); 는 new Animal 로 지칭되고 정보가 들어있음. 이러면 나옴.

