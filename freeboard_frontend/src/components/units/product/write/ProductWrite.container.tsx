import { useMutation, useQuery } from "@apollo/client";
import ProductWritePresenter from "./ProductWrite.presenter";
import {
  CREATE_PRODUCT,
  FETCH_PRODUCT,
  UPDATE_PRODUCT,
} from "./ProductWrite.queries";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function ProductWriteContainer(props) {
  const router = useRouter();
  const { data: fetchProduct } = useQuery(FETCH_PRODUCT, {
    variables: {
      useditemId: router.query.productId,
    },
  });
  const [createUseditem] = useMutation(CREATE_PRODUCT);
  const [updateUseditem] = useMutation(UPDATE_PRODUCT);
  const { register, handleSubmit, setValue, trigger, reset } = useForm({
    mode: "onChange",
  });

  const onClickProductWrite = async (data) => {
    console.log(fetchProduct?.fetchUseditem?.name);
    // 새로 등록하는 글이면 상품이름을 fetch해도 안나오고, 반대로 수정글이면 상품이름을 fetch할 수 있으므로, 조건을 주어 등록 수정 분기를 나눈다!!
    if (fetchProduct?.fetchUseditem?.name === undefined) {
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
    } else {
      const updateVariables = {
        updateUseditemInput: {},
        useditemId: router.query.productId,
      };

      if (data.name !== "")
        updateVariables.updateUseditemInput.name = data.name;
      if (data.contents !== "")
        updateVariables.updateUseditemInput.contents = data.contents;
      if (data.price !== "")
        updateVariables.updateUseditemInput.price = Number(data.price);
      if (data.remarks !== "")
        updateVariables.updateUseditemInput.remarks = data.remarks;
      try {
        const result2 = await updateUseditem({
          variables: updateVariables,
        });
        alert("상품정보 업데이트!!!");
        router.push("/products/" + router.query.productId);
      } catch (error) {
        alert(error);
      }
    }
  };

  const onChangeContents = (value) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  return (
    <ProductWritePresenter
      onClickProductWrite={onClickProductWrite}
      register={register}
      handleSubmit={handleSubmit}
      onChangeContents={onChangeContents}
      data={fetchProduct}
      isEdit={props.isEdit}
      reset={reset}
      setValue={setValue}
    />
  );
}
