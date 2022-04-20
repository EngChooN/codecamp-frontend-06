export default function BrowserStoragePage() {
  const onClickSaveCookie = () => {
    document.cookie = "aaa=철수";
    document.cookie = "zzz=맹구";
  };

  const onClickSaveLocal = () => {
    localStorage.setItem("bbb", "영희");
  };

  const onClickSaveSession = () => {
    sessionStorage.setItem("ccc", "훈이");
  };

  const onClickLoadCookie = () => {
    const myCookie = document.cookie
      .split("; ")
      .filter((el) => el.startsWith("aaa="))[0]
      .replace("aaa=", "");
    console.log(myCookie);
  };

  const onClickLoadLocal = () => {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
  };

  const onClickLoadSession = () => {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
  };

  return (
    <div>
      <button onClick={onClickSaveCookie}>쿠키에 저장</button>
      <button onClick={onClickSaveLocal}>로컬스토리지에 저장</button>
      <button onClick={onClickSaveSession}>세션에 저장</button>
      <br></br>
      ===========================
      <br></br>
      <button onClick={onClickLoadCookie}>쿠키를 조회</button>
      <button onClick={onClickLoadLocal}>로컬스토리지를 조회</button>
      <button onClick={onClickLoadSession}>세션를 조회</button>
    </div>
  );
}
