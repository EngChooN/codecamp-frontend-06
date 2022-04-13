import { useRecoilState } from "recoil";
import { editValid } from "../../../../commons/libraries/globalState";

export default function WriteComponent(props) {
  const [edit, setEdit] = useRecoilState(editValid);
  return (
    <>
      <div>{props.eidtValid === true ? "수정" : "등록"}</div>
      <div>{edit === false ? "수정" : "등록"}</div>
    </>
  );
}
