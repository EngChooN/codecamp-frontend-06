import { useRouter } from 'next/router'

export default function StaticRoutingPage() {
    const router = useRouter()

    const onCLickMove1 = () => {
        router.push("/05-04-static-routed-board/83011")
    }
    const onCLickMove2 = () => {
        router.push("/05-04-static-routed-board/83012")
    }
    const onCLickMove3 = () => {
        router.push("/05-04-static-routed-board/83013")
    }

    return (
        <div>
            <button onClick={onCLickMove1}>83011게시물 이동하기</button>
            <button onClick={onCLickMove2}>83012게시물 이동하기</button>
            <button onClick={onCLickMove3}>83013게시물 이동하기</button>
        </div>
            
    )
}