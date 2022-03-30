import { Modal } from "antd";

export default function ModalAlertPage() {
  const onClickSuccessButton = () => {
    Modal.success({ content: "성공" });
  };

  const onClickFailButton = () => {
    Modal.error({ content: "실패" });
  };

  return (
    <>
      <button onClick={onClickSuccessButton}>성공할 때</button>
      <button onClick={onClickFailButton}>실패할 때</button>
    </>
  );
}
