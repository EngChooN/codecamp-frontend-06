import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import {
    Waraper,
    Header,
    Writer_left,
    Writer_img,
    Writer_info,
    Writer_name,
    Writer_createdAt,
    Writer_right,
    Writer_icon,
    Contents_box,
    Contents_title,
    Contents_main,
    Contents_img,
    Contents_cnt,
    Ect,
    Ect_ect,
    Like_waraper,
    Like,
    Dislike,
    Like_icon,
    Like_span,
    Dislike_icon,
    Dislike_span,
    Footer,
    Footer_btn
} from '../../../styles/boardId.js'
// import { Contents } from '../../../styles/emotion.js'

const fetchBoard = gql`
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

export default function boardIdPage() {
    const router = useRouter()
    const { data } = useQuery(fetchBoard, {
        variables: {
            boardId: router.query.boardId
        }
    })

    console.log(data)


    return (
        <>
            <Waraper>
                <Header>
                        <Writer_left>
                            <Writer_img></Writer_img>
                            <Writer_info>
                            <Writer_name>{data?.fetchBoard.writer}</Writer_name>
                                <Writer_createdAt>Date:{data?.fetchBoard.createdAt}</Writer_createdAt>
                            </Writer_info>
                        </Writer_left>
                        <Writer_right>
                            <Writer_icon>i_1</Writer_icon>
                            <Writer_icon>i_2</Writer_icon>
                        </Writer_right>
                </Header>
                <Contents_box>
                    <Contents_title>{data?.fetchBoard.title} [포트폴리오용]</Contents_title>
                    <Contents_main>
                        <Contents_img></Contents_img>
                        <Contents_cnt>{data?.fetchBoard.contents}</Contents_cnt>
                    </Contents_main>
                </Contents_box>
                <Ect>
                    <Ect_ect></Ect_ect>
                </Ect>
                <Like_waraper>
                    <Like>
                        <Like_icon></Like_icon>
                        <Like_span>{data?.fetchBoard.likeCount}</Like_span>
                    </Like>
                    <Dislike>
                        <Dislike_icon></Dislike_icon>
                        <Dislike_span>{data?.fetchBoard.dislikeCount}</Dislike_span>
                    </Dislike>
                </Like_waraper>
            </Waraper>
            <Footer>
                <Footer_btn>목록으로</Footer_btn>
                <Footer_btn>수정하기</Footer_btn>
                <Footer_btn>삭제하기</Footer_btn>
            </Footer>
        </>
    )
}