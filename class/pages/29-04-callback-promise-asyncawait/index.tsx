import axios from "axios";
import { reject } from "lodash";
import { resolve } from "path";

export default function CallbackPromiseAsyncAwaitPage() {
  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aaa.send();
    aaa.addEventListener("load", (res) => {
      const num = res.target.response.split(" ")[0];

      const bbb = new XMLHttpRequest();
      bbb.open("get", "http://koreanjson.com/" + num);
      bbb.send();
      bbb.addEventListener("load", (res) => {
        const userId = res.target.reponse.UserId;

        const ccc = new XMLHttpRequest();
        ccc.open("get", "http://koreanjson.com?post?userId=" + userId);
        ccc.send();
        ccc.addEventListener("load", (res) => {
          console.log(res);
        });
      });
    });
  };

  //     new Promise((resolve, reject) => {
  //        // 외부 요청 코드
  //         const ccc = new XMLHttpRequest();
  //         ccc.open("get", "http://koreanjson.com?post?userId=" + userId);
  //         ccc.send();
  //         ccc.addEventListener("load", (res) => {
  //           resolve(res);
  //         });
  //       // 성공
  //       resolve("철수")
  //         // 실패
  //         reject("에러발생!")
  //   }).then((res) => {}).catch(err => {})

  const onClickPromise = () => {
    axios.get("http://numbersapi.com/random?min=1&max=200").then((res) => {
      return axios.get(`http://koreanjson.com/posts/${num}`);
    });
  };

  const onClickAsyncAwait = async () => {
    const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200");

    const bbb = await axios.get("http://numbersapi.com/random?min=1&max=200");

    const ccc = await axios.get("http://numbersapi.com/random?min=1&max=200");
  };

  return (
    <div>
      <button onClick={onClickCallback}>Callback 요청</button>
      <button onClick={onClickPromise}>Promise 요청</button>
      <button onClick={onClickAsyncAwait}>AsyncAwait 요청</button>
    </div>
  );
}
