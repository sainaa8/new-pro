const Desc = (props) => {
  const { Fsize, text, txtcolor, width = "" } = props;
  return (
    <div
      class="desc"
      style={{ color: txtcolor, fontSize: Fsize, width: width }}
    >
      {text}
    </div>
  );
};
export default Desc;
