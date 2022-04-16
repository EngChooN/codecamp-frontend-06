import { useForm } from "react-hook-form";

interface IFormValues {
  Writer?: string;
  title?: string;
  contents?: string;
}
export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm();

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  console.log("리랜더링 쳌!");
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("Writer")} />
      제목: <input type="text" {...register("Title")} />
      내용: <input type="text" {...register("Contents")} />
      <button>등록하기</button>
    </form>
  );
}
