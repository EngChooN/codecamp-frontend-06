import styled from "@emotion/styled";
import { useState } from "react";

export default function BoardCommentItem(props) {
  const MyRow = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const MyColumn = styled.div`
    width: 25%;
  `;
  const [isEdit, setIsEdit] = useState(false);
  const onClickEdit = (event) => {
    setIsEdit(true);
  };

  return (
    <div>
      {isEdit === false && (
        <MyRow>
          <MyColumn>
            <input type="checkbox" />
          </MyColumn>
          <MyColumn>{props.el.writer}</MyColumn>
          <MyColumn>{props.el.title}</MyColumn>
          <button onClick={onClickEdit}>edit</button>
        </MyRow>
      )}
      {isEdit === true && <div>수정페이지</div>}
    </div>
  );
}
