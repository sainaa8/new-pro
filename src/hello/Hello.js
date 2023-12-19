// import React from "react";
 
// export const ChessSquare = ({ indeces }) => {
 
//   const { id, ind } = indeces;
//   return <div className={(id + ind) % 2 ? "black" : "white"}>{id}</div>;
// };
 
// export default ChessSquare;
// //
// import ChessSquare from "@/hello/Hello";
 
// export default function Home() {
//   // const arr = ["", "", "", "", "", "", ","];
 
//   return (
//     <div className="outbox">
//       <div className="box">
//         {new Array(8).fill(new Array(8).fill("")).map((innerArr, ind) => {
//           return (
//             <div key={ind} className="sequence">
//               {innerArr.map((el, id) => (
//                 <ChessSquare indeces={{ id, ind }} key={id} />
//               ))}    
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
