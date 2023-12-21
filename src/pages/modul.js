import ModalCss from "@/styles/Modall.module.css";
import SelectCss from "@/styles/Select.module.css";
import SignUP from "@/hello/ModulSignUp";
import XX from "@/hello/ModullX";
import Gcss from "@/styles/GenderS.module.css";

import MODinput from "@/hello/ModalInput";
import Ans from "@/hello/AnswerPart";
import Select from "@/hello/Select";
import Sel from "@/hello/SelectDY";
import SelDay from "@/hello/SelectDay";
import Gender from "@/hello/GenderS";
import SIG from "@/hello/SignUpBtn";
export default function Modul() {
  const months = [
    "Jan",
    "Feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oc",
    "now",
    "dec",
  ];

  // const days = [1, 2, 3, 4, 5];
  // const years = [
  //   1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911,
  //   1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923,
  //   1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935,
  //   1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947,
  //   1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959,
  //   1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971,
  //   1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983,
  //   1984, 1985, 1986, 1987, 1988, 1989, 1990,

  //   1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002,
  //   2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,

  //   2011, 2012, 2013,

  //   2014,

  //   2015,

  //   2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
  // ];
  return (
    <div className={ModalCss.BigLayout}>
      <div className={ModalCss.container}>
        <div className={ModalCss.con}>
          <SignUP text={"Sign Up"} Fsize="30px" clr="black" />
          <SignUP text={"It's quick and easy."} Fsize="20px" clr="grey" />

          <XX />
        </div>
        <div className={ModalCss.bottomDiv}>
          <div className={ModalCss.topInputs}>
            <MODinput
              placeholder="First name"
              type="text"
              width="180px"
              he="40px"
            />
            <MODinput
              placeholder="Last name"
              type="text"
              width="180px"
              he="40px"
            />
          </div>
          <div className={ModalCss.bottomInputs}>
            <MODinput
              type="text"
              placeholder="mobile number or phone number"
              width="100%"
              he="40px"
            />
            <MODinput
              type="password"
              placeholder="New password"
              width="100%"
              he="40px"
            />
          </div>
          <Ans text={"Date of birth"} />
          <div className={SelectCss.parentOfSelect}>
            <Select options={months} />
            <SelDay />
            <Sel />
          </div>
          <Ans text={"Gender"} />
          <div className={Gcss.ParentOfGender}>
            <Gender text={"Female"} w="130px" />
            <Gender text={"male"} w="110px" />
            <Gender text={"Gustom"} w="130px" />
          </div>
          <SIG/>
        </div>
      </div>
    </div>
  );
}
