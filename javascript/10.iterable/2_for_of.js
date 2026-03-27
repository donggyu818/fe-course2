/*

    for(const/let 변수 of 순회객체) { 실행문; }
*/

// 배열의 요소를 치환하는 함수 생성
function replace(array, oldItem, newItem) {
    // array( = fruits)의 복사본을 생성해야 함. Shallow copy 진행.
    let arrayCopy = Array.from(array);

    let idx = 0;
    for(const item of arrayCopy) {
        // 배열객체.splice(item idx, count, newItem)
        if(item === oldItem) {
        arrayCopy.splice(idx, 1, newItem);
        }
        idx++;
    }
    return arrayCopy;
}

// replaceObj
function replaceObj(array, oldItem, newItem) {
    let arrayCopy = Array.from(array);

    let idx = 0;
    for(const item of arrayCopy) {
        if(item.emoji === oldItem) {
        arrayCopy.splice(idx, 1, {name: item.name, emoji:newItem});
        }
        idx++;
    }
    return arrayCopy;
}

// forEach 를 사용
function replace1(array, oldItem, newItem) {
    let arrayCopy = Array.from(array);

    arrayCopy.forEach( (item, idx) => {
        if (item === oldItem) arrayCopy.splice(idx, 1, newItem);
    });
    return arrayCopy;
}

// map - 새로운 배열 객체 반환  **(중요함) - 굉장히 간단해져서 많이 씀.
function replace2(array, oldItem, newItem) {    // 새로운 배열을 만들기에 복사(Shallow copy) X
return array.map(item => (item === oldItem) ? item = newItem : item);
}

let fruits = ['🍊','🍌','🥭','🍎','🍑'];
let fruitsObj = [
    {name: 'orange', emoji: '🍊'},
    {name: 'lemon', emoji: '🍋'}
];
let obj1 = replace(fruits, '🍎', '🍏');         // for..of 사용
let obj1_1 = replace1(fruits, '🍎', '🍏');      // forEach 사용
let obj1_2 = replace2(fruits, '🍎', '🍏');      // map 사용
let obj2 = replaceObj(fruitsObj, '🍋', '🍑');

console.log(fruits);    // 이것만 초록 사과로 바꾸려 했는데 Heap에 저장된 걸 지정해서 복사함. => 주소가 복사된 형태라 원본(fruits)도 바뀌어 버림.
console.log(obj1);      // fruits 의 요소들이 단어형(원시형 데이터 타입)이므로 얕은 복사Shallow copy 해서 별개로 생성하면 됨.

console.log();

console.log(fruitsObj);
console.log(obj2);

console.log();

console.log(obj1_1);
console.log(obj1_2);
