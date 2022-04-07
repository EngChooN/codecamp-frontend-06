export const checkFileValidation = (myfile?: File) => {
  // 파일 검증
  if (!myfile?.size) {
    alert("파일이 없습니다");
    return false;
  }

  // 5mb 용량 제한
  if (myfile.size > 5 * 1024 * 1024) {
    alert("파일용량이 너무 큽니다 [제한 5MB]");
    return false;
  }

  // 파일 확장자 제한
  if (!myfile.type.includes("jpeg") && !myfile.type.includes("png")) {
    alert("jpeg파일 또는 png파일만 업로드가 가능합니다");
    return false;
  }
  return true;
};
