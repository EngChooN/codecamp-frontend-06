import { Rate, Calendar } from "antd";
import { DatePicker, Space } from "antd";
import ReactPlayer from "react-player";
import { useState } from "react";
import moment from "moment";

export default function Quiz11() {
  const [value, setValue] = useState(3);

  const handleChange = (value) => {
    setValue(value);
  };

  //   function onPanelChange(value, mode) {
  //     console.log(value, mode);
  //   }

  // const [valueC, setValueC] = useState(moment("2022-03-28"));

  // const onSelect = (valueC: any) => {
  //   setValueC({
  //     value: valueC,
  //     selectedValue: valueC,
  //   });
  // };

  // const onPanelChange = (valueC) => {
  //   setValueC(valueC);
  // };

  const dateFormat = "YYYY/MM/DD";

  return (
    <div>
      {/* 별점부분 */}
      <Rate onChange={handleChange} value={value} />
      {/* 달력부분 */}
      {/* <Calendar fullscreen={false} onPanelChange={onPanelChange} /> */}
      {/* <Calendar
        value={valueC}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
      /> */}
      <Space direction="vertical" size={12}>
        <DatePicker
          defaultValue={moment("2015/01/01", dateFormat)}
          format={dateFormat}
        />
      </Space>
      {/* 플레이어부분 */}
      <ReactPlayer
        url="https://www.youtube.com/watch?v=jg2ha2RIWN0&t=154s"
        width={1280}
        height={720}
      />
    </div>
  );
}
