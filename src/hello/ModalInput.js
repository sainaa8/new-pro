import MOD from"@/styles/Modall.module.css"
const MODinput = (props) => {
  const { placeholder, width, he, type } = props;
  return (
    <div>
      <input className={MOD.inputAss} style={{ width: width, height: he }} type={type} placeholder={placeholder} />
    </div>
  );
};
export default MODinput;
