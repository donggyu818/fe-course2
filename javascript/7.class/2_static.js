/*
    static 상수, 메소드 정의 - 클래스 상수, 클래스 메소드
    static 키워드가 붙은 상수, 메소드
    - 호출 시, 클래스명.상수, 클래스명.메소드
    ** static 이 붙은 상수, 메소드는 stack 의 static 메모리 영역에 별도로 저장되므로, 객체 생성 전 호출이 가능.

*/

class Fruit {
    // Field
    static MAX_SIZE = 10;
    // name, color, emoji; // 미리 지정을 할 때 컴마로 여러 개 지정할 수 없음 (코드 상 에러)
    // name;   // 정의만 하는 거. 값이 들어가지 않음. (생략 가능)
    // color;
    // emoji;

    // Constructor
    constructor(a, b, c) // 여기의 a, b, c 는 constructor 지역이 끝나면 사라짐. Method에서 못 씀. 여기서 쓰기 위해 전역인 위에 name, ... 와 여기 지역에 this.name 로 지정해두는 것.
    {
        this.name = a;
        this.color = b;
        this.emoji = c;
    }

    // Method
    static getName = () => { return this.name; }    // static 이 붙어있으므로 class 로 호출
    getName = () => { return this.name; }

    static create(name, color, emoji) {
        return new Fruit(name, color, emoji);
    }
    
}

let apple = new Fruit( 'apple', 'red', '🍎');
console.log(apple);
console.log(Fruit.getName());   // Fruit 출력
console.log(apple.getName());   // apple 출력

// create 함수로 lemon 생성
let lemon = Fruit.create('lemon', 'yellow', '🍋');
console.log(lemon);

