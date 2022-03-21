import { gql } from '@apollo/client'

export const fetchBoard = gql`
    query fetchBoard($number: Int){
        fetchBoard(number:$number){
            number
            writer
            title
            contents
        }
    }
`

// Argument of undefined passed to parser was not a valid GraphQL DocumentNode.You may need to use 'graphql-tag' or another method to convert your operation into a document
// 라는 에러가 나와서 검색해보니까 fetchBoard를 export 안한것을 알게 됨