/*
    2단 ~ 9단 까지 구구단 출력
*/

for (let i = 1; i < 10; i++) {
    let output = '';
    for (let j = 2; j < 10 ; j++) {
        output = output + `${j} ✖ ${i} = ${i*j}\t`; // output = output + `` 은 output += `` 과 같음
    }
    console.log(output);
}

// ?단 ~ ?단 까지 출력

let start = 2;
let end = 10;
for (let i = 1; i < 10; i++) {
    let output = '';
    for (let j = start; j < end ; j++) {
        output = output + `${j} ✖ ${i} = ${i*j}\t`; // output = output + `` 은 output += `` 과 같음
    }
    console.log(output);
}

/*
    삼각형 별찍기
*
**
***
****
*****
이런 모습
*/
for (let i = 1; i < 6; i++) {
    let output = '';
    for (let j=1; j <= i; j++){
        output += `*`;
    }
    console.log(output);
    
}

/*
삼각형으로 초록색 사과 찍기
단, 3번째 줄만 빨간색 사과로 출력.
*/

console.clear();
for (let i = 1; i<6; i++) {
    let output = '';
    for (let j = 1; j <= i ; j++) {
        if (i === 3) {
            output += `🍎`;
        } else {
            output += '🍏';
        }
        
    }
    console.log(output);
    
}

// 위의 삼각형 별 찍기의 중복 for 문을 간단하게 나타내는 방법.
for (let i = 1; i < 6; i++) {
    let output = '';
    // for (let j=1; j <= i; j++){
    //     output += `*`;
    // }
    output += '*'.repeat(i);
    console.log(output);
    
}

/*
    정삼각형 별 찍기 - repeat(반복횟수) 이용
*/

console.clear;
for (let i = 1; i <= 10; i++) {
    let output = '';
    let space = '';
    space += ' '.repeat(10-i);
    output += 'a'.repeat(i);
    console.log(space, output);
    
}

// 정삼각형
console.clear;
let size = 5;
for (let i = 1; i <= size; i++) {
    let output = '';
    let space = '';
    space += ' '.repeat(size-i);
    output += '🍎'.repeat(i);
    console.log(space, output);
    
}
// 역삼각형
console.clear;
for (let i = size-1; i >= 1; i--) {
    let output = '';
    let space = '';
    space += ' '.repeat(size-i);
    output += '🍎'.repeat(i);
    console.log(space, output);
    
}