import { RadialChart } from "react-vis";

export default function test() {
  const myData = [{ angle: 1 }, { angle: 5 }, { angle: 6 }, { angle: 6 }];

  return (
    <>
      {/* 원형-그래프 */}
      <RadialChart data={myData} width={300} height={300} />
    </>
  );
}
