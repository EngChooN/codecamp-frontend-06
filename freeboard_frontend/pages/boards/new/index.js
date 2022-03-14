import styled from "@emotion/styled"

export default function Home() {
  const Wrapper = styled.div`
    width: 1200px;
  ` 

  const Main = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const Table1 = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 80px;
  `

  const Table1_1 = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 25px;
  `

  const Table1_2 = styled.div`
    display: flex;
    flex-direction: column;
  `

  const Title = styled.h1`
    width: 174px;
    height: 53px;

    font-weight: 700;
    font-size: 36px;
    line-height: 53px;
    text-align: center;

    color: #000000;

    padding-bottom: 80px;
  `

  const Tb1_input = styled.input`
    width: 486px;
    height: 52px;
    left: 461px;
    top: 1002px;

    /* White */
    background: #FFFFFF;
    /* Gray 4 */
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
  `

  const Table2 = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 80px;
  `

  const Tb2_input = styled.input`
    width: 996px;
    height: 52px;
    left: 461px;
    top: 1134px;

    /* White */
    background: #FFFFFF;
    /* Gray 4 */
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
  `

  const Table3 = styled.div`
    display: flex;
    flex-direction: column;
  `

  const Textbox = styled.textarea`
  width: 996px;
  height: 480px;
  left: 461px;
  top: 1214px;

  /* White */
  background: #FFFFFF;
  /* Gray 4 */
  border: 1px solid #BDBDBD;
  `

  const Ad_number = styled.input`
  width: 77px;
  height: 52px;
  left: 461px;
  top: 1802px;

  /* White */
  background: #FFFFFF;
  /* Gray 4 */
  border: 1px solid #BDBDBD;
  box-sizing: border-box;
  `
  const Ad_btn = styled.button`
  width: 124px;
  height: 52px;
  left: 554px;
  top: 1750px;

  /* Black */
  background: #000000;

  color: white;
  `
  const Ad_input = styled.input`
  width: 996px;
  height: 52px;
  left: 461px;
  top: 1870px;

  /* White */
  background: #FFFFFF;
  /* Gray 4 */
  border: 1px solid #BDBDBD;
  box-sizing: border-box;

  `


  return (
    <Wrapper>
      <Main>
        <Title>게시물 등록</Title>
        <Table1>
          <Table1_1>
            작성자
            <Tb1_input placeholder="이름을 입력해주세요"></Tb1_input>
          </Table1_1>
          <Table1_2>
            비밀번호
            <Tb1_input placeholder="비밀번호를 입력해주세요"></Tb1_input>
          </Table1_2>
        </Table1>

        <Table2>
          제목
          <Tb2_input placeholder="제목을 작성해주세요"></Tb2_input>
        </Table2>

        <Table3>
          내용
          <Textbox placeholder="내용을 입력해주세요">
          </Textbox>
          주소
          <div>
            <Ad_number placeholder="07250" disabled></Ad_number>
            <Ad_btn>우편번호 검색</Ad_btn>
          </div>
          <Ad_input></Ad_input>
          <Ad_input></Ad_input>
        </Table3>
      </Main>  
    </Wrapper>
  )
}
