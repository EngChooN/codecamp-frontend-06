import { useEffect, useState } from "react";
import WriteComponent from "../../../src/components/units/recoil/write/write";

export default function EditQuiz() {
  const [editValid, setEditValid] = useState(false);

  useEffect(() => {
    setEditValid(true);
  }, [editValid]);
  return <WriteComponent editValid={editValid} />;
}
