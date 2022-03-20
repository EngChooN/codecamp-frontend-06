import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const PETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number:$number){
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutedPage() {
    const router = useRouter()
    console.log(router)

    const { data } = useQuery(PETCH_BOARD, {
        variables: {number: Number(router.query.number) }
    })

    console.log(data)

    
    return (
        <div>
            {/* 조건부 렌더링: data && Or data?  //데이터가 있을때 뒤에거 보여줘(Optional-chaining)*/}
            {/* 처음에는 데이터가 없는 상태이기 때문에 조건부 렌더링을 사용해야함..? */}
            <div>번호:{data?.fetchBoard.number}번 게시글 이동이 완료</div>
            <div>작성자:{data?.fetchBoard.writer}</div>
            <div>제목:{data?.fetchBoard.title}</div>
            <div>내용:{data?.fetchBoard.contents}</div>
        </div>
    )
}