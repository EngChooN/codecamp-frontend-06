export default function Input(props) {
  return (
    <input
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
    />
  );
}
