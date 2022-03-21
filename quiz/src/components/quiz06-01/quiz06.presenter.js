import { SubmitButton } from "./quiz06.styles"

export default function Quiz06Presenter(props) {


    return (
        <div>
            글쓴이:<input type="text" onChange={props.onChangeWriter}/>
            제목:<input type="text" onChange={props.onChangeTitle}/>
            내용:<input type="text" onChange={props.onChangeContents}/>
            <SubmitButton onClick={props.createBoardApi} isVal={props.isVal} disabled={props.isVal}>글쓰기</SubmitButton>
        </div>
    )
}        
