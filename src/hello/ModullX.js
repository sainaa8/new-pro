import Link from "next/link";
const XX = () => {
  return (
    <Link href="/">
      <div
        style={{
          position: "absolute",
          color: "grey",
          fontSize: "40px",
          right: "20px",
          top: "0px",
        }}
      >
        &#10005;
      </div>
    </Link>
  );
};
export default XX;
