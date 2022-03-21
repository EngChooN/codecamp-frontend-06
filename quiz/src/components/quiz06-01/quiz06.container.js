import { useRouter } from 'next/router'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import Quiz06Presenter from './quiz06.presenter'
import { createBoard } from './quiz06.queries'

export default function Quiz06Container() {
    const [isVal, setIsVal] = useState(true)
    const router = useRouter()
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [api] = useMutation(createBoard)
    
    const onChangeWriter = (event) => {
        setWriter(event.target.value)
        if (event.target.value !== "" && title !== "" && contents !== "") {
            setIsVal(false) 
        } else {
            setIsVal(true) 
        }
    } 

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        if (writer !== "" && event.target.value !== "" && contents !== "") {
            setIsVal(false) 
        } else {
            setIsVal(true) 
        }
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
        if (writer !== "" && title !== "" && event.target.value !== "") {
            setIsVal(false) 
        } else {
            setIsVal(true) 
        }
    }

    const createBoardApi = async () => {
        try {
            const result = await api({
                variables: {
                    writer: writer,
                    title: title,
                    contents: contents
                }
            })
            router.push("quiz05-02-routed/" + result.data.createBoard.number)   
            console.log(result.data.createBoard.number)
        } catch (error) {
            console.log(error)
            alert(error)
        }
        
    } 


    return (
        <Quiz06Presenter
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            createBoardApi={createBoardApi}
            isVal={isVal}
        />
    )
}    
