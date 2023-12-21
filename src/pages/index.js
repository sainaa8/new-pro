import Number from "@/hello/hello1";
import Password from "@/hello/hello2";
import Button from "@/hello/Hello3";
// import Forgetten from "@/hello/Hello4";
import Hr from "@/hello/Hello5";
// import Create from "@/hello/Hello6";
import Desc from "@/hello/Description";

import Link from "next/link";
export default function Home() {
  return (
    <div class="layout">
      <div class="facebook">
        <Desc text={"Facebook"} txtcolor="blue" Fsize="40px" />
        <Desc
          text={
            "Facebook helps you connect and share with the people in your life."
          }
          Fsize="30px"
          width="520px"
        />
      </div>
      <div class="container">
        <Number placeholder="Email address or phone number" />
        <Password />
        <Button
          text={"Log in"}
          bg=" rgb(36, 120, 247)"
          radius="6px"
          width="350px"
          he="50px"
          txtcolor="white"
          Mtop="20px"
          Fsize="25px"
        />
        <Button
          text={"Forgot password?"}
          txtcolor="rgb(36, 120, 247)"
          Mtop="20px"
        />
        <Hr />
        <Link href="/modul">
          <Button
            text={"Create new account"}
            bg="rgb(11, 208, 11)"
            radius="6px"
            width="250px"
            he="60px"
            Mtop="23px"
            Fsize="25px"
            txtcolor="white"
          />
        </Link>
      </div>
    </div>
  );
}
// import Image from "next/image";
// import BigCss from "@/styles/InstaR.module.css";
// import Instagram from "@/hello/InstaR";
// const coms = [
//   { component: "Instagram", pars: { imgsrc: "/home.png", text: "Home" } },
//   { component: "Instagram", pars: { imgsrc: "/search.png", text: "Search" } },
//   { component: "Instagram", pars: { imgsrc: "/ex2.png", text: "Explore" } },
//   { component: "Instagram", pars: { imgsrc: "/reels.png", text: "Reels" } },
//   { component: "Instagram", pars: { imgsrc: "/mes.png", text: "Messeges" } },
//   {
//     component: "Instagram",
//     pars: { imgsrc: "/love.png", text: "Notification" },
//   },
//   { component: "Instagram", pars: { imgsrc: "/plus.png", text: "Create" } },
//   { component: "Instagram", pars: { imgsrc: "/itachi.jpeg", text: "Profile" } },
// ];
// const com2 = [
//   { component: "Instagram", pars: { imgsrc: "/fuck.png", text: "Threads" } },
//   { component: "Instagram", pars: { imgsrc: "/more.png", text: "More" } },
// ];

// export default function Home() {
//   return (
//     <div className={BigCss.body}>
//       <div className={BigCss.container}>
//         <div>
//           <Image src="/insta.png" width={150} height={50} alt="logo" />
//         </div>
//         <div className={BigCss.middleBG}>
//           {coms.map((el, i) => {
//             return (
//               <Instagram key={i} imgsrc={el.pars.imgsrc} text={el.pars.text} />
//             );
//           })}
//         </div>
//         <div className={BigCss.fuck}>
//           {com2.map((el, i) => {
//             return (
//               <Instagram key={i} imgsrc={el.pars.imgsrc} text={el.pars.text} />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
