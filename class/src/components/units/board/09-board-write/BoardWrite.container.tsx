//컨테이너컴포넌트

import { useMutation} from '@apollo/client'
import {useState,ChangeEvent} from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import {useRouter} from 'next/router'
import { IBoardWriteProps, IMyVariables } from './BoardWrite.types'


export default function BoardWrite(props: IBoardWriteProps) {
    const [isActive, setIsActive] = useState(false)
    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")
    const router = useRouter()
    
    const [data, setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)
    
    const onCLickUpdate = async () => {
        
        const myVariables: IMyVariables = { number: Number(router.query.mynumber) }
        
        if (myWriter !== "") myVariables.writer = myWriter
        if (myTitle !== "") myVariables.title = myTitle
        if (myContents !== "") myVariables.contents = myContents

        const result = await updateBoard({
            variables: myVariables
        })
        alert("게시글수정성공!")
        router.push(`/09-01-boards/${router.query.mynumber}`)
    }

    const callGraphqlApi = async() => {
        // const result = await axios.get("https://koreanjson.com/posts/1") rest 방식
        const result = await callApi({
            variables: { writer: myWriter, title: myTitle, contents: myContents}
        }) // graphql 방식
        // console.log(result)
        // console.log(result.data.createBoard.message)
        // setData(result.data.createBoard.message)

        alert("게시글등록성공!")
        router.push(`/09-01-boards/${result.data.createBoard.number}`)
    }
    
    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setMyWriter(event.target.value) 

        if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    
    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setMyTitle(event.target.value)

        if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    
    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
        setMyContents(event.target.value)

        if (myWriter !== "" && myTitle !== "" && event.target.value !== "") {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    return (
        <BoardWriteUI
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            callGraphqlApi={callGraphqlApi}
            onCLickUpdate={onCLickUpdate}
            isActive={isActive}
            isEdit={props.isEdit}
            data={props.data}
        />
    )
}