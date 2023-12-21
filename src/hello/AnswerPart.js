import AnsCss from "@/styles/AnswerPart.module.css";
const Ans = (props) => {
  const { text } = props;
  return <div className={AnsCss.Ans}>{text} ?</div>;
};
export default Ans;
