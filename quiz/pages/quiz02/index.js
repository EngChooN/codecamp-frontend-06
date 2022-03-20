// import "../../styles/quiz02.css" 기존의 css를 적용할 방법을 찾아봐도 잘 모르겠습니다. 태그 하나하나를 변수로 지정해서 emotion 방법 밖에 없는건가요?
import { useState } from 'react'
// import styled from "@emotion/styled" 또한 이모션을 적용해도 에러가 발생합니다
import styled from "@emotion/styled"

export default function SignupPage() {

    const Div = styled.div`
        color: red;
    `

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [password2, setPassword2] = useState("")
    const [passwordError2, setPasswordError2] = useState("")
    let auth = false

    function onChangeEmail(event) {
        // event.target => 태그전체
        // event.target.value => 우리가 입력한 값
        setEmail(event.target.value)
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
    }

    function onChangePassword2(event) {
        setPassword2(event.target.value)
    }

    function onClickSignup() {

        if (email.includes("@") === false) {
            // alert("이메일이 올바르지 않습니다 @가 없음")
            setEmailError("이메일이 올바르지 않습니다 @가 없음")
            auth = false
        } else {
            setEmailError("")
            auth = true
        }

        if (password === "") {
            setPasswordError("비밀번호를 입력해주세요")
            auth = false
        } else {
            setPasswordError("")
            auth = true
        }

        if (password !== password2) {
            setPasswordError2("비밀번호를 똑같이 입력해주세요")
            auth = false
        } else if (password2 === "") {
            setPasswordError2("비밀번호를 입력해주세요")
            auth = false
        } else {
            setPasswordError2("")
            auth = true
        }

        if (auth === true) {
            alert("회원가입 완료!")
        }
    }

    return (
        <>
            <body>
                <div class="wrapper">
                    <h3>코드캠프 회원가입</h3>
                    <input class="inputbox" id="email" type="text" placeholder="이메일을 입력해 주세요." onChange={onChangeEmail}/>
                    <Div class="error" id="error__email">{emailError}</Div>
                    
                    <input class="inputbox" id="password1" type="password" placeholder="비밀번호를 입력해 주세요." onChange={onChangePassword}/>
                    <Div class="error" id="error__password1">{passwordError}</Div>
                    
                    <input class="inputbox" id="password2" type="password" placeholder="비밀번호를 다시 입력해 주세요." onChange={onChangePassword2}/>
                    <Div class="error" id="error__password2">{passwordError2}</Div>
                    
                    {/* <div class="token__wrapper">
                        <div class="token" id="token"></div>
                        <button id="token__button" onclick="getToken()" disabled>인증번호 전송</button>
                    </div> */}
                    <hr />
                    <div class="footer">
                        <button id="signup__button" onClick={onClickSignup}>가입하기</button>
                    </div>
                </div>
            </body>
        </>
    )
}