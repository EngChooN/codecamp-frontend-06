import styled from "@emotion/styled";

export const Waraper = styled.div`
  width: 1200px;
  height: 1602px;
  left: 361px;
  top: 675px;
  margin: auto;
  margin-top: 100px;

  /* White */
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 80px 100px 80px 100px;
`;

export const Header = styled.div`
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Writer_left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Writer_img = styled.img`
  margin-right: 15px;
`;

export const Writer_info = styled.div``;

export const Writer_name = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;

export const Writer_createdAt = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  /* Gray 3 */
  color: #828282;
`;

export const Writer_right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Writer_icon = styled.img`
  margin-left: 30px;
`;

export const Writer_icon2 = styled.img`
  margin-left: 30px;
`;

export const Contents_box = styled.div``;

export const Contents_title = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  /* identical to box height */

  /* Black */
  color: #000000;
  margin-top: 80px;
`;

export const Contents_main = styled.div``;

export const Contents_img = styled.div`
  width: 100%;
  height: 480px;
  background-color: gray;
  margin-top: 40px;
`;

export const Contents_cnt = styled.div`
  margin-top: 40px;
`;

export const Ect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Ect_ect = styled.div`
  /* width: 486px;
  height: 240px; */
  margin-top: 120px;
`;

export const Like_waraper = styled.div`
  margin-top: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Like = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
`;

export const Dislike = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Like_icon = styled.img`
  cursor: pointer;
`;
export const Like_span = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  /* Main */
  color: #ffd600;
`;
export const Dislike_icon = styled.img`
  cursor: pointer;
`;
export const Dislike_span = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  /* Gray 3 */
  color: #828282;
`;

export const Footer = styled.div`
  margin: auto;
  width: 1200px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 100px;
`;

export const Footer_btn = styled.button`
  width: 179px;
  height: 45px;

  /* White */
  background: #ffffff;
  /* Gray 4 */
  border: 1px solid #bdbdbd;

  margin-right: 25px;
  margin-left: 25px;
  cursor: pointer;
`;
