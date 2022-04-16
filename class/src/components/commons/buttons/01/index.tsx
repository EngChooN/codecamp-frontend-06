import styled from "@emotion/styled";

export default function Button01(props) {
  const Button = styled.button`
    background-color: ${(props) => (props.isActive ? "yellow" : "")};
  `;

  return <Button isActive={props.isActive}>{props.myname}</Button>;
}
