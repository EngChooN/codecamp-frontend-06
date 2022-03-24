//상세보기페이지
import {useRouter} from 'next/router'
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
    const router = useRouter()

    const { data } = useQuery(PETCH_BOARD, {
        variables: {number: Number(router.query.mynumber)}
    })

    console.log(data)

    const onCLickMove = () => {
        router.push(`/09-01-boards/${router.query.mynumber}/edit`)
    }

    
    return (
        <div>
            {/* 조건부 렌더링: data && Or data?  //데이터가 있을때 뒤에거 보여줘(Optional-chaining)*/}
            {/* 처음에는 데이터가 없는 상태이기 때문에 조건부 렌더링을 사용해야함..? */}
            <div>{data?.fetchBoard.number}번 게시글 이동이 완료</div>
            <div>{data?.fetchBoard.writer}</div>
            <div>{data?.fetchBoard.title}</div>
            <div>{data?.fetchBoard.contents}</div>
            <button onClick={onCLickMove}>수정페이지로 이동</button>
        </div>
    )
}