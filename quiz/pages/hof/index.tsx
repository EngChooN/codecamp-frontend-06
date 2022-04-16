export default function HofQuiz() {
  const onClickBtn = (a) => (b) => (c) => (event) => {
    console.log(a, b, c);
  };

  return (
    <div>
      <button onClick={onClickBtn(1)(2)(3)}>함수실행</button>
    </div>
  );
}
