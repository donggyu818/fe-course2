/*
    로그인 처리
*/

class User {
    #id;
    #pwd;

    constructor(id, password) {
        this.#id = id;
        this.#pwd = password;
    }

    getId = () => { this.#id; }
    getPassword = () => { this.#pwd; }

    setId = (id) => { this.#id = id; }
    setPassword = (password) => { this.#pwd = password; }
}

function loginCheck() {
    // id, pwd 값 가져오기
    let id = document.querySelector('#id').value;       // queryselector 는 안 외워도 됨. 어차피 다른 방식 씀.
    let password = document.querySelector('#pwd').value;    // value 되기 전에는 input 주소만 가져오게 됨.
    // console.log(id, password);

    // 유효성 체크(Validation Check) : 만약 입력하지 않은 정보를 보내게 되면 서버는 괜한 일을 하게 됨. 그래서 입력유무만 보고 아니면 보내지 않게 하기.
    if(id === '') {
        alert('아이디를 입력해주세요');
        document.querySelector('#id').focus();
    } else if (password === '') {
        alert('비밀번호를 입력해주세요');
        document.querySelector('#pwd').focus();
    } else {
        // User 클래스 생성
        let user = new User(id, password);  // 하나로 담아 통째로 넘기기 위한 생성.
        let userObj = { id, password };     // 객체 형식으로 출력하기 위한 객체 지정
        console.log(user);
        console.log(userObj);

        // 서버에 user 전송하고 끝 이지만 서버가 없으니 안 만든 거.

        
        // 비교 => did = test, dpass = 1234     DB 에 가져온 값과 비교. 하지만 현재 서버가 없으니 비교만.
        if(user.getId === 'test' && user.getPassword === '1234') {
            alert('로그인 성공!!');
        } else {
            alert('아이디 혹은 패스워드가 일치하지 않습니다.');
        }
    }


}
// 지금은 ID, PW 각각 가져오는데 Class 로 묶으면 한 번에 모든 데이터를 가져올 수 있음. 이게 관리 면에서 편함.