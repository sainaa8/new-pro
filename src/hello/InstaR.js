import INSTAcss from "@/styles/InstaR.module.css";
import Image from "next/image";
const Instagram = (props) => {
  const { imgsrc = "", text } = props;
  return (
    <div className={INSTAcss.middle}>
      <Image src={imgsrc} width={30} height={30} alt="logo" />
      {text}
    </div>
  );
};
export default Instagram;
