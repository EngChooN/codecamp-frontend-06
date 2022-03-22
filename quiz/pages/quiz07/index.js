import { useQuery, gql, useMutation } from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_PRODUCTS = gql`
    query fetchProducts {
        fetchProducts{
            _id
            seller
            name
            detail
            price
            createdAt
        }
    }
`

const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId: ID){
        deleteProduct(productId: $productId ){
            message
        }
    }
`
    
const MyRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    border-bottom: 1px solid gray;
`

const MyColumn = styled.div`
    width: 20%;
`

export default function Quiz07Page() {
    const { data } = useQuery(FETCH_PRODUCTS)
    const [deleteProduct] = useMutation(DELETE_PRODUCT)

    const onCLickDelete = (event) => {
        // console.log(event.target.id)
        deleteProduct({
            variables: {
                productId: event.target.id
            },
            refetchQueries: [{query: FETCH_PRODUCTS}]
        })
    }


    return (
        <div>
            {data?.fetchProducts.map((el) => (
                <MyRow key={el._id}>
                    <MyColumn><input type="checkbox" /></MyColumn>
                    <MyColumn>{el.name}</MyColumn>
                    <MyColumn>{el.price}</MyColumn>
                    <MyColumn>{el.createdAt}</MyColumn>
                    <MyColumn>
                        <button id={el._id} onClick={onCLickDelete}>삭제</button>
                    </MyColumn>
                </MyRow>
            ))}
        </div>

    )
}