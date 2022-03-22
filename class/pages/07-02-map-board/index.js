import { useQuery, gql } from '@apollo/client'
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

const MyRow = styled.div`
    display: flex;
    flex-direction: row;
`

const MyColumn = styled.div`
    width: 25%;
`

export default function StaticRoutedPage() {
    const { data } = useQuery(PETCH_BOARDS)

    console.log(data)

    
    return (
        <div>
            {data?.fetchBoards.map((el) => (
                <MyRow key={el.number}>
                    <MyColumn><input type="checkbox" /></MyColumn>
                    <MyColumn>{el.number}</MyColumn>
                    <MyColumn>{el.writer}</MyColumn>
                    <MyColumn>{el.title}</MyColumn>
                </MyRow>
            ))}
        </div>
    )
}