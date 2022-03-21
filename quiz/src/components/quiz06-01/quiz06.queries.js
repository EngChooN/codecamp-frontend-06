import { gql } from '@apollo/client'

export const createBoard = gql`
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