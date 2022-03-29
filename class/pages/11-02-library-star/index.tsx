import { Rate } from "antd";
import { useState } from "react";

export default function LibraryStarPage() {
  const [value, setValue] = useState(0);

  const handleChange = (value) => {
    setValue(value);
  };
  console.log(value);

  return <Rate onChange={handleChange} value={value} />;
}
