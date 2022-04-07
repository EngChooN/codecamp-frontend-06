import {
  Wrapper,
  Title,
  WriterWrapper,
  Writer,
  Password,
  Label,
  InputWrapper,
  Subject,
  Contents,
  ZipcodeWrapper,
  Zipcode,
  SearchButton,
  Address,
  Youtube,
  ImageWrapper,
  UploadButton,
  OptionWrapper,
  RadioButton,
  RadioLabel,
  ButtonWrapper,
  SubmitButton,
  Error,
} from "./BoardWrite.styles";
import DaumPostcode from "react-daum-postcode";
import { Modal, Button } from "antd";

// 인터페이스
import { ChangeEvent } from "react";
import ImagesUpload from "../../imagesupload/Imagesupload.container";
interface IBoardWriteUIProps {
  isActive: boolean;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickEdit: () => void;

  isEdit: boolean;
  data?: any;
}
//

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <Wrapper>
      <Title>게시판{props.isEdit ? "수정" : "등록"}</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeWriter}
            defaultValue={props.data?.fetchBoard.writer}
            id="writer"
          />
          <Error>{props.writerError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            type="password"
            placeholder="비밀번호를 작성해주세요."
            onChange={props.onChangePassword}
            id="password"
          />
          <Error>{props.passwordError}</Error>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title}
          id="title"
        />
        <Error>{props.titleError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents}
          id="contents"
        />
        <Error>{props.contentsError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode
            placeholder="07250"
            value={
              props.zonecode ||
              props.data?.fetchBoard.boardAddress.zipcode ||
              ""
            }
          />
          <SearchButton onClick={props.onClickZip}>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        {/* ---------------모달-------------------- */}
        {props.isModalVisible && (
          <Modal
            title="게시글 등록"
            visible={props.isModalVisible}
            onCancel={props.handleCancel}
          >
            <DaumPostcode onComplete={props.handleComplete} />
          </Modal>
        )}
        {/* --------------------------------------- */}
        <Address
          value={
            props.address || props.data?.fetchBoard.boardAddress.address || ""
          }
        />
        <Address
          onChange={props.onChangeDetailAddress}
          defaultValue={props.data?.fetchBoard.boardAddress.addressDetail}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube
          onChange={props.onChangeYoutube}
          placeholder="링크를 복사해주세요."
          defaultValue={props.data?.fetchBoard.youtubeUrl}
          id="youtube"
        />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        {/* <UploadButton> */}
        <ImagesUpload
          setImageUrl={props.setImageUrl}
          imageUrl={props.imageUrl}
        />
        {/* </UploadButton> */}
        {/* <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton> */}
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtubeRadio" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton
          onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
          isActive={props.isActive}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
