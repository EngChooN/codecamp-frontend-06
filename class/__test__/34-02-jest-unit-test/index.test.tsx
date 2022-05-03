import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import JestUnitTestPage from "../../pages/34-02-jest-unit-test";

it("내가 원하는대로 그려지는지 테스트하기: 컴포넌트 테스트", () => {
  render(<JestUnitTestPage />);

  // 랜더링 된 화면에서 텍스트를 가져옴
  const myText1 = screen.getByText("철수는 13살 입니다.");
  expect(myText1);

  const myText2 = screen.getByText("철수의 취미 입력하기:");
  expect(myText2);

  const myText3 = screen.getByText("철수랑 놀러가기");
  expect(myText3);
});
