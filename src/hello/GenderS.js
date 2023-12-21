import GENCss from "@/styles/GenderS.module.css";
const Gender = (props) => {
  const { text, w } = props;
  return (
    <div className={GENCss.radio} style={{ width: w }}>
      {text}
      <input type="radio" />
    </div>
  );
};
export default Gender;
