import inputCss from "@/styles/input.module.css";
const Number = (props) => {
  const { placeholder } = props;
  return (
    <div>
      <input
        style={{ fontFamily: "roboto" }}
        className={inputCss.one}
        placeholder={placeholder}
      />
    </div>
  );
};
export default Number;
