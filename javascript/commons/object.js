/*
    객체 생성 모듈
*/

let objects = {};

export function getObjects() {      // 전체 리스트
    return objects;
}

export function createObject(objectName) {  // 객체 생성
    return objects[objectName] = {};     // 위에 objects 가 비어있으면 생성되고 빈 게 넘어감 예_hong: {}
};

export function deleteObject(objectName) {  // 객체 삭제
    delete objects[objectName];
}

export function getObject(objectName) {
    return objects[objectName];
}

export function setObject(key, value) {
    objects[key] = value;
}

/*
    객체 CRUD 관리 '모듈'
*/

/*
    1. 객체에 값을 추가하는 함수 정의, 모든 객체에서 사용할 수 있도록 일반화 시킴.
    C(create). 값이 없었다가 추가되었다고 해서 C 라고 부름.
    아래에 값 추가, 가져오기 등을 하기 전에 함수 선언을 해줘야 출력이 됨.
*/

// function setValue(객체명, 키값, 값) {}
export function setValue(object, key, value) {
    object[key] = value;
}

/*
    2. 객체 값 출력
    R(Read)
*/
// export function getValue(object, key) {
//     console.log(object[key]);
// }
/*
    2. 객체 값 반환
*/
export function getValue(object, key) {    // return 하면 값이 부여는 되어있으나 출력은 되지 않는 상태.
    return object[key];
}

/*
    3. 객체 값 업데이트
    U(update)
*/

export function updateValue(object, key, newValue) {
    object[key] = newValue;
}

/*
    4. 객체 값 삭제
    D(delete)
*/
export function deleteValue(object, deleteKey) {
    delete object[deleteKey];
}

/*
    생성자 함수를 이용한 객체 CRUD
*/
export function Fruit(name, emoji) {
    this.name = name;
    this.emoji = emoji;

    this.display = () => {
        console.log(this.name, this.emoji);
    }
}