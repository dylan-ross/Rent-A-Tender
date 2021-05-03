// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { bartenderCategory } from "../../services/bartenders";
// import "./Category.css";
// const Category = (props) => {
//   const [bartenderCategories, setBartenderCategories] = useState([{}]);
//   const { bartenders } = props;
//   const { category } = useParams();
//   console.log(category)
  
//   useEffect(() => {
//     const bartenderCategory = async () => {
//       const bartenderData = await bartenderCategory(category);
//       setBartenderCategories(bartenderData);
//     };
//     bartenderCategory();
//   }, [category]);
//   if (!bartenderCategories.data) {
//     return <>not a category</>;
//   }
//   console.log(bartenderCategories);

//   const categoryJSX = bartenderCategories.map((bartender, index) => (
//     <React.Fragment key={index}>
//       <Link className="bartender" to={`/bartenders/${bartender.id}`}>
//         <img
//           className="bartender-image"
//           src={bartender.img_url}
//           alt={bartender.name}
//         />
//         <h3 className="bartender-name">{bartender.name}</h3>
//       </Link>
//     </React.Fragment>
//   ));

//   return (
//     <div className="bartender-category">
//       <h1 id="category">{category}</h1>
//       <div className="category-bartenders">
//         <div>{categoryJSX}</div>
//       </div>
//     </div>
//   );
// };

// export default Category;
