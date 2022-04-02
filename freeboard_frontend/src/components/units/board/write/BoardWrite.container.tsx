import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { Modal } from "antd";

// 인터페이스
import { ChangeEvent } from "react";
interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
  // onChangeWriter: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  // onChangePassword: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  // onChangeTitle: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  // onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

interface IMyVariables {
  updateBoardInput: {
    title?: string;
    contents?: string;
  };
  boardId?: string;
  password: string;
}
//

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtube, setYoutube] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  // 모달 다음주소 등록
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState(""); // 주소
  const [zonecode, setZonecode] = useState(""); //우편번호
  const [detailAddress, setDetailAddress] = useState(""); // 사용자가 입력한 상세주소

  const onChangeDetailAddress = (event) => {
    setDetailAddress(event.target.value);
    console.log(event.target.value);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleComplete = (data: any) => {
    setAddress(data.address);
    setZonecode(data.zonecode);
    setIsModalVisible(false);
    console.log(data);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }

    // if (event.target.value !== "" && password !== "" && title !== "" && contents !== "") {
    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }

    // if (writer !== "" && event.target.value !== "" && title !== "" && contents !== "") {
    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }

    // if (writer !== "" && password !== "" && event.target.value !== "" && contents !== "") {
    if (writer && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }

    // if (writer !== "" && password !== "" && title !== "" && event.target.value !== "") {
    if (writer && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickEdit = async () => {
    const myVariables: IMyVariables = {
      //updateBoardInput을 선언을 안해줘서 안됐었음!! (플레이그라운드 맨 위에 있는건 다 들어가야함!!)
      updateBoardInput: {},
      boardId: String(router.query.boardId),
      password: password,
    };

    if (title !== "") myVariables.updateBoardInput.title = title;
    if (contents !== "") myVariables.updateBoardInput.contents = contents;
    //writer는 어차피 안바껴서 선언 x, (플레이그라운드 보면 필수가 아님!!)
    if (zonecode || address || detailAddress) {
      myVariables.updateBoardInput.boardAddress = {};
      if (zonecode)
        myVariables.updateBoardInput.boardAddress.zipcode = zonecode;
      if (address) myVariables.updateBoardInput.boardAddress.address = address;
      if (detailAddress)
        myVariables.updateBoardInput.boardAddress.addressDetail = detailAddress;
    }
    try {
      await updateBoard({
        variables: myVariables,
      });
      Modal.success({
        content: "(게시글 수정!)",
      });
      router.push("/boards/" + router.query.boardId);
    } catch (error) {
      Modal.error({
        content: error,
      });
    }
  };

  const onClickSubmit = async () => {
    if (writer === "") {
      setWriterError("작성자를 입력해주세요.");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (title === "") {
      setTitleError("제목을 입력해주세요.");
    }
    if (contents === "") {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: contents,
              youtubeUrl: youtube,
              boardAddress: {
                zipcode: zonecode,
                address: address,
                addressDetail: detailAddress,
              },
            },
          },
        });
        console.log(result);
        Modal.success({
          content: "(게시글 등록!)",
        });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        Modal.error({
          content: error,
        });
      }
    }
  };

  const onChangeYoutube = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setYoutube(event.target.value);
  };

  const onClickZip = () => {
    showModal();
  };

  return (
    <BoardWriteUI
      isActive={isActive}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      isEdit={props.isEdit}
      data={props.data}
      onChangeYoutube={onChangeYoutube}
      // 모달
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      isModalVisible={isModalVisible}
      onClickZip={onClickZip}
      address={address}
      zonecode={zonecode}
      onChangeDetailAddress={onChangeDetailAddress}
      detailAddress={detailAddress}
    />
  );
}
