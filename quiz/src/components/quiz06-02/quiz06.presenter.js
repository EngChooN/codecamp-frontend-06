export default function Quiz06Presenter(props) {

    return (
        <div>
            <div>글쓴이:{props.data?.fetchBoard.writer}</div>
            <div>제목:{props.data?.fetchBoard.title}</div>
            <div>내용:{props.data?.fetchBoard.contents}</div>
        </div>
    )
}