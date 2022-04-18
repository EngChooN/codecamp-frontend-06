import { useMutation } from "@apollo/client";
import ProductWritePresenter from "./ProductWrite.presenter";
import { CREATE_PRODUCT } from "./ProductWrite.queries";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function ProductWriteContainer() {
  const [createUseditem] = useMutation(CREATE_PRODUCT);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onClickProductWrite = async (data) => {
    console.log(data);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            contents: data.contents,
            price: Number(data.price),
            remarks: data.remarks,
          },
        },
      });
      alert("상품등록!");
      router.push("/products/" + result.data.createUseditem._id);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ProductWritePresenter
      onClickProductWrite={onClickProductWrite}
      register={register}
      handleSubmit={handleSubmit}
    />
  );
}
