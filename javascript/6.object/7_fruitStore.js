/*

*/

import { getObjects, setObject, Fruit, deleteObject} from "../commons/object.js";

// 1. 스토어 생성
let store = getObjects();

// 2. 과일 생성
let apple = new Fruit('apple', '🍎');
let lemon = new Fruit('lemon', '🍋');

// 3. store 등록
setObject('apple', apple);
setObject('lemon', lemon);

// 4. store 삭제
deleteObject('apple');
deleteObject('lemon');





console.log(store);
