import { useState } from "react";
import ProductWriteContainer from "../../../../src/components/units/product/write/ProductWrite.container";

export default function ProductEditPage() {
  const [isEdit] = useState(true);
  return (
    <div>
      <ProductWriteContainer isEdit={isEdit} />
    </div>
  );
}
