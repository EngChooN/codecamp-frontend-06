import { atom } from "recoil";
// Atom
export const editValid = atom({
  key: "editValid", // state의 이름
  default: false, //초기값
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
