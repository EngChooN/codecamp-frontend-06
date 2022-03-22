import { useQuery, gql, useMutation } from '@apollo/client'
import styled from '@emotion/styled'

const PETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            number
            writer
            title
            contents
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($number:Int){
        deleteBoard(number: $number){
            message
        }
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
`

const Column = styled.div`
    width: 25%;
`

export default function StaticRoutedPage() {
    const { data } = useQuery(PETCH_BOARDS)
    const [deleteBoard] = useMutation(DELETE_BOARD)

    const onCLickDelete = (event) => {
        deleteBoard({
            variables: {
                number: Number(event.target.id)
            },
            refetchQueries: [{query: PETCH_BOARDS}]
        })
    }

    console.log(data)

    
    return (
        <div>
            {data?.fetchBoards.map((el) => (
                <Row key={el.number}>
                    <Column><input type="checkbox" /></Column>
                    <Column>{el.number}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                    <Column>
                        <button id={el.number} onClick={onCLickDelete}>삭제</button>
                    </Column>
                </Row>
            ))}
        </div>
    )
}