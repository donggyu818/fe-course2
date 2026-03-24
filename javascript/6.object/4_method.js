/*
    객체를 생성하는 함수 : 생성자 함수(Constructor Function)
    객체의 메소드 정의 : 객체 안에 함수형식으로 정의
*/

const fruit = {
    // 이렇게 프로퍼티 형식으로 정의한 것을 Field 라고 부름.
    name : 'apple',
    emoji : '🍎',

    // Method. 기능처럼 호출해서 사용하는 거. getName 실행하면 뒤에가 실행.
    getName : function() { return this.name; },   // this 가 없으면 찾기가 힘드므로, 여기서만 찾아라 하고 this 주는 거.
    getEmoji : function () { return this.emoji; },
        // function 의 이름이 없으므로 다른데서는 안 쓰이고 여기서만 쓰이고 종료.
    display : function() { console.log(this.name, this.emoji); },
    // 별도로 객체 생성하고 불러오면 this 사용할 수 없음. 현재 객체에서만 사용되는 self object 키워드이기 때문.
    // this.name 은 프로퍼티로 정의 안 됨.
    // display : function() { return {this.name, this.emoji}}
    display2 : function() { return {name : this.name, emoji: this.emoji}}   // 이건 가능.
}
console.log(fruit);
console.log(fruit.name);    // 이 방식으로 하면 Heap 에 직접 들어가서 찾는 것이므로, 보안 상 위험함. Method 를 쓰는 게 좋음.
console.log(fruit.getName); // 주소값이 출력되고 값은 출력 안 됨.
console.log(fruit.getName());   // 값 출력
console.log(fruit.getEmoji());  // 값 출력
console.log(fruit.display());
console.log(fruit.display2());

