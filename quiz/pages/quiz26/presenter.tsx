import { memo } from "react";

function PresenterPage() {
  console.log("Presenter");

  return <h1>Presenter</h1>;
}

export default memo(PresenterPage);
