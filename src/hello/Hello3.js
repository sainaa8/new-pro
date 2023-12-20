import BtnCss from "@/styles/button.module.css";
const Button = (props) => {
  const {
    text = "",
    he = "",
    width = "",
    bg = "",
    radius = "",
    txtcolor = "",
    Mtop = "",
    Fsize = "",
  } = props;
  return (
    <div
      style={{
        height: he,
        width: width,
        backgroundColor: bg,
        borderRadius: radius,
        color: txtcolor,
        marginTop: Mtop,
        fontSize: Fsize,
      }}
      className={BtnCss.btn}
    >
      {text}
    </div>
  );
};
export default Button;
