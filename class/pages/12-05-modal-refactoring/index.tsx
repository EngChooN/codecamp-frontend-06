import { Modal, Button } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    // 컴플리트시 주소창만 닫히는데 모달창까지 같이 닫히게 하기 위해서
    onToggleModal();
  };

  return (
    <>
      <Button onClick={onToggleModal}>Open Modal</Button>
      {isOpen && (
        <Modal
          // 아예 모달을 삭제했다가 다시 켜기
          visible={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}

      {/* <Modal
        title="Basic Modal"
        // 모달 숨겼다가 나타나게 하기
        visible={isOpen}  
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcode onComplete={handleComplete} />
      </Modal> */}
    </>
  );
}
