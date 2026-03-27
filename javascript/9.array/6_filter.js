/*
    배열 객체에서 필터링을 진행한 후 Shallow Copy(얕은 복사) 진행 후 리턴
    - 배열객체.filter(callback)
*/
let strList = ['hong', 'smith', 'lee', 'james'];
let fruits = [
    {name: 'apple', emoji: '🍎'},
    {name: 'orange', emoji: '🍊'},
    {name: 'lemon', emoji: '🍋'},
    {name: 'apple', emoji: '🍎'},
    {name: 'lemon', emoji: '🍋'},       // 찾을 게 여러 개 일 때는 filter 사용.
    {name: 'orange', emoji: '🍊'},
    {name: 'lemon', emoji: '🍋'}
];

// 이름이 4자 이상인 사람들만 출력하기
let filterObj = strList.filter( (str) => { return str.length >= 4 } );      // find : 하나만 찾으면 끝 <=> filter : 첨부터 끝까지 스캔 후 찾기
console.log(`filterObj = ${filterObj}`);

// fruits 객체에서 lemon 객체를 출력
let lemons = fruits.filter( (fruit) => { return fruit.name === 'lemon' } );
let lemonsFind = fruits.find( (fruit) => { return fruit.name === 'lemon' } );
console.log(lemons);        // filter는 배열로 출력되기에, 배열 안에 객체 안에 요소가 있음.
console.log(lemonsFind);    // 얜 객체로만 나옴 => lemonsFind.name 으로 작성
console.log(lemons[0].name, lemons[0].emoji);       // lemons의 index=0 번지의 name 을 출력.
console.log(lemonsFind.name , lemonsFind.emoji);
