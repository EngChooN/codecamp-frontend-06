import { useQuery, gql, useMutation } from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            _id
            writer
            title
            createdAt
        }
    }
`

const Warapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 1200px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
`

const BoardsRow = styled.div`
    display: flex;
    flex-direction: row;
    border-top: 1px solid #BDBDBD;

    font-weight: 400;
    font-size: 16px;
    line-height: 24px;


    /* Gray 2 */
    color: #4F4F4F;
`

const BoardsColumn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 25%;

    font-weight: 400;
    font-size: 16px;
    line-height: 24px;


    /* Gray 2 */
    color: #4F4F4F;
`

const BoardsRow_P = styled.div`
    display: flex;
    flex-direction: row;
    border-top: 1px solid #BDBDBD;

    font-weight: 500;
    font-size: 18px;
    line-height: 27px;

    /* Black */
    color: #000000;

`

const BoardsColumn_P = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 25%;

    font-weight: 500;
    font-size: 18px;
    line-height: 27px;

    /* Black */
    color: #000000;

`

export default function BoardListPage() {
    const {data} = useQuery(FETCH_BOARDS)

    return (
        <Warapper>
            <BoardsRow_P>
                <BoardsColumn_P>번호</BoardsColumn_P>
                <BoardsColumn_P>제목</BoardsColumn_P>
                <BoardsColumn_P>작성자</BoardsColumn_P>
                <BoardsColumn_P>날짜</BoardsColumn_P>
            </BoardsRow_P>
            {data?.fetchBoards.map((el) => (
                <BoardsRow>
                    <BoardsColumn>0</BoardsColumn>
                    {/* 번호를 어떻게 줘야하는지 모르겠습니다 */}
                    <BoardsColumn>{el.title}</BoardsColumn>
                    <BoardsColumn>{el.writer}</BoardsColumn>
                    <BoardsColumn>{el.createdAt}</BoardsColumn>
                </BoardsRow>
            ))}
        </Warapper>
    )
}