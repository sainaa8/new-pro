import MOD from"@/styles/Modall.module.css"
const MODinput = (props) => {
  const { placeholder, width, he } = props;
  return (
    <div>
      <input className={MOD.inputAss} style={{ width: width, height: he }} placeholder={placeholder} />
    </div>
  );
};
export default MODinput;
