import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

const Input = styled.div``;

interface IProps {
  mytype: "text" | "password";
  myregister: UseFormRegisterReturn;
}
export default function Input01(props: IProps) {
  return <Input type={props.mytype} {...props.myregister} />;
}
