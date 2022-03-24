import BoardDetailUI from "./BoardDetail.presenter";
import { useQuery, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { FETCH_BOARD, DELETE_BOARD } from './BoardDetail.queries'


export default function BoardDetail() {
  const router = useRouter()
  // const [ deleteBoard ] = useMutation(deleteBoard)
  const { data } = useQuery(FETCH_BOARD, {
      variables: {
          boardId: router.query.boardId
      }
  })
  
  const onClickMoveBoardList = () => {
    router.push("/boards")
  }

  const onClickMoveBoardEdit = () => {
    router.push("/boards/" + router.query.boardId + "/edit")
  }

  const onClickMoveBoardDelete = () => {
    alert("삭제성공!")

    DELETE_BOARD({
      variables: {
        boardId: router.query.boardId
      }
    })
    
    router.push("/boards")
  }


  return (
    <BoardDetailUI
      data={data}
      onClickMoveBoardList={onClickMoveBoardList}
      onClickMoveBoardEdit={onClickMoveBoardEdit}
      onClickMoveBoardDelete={onClickMoveBoardDelete}
    />
  )
}
