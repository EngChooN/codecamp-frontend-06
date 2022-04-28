import { useMutation, useQuery } from "@apollo/client";
import ProductWritePresenter from "./ProductWrite.presenter";
import {
  CREATE_PRODUCT,
  FETCH_PRODUCT,
  UPDATE_PRODUCT,
} from "./ProductWrite.queries";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
// yup
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function ProductWriteContainer(props) {
  const router = useRouter();
  const { data: fetchProduct } = useQuery(FETCH_PRODUCT, {
    variables: {
      useditemId: router.query.productId,
    },
  });
  const [createUseditem] = useMutation(CREATE_PRODUCT);
  const [updateUseditem] = useMutation(UPDATE_PRODUCT);

  // 지도 위도 경도
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  // 지도에 쓸 주소
  const [address, setAddress] = useState("");

  // yup 스키마
  const schema = yup.object().shape({
    name: yup.string().required("빈칸은 ㄴㄴ").min(2, "최소 2자리 이상"),
    // contents: yup.string().required("빈칸은 ㄴㄴ"),
    price: yup.number().required("빈칸은ㄴㄴ").positive("숫자만 ㄱㄱ"),
    remarks: yup.string().required("빈칸은 ㄴㄴ"),
  });

  // 리액트-훅-폼
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    reset,
    getValues,
    formState,
  } = useForm({
    mode: "onChange",
    // yup
    resolver: yupResolver(schema),
  });

  // 해쉬태그
  const [hashArr, setHashArr] = useState([]);

  // 해쉬태그 작성 시
  const onKeyUpHashTag = (event) => {
    // 해쉬태그 작성 시, 스페이스바를 누르거나, 값이 빈값이면...
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);
      // 태그 하나 작성 후, 인풋창을 비워줌
      event.target.value = "";
    }
  };

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
              tags: hashArr,
              useditemAddress: {
                lat: Number(lat),
                lng: Number(lng),
                address: address,
              },
            },
          },
        });
        alert("상품등록!");
        router.push("/products/" + result.data.createUseditem._id);
      } catch (error) {
        alert(error);
      }
    } else {
      // 수정한 해쉬태그 (기존 해쉬 태그 + 내가 친 해쉬태크)
      const editArr = [...fetchProduct?.fetchUseditem.tags, ...hashArr];
      const updateVariables = {
        updateUseditemInput: {
          useditemAddress: {},
        },
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

      if (hashArr !== []) updateVariables.updateUseditemInput.tags = editArr;

      if (fetchProduct?.fetchUseditem.useditemAddress.address !== "") {
        updateVariables.updateUseditemInput.useditemAddress.address = address;
        updateVariables.updateUseditemInput.useditemAddress.lat = Number(lat);
        updateVariables.updateUseditemInput.useditemAddress.lng = Number(lng);
      }
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

  // 모달과 다음 주소===================
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    setAddress(data.address);
    // 컴플리트시 주소창만 닫히는데 모달창까지 같이 닫히게 하기 위해서
    onToggleModal();
  };
  // ========================================

  console.log(address);
  console.log(fetchProduct);

  return (
    <ProductWritePresenter
      onClickProductWrite={onClickProductWrite}
      register={register}
      handleSubmit={handleSubmit}
      onChangeContents={onChangeContents}
      data={fetchProduct}
      reset={reset}
      getValues={getValues}
      setValue={setValue}
      onKeyUpHashTag={onKeyUpHashTag}
      hashArr={hashArr}
      // 위도 경도
      setLat={setLat}
      setLng={setLng}
      // 모달과 주소
      isOpen={isOpen}
      onToggleModal={onToggleModal}
      handleComplete={handleComplete}
      // 지도에 쓸 주소
      address={address}
      // yup 에러
      formState={formState}
    />
  );
}
