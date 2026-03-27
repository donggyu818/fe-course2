/*
    성적관리 프로그램
*/
function createList() {
    return new Array();
}
function createScore(scoreList, name, kor, eng, math) {
    scoreList.push({name, kor, eng, math});   // name: name 인데 다 생략한 거.
}
function searchName(scoreList, name) {
    return scoreList.find(score => score.name === name);
};
function searchScore(scoreList, subject, score) {
    return scoreList.filter( item => item[subject] >= score );
}
function updateScore(scoreList, subject, score) {
    return scoreList.map( item => (item[subject] >= 95) ? item : {...item, subject:item[subject] + score} );
                            // map 으로 돌린다면 삼합연산자부터 생각. // ... : 펼친다는 얘기.
}

let scoreList = createList();
createScore(scoreList, '홍길동', 100, 60, 30);
createScore(scoreList, '스미스', 20, 100, 50);
createScore(scoreList, '이순신', 90, 100, 80);
createScore(scoreList, '제임스', 20, 0, 100);
// console.log(scoreList);
// console.log(hong);
console.log(scoreList.length);
console.log(scoreList);

console.log();

// 제임스 검색
console.log(searchName(scoreList, '제임스'));

console.log();

// 국어 점수가 90점 이상인 학생 조회
console.log(searchScore(scoreList, 'kor', 90));

console.log();

// 모든 학생의 수학 점수에 5점 추가. (map)
console.log(updateScore(scoreList, 'math', 5));
