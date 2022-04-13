export default function TypescriptPage() {
  // 타입추론
  let aaa = "안녕하세요";

  // 타입명시
  let bbb: String = "hello";

  // 문자타입
  let ccc: String;
  ccc = "hi";

  // 배열타입
  let fff: number[] = [1, 2, 3];

  return <div>타입스크립트 연습하기</div>;
}
