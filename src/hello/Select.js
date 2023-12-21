import Sel from "@/styles/Select.module.css";
const Select = ({ options }) => {
  return (
    <select className={Sel.selected}>
      {options.map((month, index) => (
        <option key={index}>{month}</option>
      ))}
    </select>
  );
};
export default Select;
