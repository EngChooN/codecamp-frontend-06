export default function PromiseAllPage() {
  const onClickPromise = async () => {
    console.time("promise start");
    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("url1");
      }, 3000);
    });

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("url2");
      }, 2000);
    });

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("url3");
      }, 1000);
    });
    console.timeEnd("promise end");
  };

  const onClickPromiseAll = () => {
    // 1. 하나하나씩 확인하는 방법
    // const result = Promise.all([
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("url1");
    //     }, 3000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("url2");
    //     }, 2000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("url3");
    //     }, 1000);
    //   }),
    // ]);

    // 2. 한번에 확인하는 방법
    const result = Promise.all(
      ["url1", "url2", "url3"].map(
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 3000);
          })
      )
    );
  };

  return (
    <div>
      <button onClick={onClickPromise}>Promise 연습</button>
      <button onClick={onClickPromiseAll}>PromiseAll 연습</button>
    </div>
  );
}
