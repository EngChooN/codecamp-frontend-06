import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import {useRouter} from 'next/router'
import { useQuery, gql } from '@apollo/client'

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){
            _id
            writer
            title
            contents
            createdAt
            likeCount
            dislikeCount
        }
    }
`

export default function BoardsNewPage() {
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId
        }
    })
    return (
        <BoardWrite
            isEdit={true}
            data={data}
        />
    )
}