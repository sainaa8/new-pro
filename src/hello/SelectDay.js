import SelCss from "@/styles/Select.module.css";
const SelDay = () => {
  const startYear = 1;
  const endYear = 31;

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
export default SelDay;
