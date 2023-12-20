import ModalCss from "@/styles/Modall.module.css";

import SignUP from "@/hello/ModulSignUp";
import XX from "@/hello/ModullX";
import Link from "next/link";
import MODinput from "@/hello/ModalInput";

export default function Modul() {
  return (
    <div className={ModalCss.container}>
      <div className={ModalCss.con}>
        <SignUP text={"Sign Up"} Fsize="30px" clr="black" />
        <SignUP text={"It's quick and easy."} Fsize="20px" clr="grey" />
        
          <XX />
      </div>
      <div className={ModalCss.bottomDiv}>
        <div className={ModalCss.topInputs}>
          <MODinput placeholder="First name" width="180px" he="40px" />
          <MODinput placeholder="Last name" width="180px" he="40px" />
        </div>
        <div className={ModalCss.bottomInputs}>
          <MODinput
            placeholder="mobile number or phone number"
            width="100%"
            he="40px"
          />
          <MODinput placeholder="New password" width="100%" he="40px" />
        </div>
      </div>
    </div>
  );
}
