import { useState } from "react";

// 1. string Type
const getString = (arg: string): string => {
  return arg;
};
const result1 = getString("철수");

// 2. number Type
const getNumber = (arg: number): number => {
  return arg;
};
const result2 = getNumber(8);

// 3. any Type
const getAny2 = (arg: any): any => {
  return arg;
};
const result3_1 = getAny2("곽두팔");
const result3_2 = getAny2(8);
const result3_3 = getAny2(true);

// 4. any Type2
const getAnys = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  return [arg3, arg2, arg1];
};
const result4 = getAnys("곽두팔", "두팔유치원", 6);

// 5. generic Type (들어온 타입을 그대로 사용)
function getGeneric<MyType>(arg: MyType): MyType {
  return arg;
}
const aaa: string = "곽두팔";
const bbb: number = 8;
const ccc: boolean = true;

const result4_1 = getGeneric(aaa);
const result4_2 = getGeneric(bbb);
const result4_3 = getGeneric(ccc);

// 6. generic Type2
// prettier-ignore
function getGenerics<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}
const result6 = getGenerics("곽두팔", "두팔유치원", 6);

// 7. generic - 축약1
// prettier-ignore
function getGenericsT<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}
const result7 = getGenericsT("곽두팔", "두팔유치원", 6);

// 8. generic - 축약2
// prettier-ignore
function getGenericsTUV<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}
const result8 = getGenericsTUV("곽두팔", "두팔유치원", 6);

// const [scholl, setSchool] = useState<string>("다람쥐초등학교")
// const apple: number = "철수"
// console.log(apple)

// 화살표 함수에서의 generic!!
// const getGenericsTUV = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
//     return [arg3, arg2, arg1]
// }
