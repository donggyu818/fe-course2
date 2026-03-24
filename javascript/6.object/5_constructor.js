/*
    생성자 함수를 통한 객체 생성
        - 객체의 틀을 이용하여 다수의 객체를 생성하는 함수
    [중요] 틀이 모두 똑같이 있어야 함.
*/

// Object Literal - 객체 만들 때 보통 이렇게 함.
/*
const Fruit = {
    name : '사과',
    emoji : '🍎'
}
*/

// 객체 틀 정의 - 생성자 함수로 생성됨. 대문자로 생성
// 사과, 레몬, 오렌지 => name, color, emoji 가 모두 공통으로 있으면 하나의 틀을 만들 수 있음.
function Fruit(name, color, emoji) {
    // let name : undifinded;    // 생성자 함수에서는 생략 가능
    this.name = name;
    this.color = color;
    this.emoji = emoji;

    this.display = () => {
        console.log(this.name, this.color, this.emoji);
    }
}

let apple = new Fruit('apple', 'Red', '🍎');
let lemon = new Fruit('lemon', 'Yellow', '🍋');
let orange = new Fruit('orange', 'Orange', '🍊');
// console.log(apple);
apple.display();
lemon.display();
orange.display();

// console.log(apple.display()) 는 위에 this.display 에서 console.log 가 있으니 출력할 거 출력한 다음에 여기서 undifinded 가 뜨는 것.

console.log(apple.name, apple.color, apple.emoji);

// 학생 성적 리스트 관리
// 홍길동, 스미스, 이순신, 김유신, 제임스 학생의 성적 관리
// name, kor(국어), eng(영어), math(수학) 의 필드값을 가지는 학생 성적 템플릿 만들기
// display 함수로 전체 데이터 출력

function Score(name, kor, eng, math) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.math = math;

    this.display = () => {
        console.log(this.name, this.kor, this.eng, this.math);
    }

    // 총점 구하고 반환하는 함수
    this.sum = () => { return this.kor + this.eng + this.math}
    this.avg = () => { return parseInt(this.sum()/3);} // 괄호 반드시 들어가야 함. 소숫점이 길기에 parseInt 로 정수형태로 잘라줌.

    // 평균 구하고 반환 함수
}

// 성적리스트 생성 함수
function createScoreList( st1, st2, st3, st4, st5 ) {
    return {st1, st2, st3, st4, st5}
}


let hong = new Score('홍길동', 10, 20, 30); // 여기서 new Score() 가 아니라 Score() 로 주면 Score 내 지역 변수가 전역 변수로 올라감. 오류는 안 나긴 함.
let smith = new Score('스미스', 40, 30, 30);
let lee = new Score('이순신', 70, 20, 30);
let kim = new Score('김유신', 100, 60, 30);
let james = new Score('제임스', 60, 90, 10);

hong.display();
smith.display();
lee.display();
kim.display();
james.display();

// 위의 것들을 한 번에 배열로 정리할 수 있음. 56 ~ 59 도 있어야 함.

console.log();

let scoreList = createScoreList (hong, smith, lee, kim, james);

hong.display();
smith.display();
lee.display();
kim.display();
james.display();
console.log(scoreList);     // display 는 왜 나오는 거? 위의 51줄에서 this.display 한 거 때문에 display: function 이 같이 출력되는 거.

console.log();

// 생성자 함수로 만들면 장점은, 예를 들어 총점, 평균을 구하는 등 요소를 이용하려 할때 편함.
console.log(`${hong.name} 총점/평균 = ${hong.sum()} / ${hong.avg()}`);
console.log(`${smith.name} 총점/평균 = ${smith.sum()} / ${smith.avg()}`);
console.log(`${lee.name} 총점/평균 = ${lee.sum()} / ${lee.avg()}`);
console.log(`${kim.name} 총점/평균 = ${kim.sum()} / ${kim.avg()}`);
console.log(`${james.name} 총점/평균 = ${james.sum()} / ${james.avg()}`);
