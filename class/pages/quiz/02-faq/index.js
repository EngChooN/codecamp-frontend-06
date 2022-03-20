import { useState } from "react"

export default function Qiz2() {
    
    // 2-1 안녕하세요를 반갑습니다로 바꾸기
    const [text, setText] = useState("안녕하세요")

    function onClickText() {
        setText("반갑습니다")
    }

    // 카운터 만들기
    const [count, setCount] = useState(0)

    function onClickCount() {
        setCount(count + 1)
    }

    // 토큰 생성하고 화면에 반영
    const [token, setToken] = useState("000000")

    function onClickToken() {
        setToken(String(Math.round(Math.random()*1000000)).padStart(6,"0"))
    }


    return (
        <>
            <button onClick={onClickText}>{text}</button>
            <div>{count}</div>
            <button onClick={onClickCount}>카운트up</button>
            <div>{token}</div>
            <button onClick={onClickToken}>토큰발급</button>
        </>
    )
}