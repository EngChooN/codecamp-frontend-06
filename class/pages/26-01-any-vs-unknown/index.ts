import { divide } from "lodash";

// 1, any Type (그냥 자바스크립트랑 같음)
const getAny = (args: any) => {
  return args + 1;
};

const result = getAny("곽두팔");

// unknown Type (개발자에게 안전하게 코딩하도록 유도)
const getUnknown = (args: unknown) => {
  if (typeof args === "number") {
    return args + 1;
  } else {
    return "숫자를 넣어주세요!";
  }
};

const result2 = getUnknown("곽두팔");
