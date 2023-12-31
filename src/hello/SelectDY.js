import SelCss from "@/styles/Select.module.css";
const Sel = () => {
  const startYear = 1905;
  const endYear = 2023;

  const yearOptions = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => {
      const year = startYear + i;
      return (
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
  );

  return <select className={SelCss.month}>{yearOptions}</select>;
};
export default Sel;
