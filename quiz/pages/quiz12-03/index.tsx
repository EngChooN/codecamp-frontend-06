import React, { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // 주소창
  const handleComplete = (data: any) => {
    setAddress(data.address);
    setIsModalVisible(false);
    console.log(address);
  };

  return (
    <>
      <Button onClick={showModal}>모달열기</Button>
      <span>{address}</span>
      {isModalVisible && (
        <Modal
          title="게시글 등록"
          visible={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
