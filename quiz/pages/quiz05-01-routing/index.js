import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import {useState} from 'react'

const createBoard = gql`
#     mutation{
#         createBoard(writer: String, title: String, contents: String){
#             _id
#             number
#             message
#         }
#     }
# 플레이 그라운드에서 createBoard를 해보고 그대로 복붙했는데, 뮤테이션 이렇게 쓰는게 아닌건가요??

    mutation createBoard($writer: String, $title: String, $contents: String){
        # 이 주석의 위의 코드와 아래 코드의 차이점을 모르겠습니다. 왜 이렇게 쓰는 건가요??
        createBoard(writer: $writer, title: $title, contents: $contents)
        {
            _id
            number
        }
    }


`
export default function BoardRoutingPage() {
    const router = useRouter()
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [api] = useMutation(createBoard)
    
    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
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
        <div>
            글쓴이:<input type="text" onChange={onChangeWriter}/>
            제목:<input type="text" onChange={onChangeTitle}/>
            내용:<input type="text" onChange={onChangeContents}/>
            <button onClick={createBoardApi}>글쓰기</button>
        </div>
    )
}
