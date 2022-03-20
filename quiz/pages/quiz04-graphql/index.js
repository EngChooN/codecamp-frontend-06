import { useMutation, gql } from '@apollo/client'
import {useState} from 'react'

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents)
        {
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage() {
    const [data, setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)

    const callGraphqlApi = async() => {

        const result = await callApi({
            variables: { writer: "철수", title: "제목", contents: "내용"}
        }) // graphql 방식
        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.message)
    }



    return (
        <div>
            <div>{data}</div>
            <button onClick={callGraphqlApi}>graphql</button>
        </div>
    )
}