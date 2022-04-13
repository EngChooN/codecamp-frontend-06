import WriteComponent from "../../../src/components/units/recoil/write/write";
import { useRecoilState } from "recoil";
import { editValid } from "../../../src/commons/libraries/globalState";
import { useEffect } from "react";

export default function NewQuiz() {
  const [edit, setEdit] = useRecoilState(editValid);

  useEffect(() => {
    setEdit(false);
  }, [edit]);
  return <WriteComponent />;
}
