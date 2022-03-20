// import styled from "@emotion/styled"
// import { useState } from "react"

// export default function Home() {
//   const [errorName, setErrorName] = useState("")
//   const [errorPassword, setErrorPassword] = useState("")
//   const [errorTitle, setErrorTitle] = useState("")
//   const [errorContent, setErrorContent] = useState("")

//   const [name, setName] = useState("")
//   const [password, setPassword] = useState("")
//   const [title, setTitle] = useState("")
//   const [content, setContent] = useState("")

//   function onClickPost() {
//     if (name === "") {
      
//     }
//   }

//   function onChangeName(event) {
//     setName(event.target.value)
//   }

//   function onChangePassword(event) {
//     setPassword(event.target.value)
//   }

//   function onChangeTitle(event) {
//     setTitle(event.target.value)
//   }

//   function onChangeContent(event) {
//     setContent(event.target.value)
//   }
  

//   const Wrapper = styled.div`
//     width: 1200px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     border: solid 1px black;
//   ` 

//   const Main = styled.div`
//     width: 1000px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   `

//   const Table1 = styled.div`
//     display: flex;
//     justify-content: center;
//     padding-bottom: 80px;
//   `

//   const Table1_1 = styled.div`
//     display: flex;
//     flex-direction: column;
//     padding-right: 25px;
//   `

//   const Table1_2 = styled.div`
//     display: flex;
//     flex-direction: column;
//   `

//   const Title = styled.h1`
//     width: 174px;
//     height: 53px;

//     font-weight: 700;
//     font-size: 36px;
//     line-height: 53px;
//     text-align: center;

//     color: #000000;

//     padding-bottom: 80px;
//   `

//   const Tb1_input = styled.input`
//     width: 486px;
//     height: 52px;
//     left: 461px;
//     top: 1002px;

//     /* White */
//     background: #FFFFFF;
//     /* Gray 4 */
//     border: 1px solid #BDBDBD;
//     box-sizing: border-box;
//     margin-top: 15px;
//   `

//   const Table2 = styled.div`
//     display: flex;
//     flex-direction: column;
//     padding-bottom: 80px;
//   `

//   const Tb2_input = styled.input`
//     width: 996px;
//     height: 52px;
//     left: 461px;
//     top: 1134px;

//     /* White */
//     background: #FFFFFF;
//     /* Gray 4 */
//     border: 1px solid #BDBDBD;
//     box-sizing: border-box;
//     margin-top: 15px;
//   `

//   const Table3 = styled.div`
//     display: flex;
//     flex-direction: column;
//   `

//   const Textbox = styled.textarea`
//   width: 996px;
//   height: 480px;
//   left: 461px;
//   top: 1214px;

//   /* White */
//   background: #FFFFFF;
//   /* Gray 4 */
//   border: 1px solid #BDBDBD;
//   margin-top: 15px;
//   margin-bottom: 30px
//   `

//   const Ad_number = styled.input`
//   width: 77px;
//   height: 52px;
//   left: 461px;
//   top: 1802px;

//   /* White */
//   background: #FFFFFF;
//   /* Gray 4 */
//   border: 1px solid #BDBDBD;
//   box-sizing: border-box;
//   `
//   const Ad_btn = styled.button`
//   width: 124px;
//   height: 52px;
//   left: 554px;
//   top: 1750px;

//   /* Black */
//   background: #000000;

//   color: white;
//   `
//   const Ad_input = styled.input`
//   width: 996px;
//   height: 52px;
//   left: 461px;
//   top: 1870px;

//   /* White */
//   background: #FFFFFF;
//   /* Gray 4 */
//   border: 1px solid #BDBDBD;
//   box-sizing: border-box;

//   margin-bottom: 30px;
//   margin-top: 15px;
//   `

//   const Ad = styled.div`
//     padding-bottom: 30px;
//     margin-top: 15px;
//   `

//   const Table4 = styled.div`
//     display: flex;
//     flex-direction: column;

//     width: 996px;
//   `

//   const Img = styled.div`
//     display: flex;
//     padding-bottom: 40px;
//     margin-top: 15px;
//   `

//   const Img_box = styled.div`
//     background: #BDBDBD;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;

//     width: 78px;
//     height: 78px;
//     margin-right: 20px;
//   `

//   const Radio = styled.div`

//   `

//   const Radio_btn = styled.input`
//     margin-top: 15px;
//     margin-right: 25px;
//   `

//   const Join = styled.button`
//     width: 179px;
//     height: 52px;
//     left: 870px;
//     top: 2412px;

//     background: #FFD600;
//     margin-top: 40px;
//   `


//   return (
//     <Wrapper>
//       <Main>
//         <Title>게시물 등록</Title>
//         <Table1>
//           <Table1_1>
//             작성자
//             <Tb1_input placeholder="이름을 입력해주세요" onChange={onChangeName()}></Tb1_input>
//             <div>{errorName}</div>
//           </Table1_1>
//           <Table1_2>
//             비밀번호
//             <Tb1_input placeholder="비밀번호를 입력해주세요" onChange={onChangePassword}></Tb1_input>
//             <div>{errorPassword}</div>
//           </Table1_2>
//         </Table1>

//         <Table2>
//           제목
//           <Tb2_input placeholder="제목을 작성해주세요" onChange={onChangeTitle}></Tb2_input>
//           <div>{errorTitle}</div>
//         </Table2>

//         <Table3>
//           내용
//           <Textbox placeholder="내용을 입력해주세요" onChange={onChangeContent}></Textbox>
//           <div>{errorContent}</div>
//           주소
//           <Ad>
//             <Ad_number placeholder="07250" disabled></Ad_number>
//             <Ad_btn>우편번호 검색</Ad_btn>
//           </Ad>
//           <Ad_input></Ad_input>
//           <Ad_input></Ad_input>
//           유튜브
//           <Ad_input></Ad_input>
//         </Table3>
//         <Table4>
//           사진첨부
//           <Img>
//             <Img_box>
//               <span>+</span>
//               <span>Upload</span>
//             </Img_box>
//             <Img_box>
//               <span>+</span>
//               <span>Upload</span>
//             </Img_box>
//             <Img_box>
//               <span>+</span>
//               <span>Upload</span>
//             </Img_box>
//           </Img>
//           메인설정
//           <Radio>
//             유튜브
//             <Radio_btn type="radio" name="settings"></Radio_btn>
//             사진
//             <Radio_btn type="radio" name="settings"></Radio_btn>
//           </Radio>
//         </Table4>
//       </Main>  
//       <Join onClick={onClickPost()}>등록하기</Join>
//     </Wrapper>
//   )
// }


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
} from '../../../styles/emotion'
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      _id
    }
  }
`

// mutation{
//   createBoard(createBoardInput:{
//     writer:"",
//     password:"",
//     title:"",
//     contents:""
//   }){
//     _id
//   }
// }

export default function BoardsNewPage() {
    const router = useRouter()
    const [createBoard] = useMutation(CREATE_BOARD)

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");

    const onChangeWriter = (event) => {
      setWriter(event.target.value);
      if (event.target.value !== "") {
        setWriterError("");
      }
    };
  
    const onChangePassword = (event) => {
      setPassword(event.target.value);
      if (event.target.value !== "") {
        setPasswordError("");
      }
    };
  
    const onChangeTitle = (event) => {
      setTitle(event.target.value);
      if (event.target.value !== "") {
        setTitleError("");
      }
    };
  
    const onChangeContents = (event) => {
      setContents(event.target.value);
      if (event.target.value !== "") {
        setContentsError("");
      }
    };

    const onClickSubmitGraphql = async () => {
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
      if(writer !== "" && password !== "" && title !== "" && contents !== "") {
        alert("게시물 등록에 성공하였습니다!")
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents
            }
          }
        })
        console.log(result)
        router.push(result.data.createBoard._id)
      }
    };

    return (
      <Wrapper>
        <Title>게시판 등록 [포트폴리오용]</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer type="text" placeholder="이름을 적어주세요." onChange={onChangeWriter} />
            <Error>{writerError}</Error>
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password type="password" placeholder="비밀번호를 작성해주세요." onChange={onChangePassword} />
            <Error>{passwordError}</Error>
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle} />
          <Error>{titleError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents placeholder="내용을 작성해주세요." onChange={onChangeContents} />
          <Error>{contentsError}</Error>
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
          <SubmitButton onClick={onClickSubmitGraphql}>등록하기</SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    )
}