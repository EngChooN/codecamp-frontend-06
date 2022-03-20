import styled from "@emotion/styled"

export default function Home() {
    const Warraper = styled.div`
        width: 640px;
        display: flex;
        flex-direction: column;
    `

    const Top1 = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin: 80px 50px 50px 0px;
    `

    const Top2 = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 60px;
    `

    const Title = styled.div`
        font-size: 40px;
        line-height: 42.7px;
        letter-spacing: -1.33px;
        padding-left: 50px;
    `

    const Profile = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
    `
    
    const Img = styled.div`
        width: 60px;
        height: 60px;
        background-color: gray;
        border-radius: 40px;
    `

    const Img_pro = styled.img`
        width:100%;
        height:100%;
        object-fit:cover;
    `

    const Name = styled.div`
        font-size: 24px;
        line-height: 42.7px;
        letter-spacing: -0.8px;
        padding-left: 20px;
    `

    const TopBar = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    `

    const Subtitle = styled.div`
        height: 32px;
        font-size: 30px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.87;
        letter-spacing: normal;
        color: #cacaca;
    `

    const Subtitle2 = styled.div`
        height: 50px;
        font-size: 30px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.87;
        letter-spacing: normal;
        color: #ff1b6d;
        border-bottom: 1px solid #ff1b6d;
    `

    const Line = styled.div`
        width: 640px;
        height: 1px;
        margin: 50px 0 29px;
        border: solid 1px #cacaca;
    `

    const Line2 = styled.div`
        width: 640px;
        height: 1px;
        border: solid 1px #cacaca;
        margin-bottom: 10px;
    `

    const Sub = styled.div`
        padding-left: 5px;
        padding-right: 50px;
    `

    const List = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const List_table = styled.div`
        width: 490px;
        margin-bottom: 50px;
    `

    const List_info = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `

    const Qna_number = styled.div`
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.19;
        letter-spacing: normal;
        color: #adadad;
    `

    const Qna_title = styled.div`
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.58;
        letter-spacing: normal;
        color: var(--greyish-brown);
    `

    const Qna_sub = styled.div`
            width: 60px;
            height: 60px;
    `

    const Footer = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    `

    const Footer_btn = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `

    const Footer_icon = styled.div`
    
    `

    const Footer_title2 = styled.div`
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.13;
        letter-spacing: normal;
        color: #ff1b6d;
    `
    
    const Footer_title = styled.div`
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.13;
        letter-spacing: normal;
        color: #adadad;
}
    `

    return (
        <Warraper>
            <Top1><img src="https://cdn.zeplin.io/5f4f60788ca42c7f3aec7400/assets/496B6F67-745C-4219-945E-62079B7A049F.svg"></img></Top1>
            <Top2>
                <Title>마이</Title>
                <Profile>
                    <Img><Img_pro src="https://cdn.zeplin.io/5f4f60788ca42c7f3aec7400/assets/3104B05A-9CB0-4609-8F9B-4757F2CFC525.png"></Img_pro></Img>
                    <Name>임정아</Name>
                    <Sub><img src="https://cdn.zeplin.io/5f4f60788ca42c7f3aec7400/assets/5B5DE266-0FB2-4DF3-8271-00D90D49B841.svg"></img></Sub>
                </Profile>
            </Top2>
            <TopBar>
                <Subtitle>공지사항</Subtitle>
                <Subtitle>이벤트</Subtitle>
                <Subtitle2>FAQ</Subtitle2>
                <Subtitle>Q&A</Subtitle>
            </TopBar>
            <Line></Line>
            <List>
                <List_table>
                    <Qna_number>Q 01</Qna_number>
                    <List_info>
                        <Qna_title>리뷰 작성은 어떻게 하나요?</Qna_title>
                        <Qna_sub><img src="https://cdn.zeplin.io/5f4f60788ca42c7f3aec7400/assets/2B71C70D-5EB4-4ACE-809C-7313747DB56C.svg"></img></Qna_sub>
                    </List_info>
                </List_table>
                <List_table>
                    <Qna_number>Q 01</Qna_number>
                    <List_info>
                        <Qna_title>리뷰 작성은 어떻게 하나요?</Qna_title>
                        <Qna_sub><img src="https://cdn.zeplin.io/5f4f60788ca42c7f3aec7400/assets/2B71C70D-5EB4-4ACE-809C-7313747DB56C.svg"></img></Qna_sub>
                    </List_info>
                </List_table><List_table>
                    <Qna_number>Q 01</Qna_number>
                    <List_info>
                        <Qna_title>리뷰 작성은 어떻게 하나요?</Qna_title>
                        <Qna_sub><img src="https://cdn.zeplin.io/5f4f60788ca42c7f3aec7400/assets/2B71C70D-5EB4-4ACE-809C-7313747DB56C.svg"></img></Qna_sub>
                    </List_info>
                </List_table><List_table>
                    <Qna_number>Q 01</Qna_number>
                    <List_info>
                        <Qna_title>리뷰 작성은 어떻게 하나요?</Qna_title>
                        <Qna_sub><img src="https://cdn.zeplin.io/5f4f60788ca42c7f3aec7400/assets/2B71C70D-5EB4-4ACE-809C-7313747DB56C.svg"></img></Qna_sub>
                    </List_info>
                </List_table><List_table>
                    <Qna_number>Q 01</Qna_number>
                    <List_info>
                        <Qna_title>리뷰 작성은 어떻게 하나요?</Qna_title>
                        <Qna_sub><img src="https://cdn.zeplin.io/5f4f60788ca42c7f3aec7400/assets/2B71C70D-5EB4-4ACE-809C-7313747DB56C.svg"></img></Qna_sub>
                    </List_info>
                </List_table><List_table>
                    <Qna_number>Q 01</Qna_number>
                    <List_info>
                        <Qna_title>리뷰 작성은 어떻게 하나요?</Qna_title>
                        <Qna_sub><img src="https://cdn.zeplin.io/5f4f60788ca42c7f3aec7400/assets/2B71C70D-5EB4-4ACE-809C-7313747DB56C.svg"></img></Qna_sub>
                    </List_info>
                </List_table>
            </List>
            <Line2></Line2>
            <Footer>
                <Footer_btn>
                    <Footer_icon><img src="https://cdn.zeplin.io/5f4f60788ca42c7f3aec7400/assets/C7CC7B1A-E4B1-478A-9BED-F64F9C2ABFA6.svg"></img></Footer_icon>
                    <Footer_title>홈</Footer_title>
                </Footer_btn>
                <Footer_btn>
                    <Footer_icon><img src="https://cdn.zeplin.io/5f4f60788ca42c7f3aec7400/assets/E03E09F0-1516-45D8-BFB4-F172B5669F7A.svg"></img></Footer_icon>
                    <Footer_title>잇츠로드</Footer_title>
                </Footer_btn>
                <Footer_btn>
                    <Footer_icon><img src="https://cdn.zeplin.io/5f4f60788ca42c7f3aec7400/assets/913AE4B9-B6D9-40BF-8B54-4549CB8E2FA5.svg"></img></Footer_icon>
                    <Footer_title>마이찜</Footer_title>
                </Footer_btn>
                <Footer_btn>
                    <Footer_icon><img src="https://cdn.zeplin.io/5f4f60788ca42c7f3aec7400/assets/A0027B77-F502-40B1-8E37-AA534F062804.svg"></img></Footer_icon>
                    <Footer_title2>마이</Footer_title2>
                </Footer_btn>
            </Footer>
        </Warraper>
    )
}
