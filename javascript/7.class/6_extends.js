/*
    클래스 간의 상속 관계 정리 : extends
    부모가 가지고 있는 필드, 메서드를 자식이 상속받아 사용하도록 정의 (하나만 부모가 가짐.)
*/

// Animal(동물) 클래스를 상속받아, Dog, Tiger, Lion 자식 클래스 생성
// 자식 is a 부모 : 이게 성립되느냐 아니냐에 따라 상속 관계가 됨. => 자식 extends 부모 :: 자식 클래스 정의

//부모 : Animal 클래스 정의
class Animal {
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    display = () => console.log(this.name, this.emoji);
    sleep = () => console.log(`${this.name}(${this.emoji}) 가 잡니다.`);
}

// 부모만 호출
let animal = new Animal('animal', '😀');
console.log(animal);
animal.display();
animal.sleep();

// 자식 : Dog 클래스 정의.
class Dog extends Animal {  // 여기까지 주면 위에 Animal에서 만들었던 constructor, display, sleep 가 포함된 상태임.
    constructor(name, emoji, color) {
        super(name, emoji);    // 부모의 생성자 호출 (constructor 가 호출). 생성된 name, emoji는 부모에서 썼지만 여기에 저장됨.
        this.color = color;
    }
        // 부모 Animal에게 상속받으므로 여기에 display, sleep 함수 주소가 복사되어 객체로 생성된 함수와 연결됨. (함수는 항상 객체로 생성됨)
}

class Poodle extends Dog /*', Animal' 로 해서 여러 부모 동시 상속 X */ {
    constructor(name, emoji, color, food) {
        super(name, emoji, color);  // **생성자 호출은 맨 처음(새로운 생성 전)에, 그리고 단 하나만 나와야 함!!
        this.food = food;
    }
    // display, sleep 함수 주소 참조하기.
    sleep = () => { console.log(`푸들이 자요`);} // ** 부모에도 동일한 함수가 저장되어 있지만, 자식의 함수를 우선 찾아서 출력됨.
}

console.log();

// 자식 호출
let dog = new Dog('happy', '🐶', 'brown');  // 출력해보면 Dog{} 에 들어가 있음. **자식에 정보가 저장된다는 얘기.
console.log(dog);                           // 부모에 있는 함수(display, sleep)도 출력되는데, 함수는 부모와 자식에게 공유되기 때문에 그럼.
dog.display();
dog.sleep();

console.log();

// 자식의 자식 호출.    => 결론: 자식의 자식도 호출이 잘 됨.
let dog2 = new Poodle('해피', '🐾', 'brown', '사료');
console.log(dog2);
dog2.display();
dog2.sleep();