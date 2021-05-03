// import React from "react";
// import { Link, useParams } from "react-router-dom";

// export default function FlairBartenders(props) {
//   const { bartenders } = props
//   const { flair } = useParams()
//   if (bartenders.category === {flair}) {
//     console.log(bartenders)
//   }
  
//   console.log(bartenders.category)
//   if (!bartenders) {
//     return (
//       <>
//         <h3>No bartenders</h3>
//       </>
//     );
//   }

//   const flairBartendersJSX = bartenders.filter((bartender, index) => (
//     <React.Fragment key={index}>
//       <Link className="bartender" to={`/bartenders/${bartender.id}`}>
//         <img
//           className="bartender-image"
//           src={bartender.img_url}
//           alt={bartender.name}
//           width="20%"
//         />
//         <h3 className="bartender-name">{bartender.name}</h3>
//       </Link>
//     </React.Fragment>
//   ));
//   return (
//     <>
   
//     </>
//   );
// }
