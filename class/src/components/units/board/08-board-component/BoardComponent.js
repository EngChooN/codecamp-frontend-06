export default function BoardComponent(props) {
    
    return (
        <div>
            {/* {props.isEdit ? "수정" : "등록"} */}
            <h1>{props.isEdit === true ? "수정" : "등록"}페이지</h1>
            제목: <input type="text" /><br/>
            내용: <input type="text" /><br />
            <button>{props.isEdit === true ? "수정" : "등록"}하기</button>
        </div>
    )
}