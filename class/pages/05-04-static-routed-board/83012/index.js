import { useQuery, gql } from '@apollo/client'

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
    const { data } = useQuery(PETCH_BOARD, {
        variables: {number: 83012}
    })

    console.log(data)

    
    return (
        <div>
            {/* 조건부 렌더링: data && Or data?  //데이터가 있을때 뒤에거 보여줘(Optional-chaining)*/}
            {/* 처음에는 데이터가 없는 상태이기 때문에 조건부 렌더링을 사용해야함..? */}
            <div>{data?.fetchBoard.number}번 게시글 이동이 완료</div>
            <div>{data?.fetchBoard.writer}</div>
            <div>{data?.fetchBoard.title}</div>
            <div>{data?.fetchBoard.contents}</div>
        </div>
    )
}