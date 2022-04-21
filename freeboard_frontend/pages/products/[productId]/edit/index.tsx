import { useState } from "react";
import ProductWriteContainer from "../../../../src/components/units/product/write/ProductWrite.container";

export default function ProductEditPage() {
  const [isEdit] = useState(true);
  return (
    <div>
      수정페이지!!!
      <ProductWriteContainer isEdit={isEdit} />
    </div>
  );
}
