import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { fetchBoard } from './quiz06.queries'
import Quiz06Presenter from './quiz06.presenter'


export default function Quiz06Container() {
            const router = useRouter()
            const { data } = useQuery(fetchBoard, {
                variables: { number: Number(router.query.number) }
            })
        
            console.log(router.query.number)
        
            // 뮤테이션 경우의 위의 query처럼
            // const [api] = useMutation(createBoard{
            //     variables: {
            //                 writer: writer,
            //                 title: title,
            //                 contents: contents
            //             }
            // })
            // 이렇게는 못쓰는건가요?? 문법이 비슷하면서도 달라서 헷갈리네요
        
            
        
            // 원래는 폴더명이 [Boards]였는데 [number]로 바꾸니까 실행되는것을 알게되었습니다. 폴더명과 어느 부분을 맞춰줘야 한다고는 기억하지만,
            // 게시글의 번호로 찾는다고 생각하고 코딩을 하다보니, 그 부분이 어딘지를 모르게 되었습니다.

    return (
        <Quiz06Presenter
            data={data}
        />
    )
}