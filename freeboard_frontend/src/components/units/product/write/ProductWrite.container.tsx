import { useMutation, useQuery } from "@apollo/client";
import ProductWritePresenter from "./ProductWrite.presenter";
import { CREATE_PRODUCT, FETCH_PRODUCT } from "./ProductWrite.queries";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProductWriteContainer(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      useditemId: router.query.productId,
    },
  });
  const [createUseditem] = useMutation(CREATE_PRODUCT);
  const { register, handleSubmit, setValue, trigger } = useForm();

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

  const onChangeContents = (value) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickProductUpdate = (data) => {
    console.log(data);
  };

  return (
    <ProductWritePresenter
      onClickProductWrite={onClickProductWrite}
      register={register}
      handleSubmit={handleSubmit}
      onChangeContents={onChangeContents}
      data={data}
      isEdit={props.isEdit}
      onClickProductUpdate={onClickProductUpdate}
    />
  );
}
