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
    Error
} from './BoardWrite.styles'

export default function BoardWriteUI(props) {
  return (
    <Wrapper>
      <Title>게시판{props.isEdit? "수정" : "등록"}</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeWriter}
            defaultValue={props.data?.fetchBoard.writer}
          />
          <Error>{props.writerError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            type="password"
            placeholder="비밀번호를 작성해주세요."
            onChange={props.onChangePassword}
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
        />
        <Error>{props.titleError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.writer}
        />
        <Error>{props.contentsError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube placeholder="링크를 복사해주세요." />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={props.isEdit? props.onClickEdit : props.onClickSubmit} isActive={props.isActive}>
          {props.isEdit? "수정" : "등록"}하기
        </SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
