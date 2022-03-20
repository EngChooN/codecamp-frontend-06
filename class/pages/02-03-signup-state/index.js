import { useState } from 'react'
import styled from "@emotion/styled"

export default function SignupStatePage() {

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
        <div>
            이메일: <input type="text" onChange={onChangeEmail} />
            <Div>{emailError}</Div>
            비밀번호: <input type="password" onChange={onChangePassword} />
            <Div>{passwordError}</Div>
            비밀번호 확인: <input type="password" onChange={onChangePassword2} />
            <Div>{passwordError2}</Div>
            <button onClick = {onClickSignup}>회원가입</button>
        </div>    
    )
}