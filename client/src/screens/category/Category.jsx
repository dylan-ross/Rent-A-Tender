import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { bartenderCategory } from "../../services/bartenders";
import "./Category.css";
const Category = (props) => {
  const [bartenderCategories, setBartenderCategories] = useState([{}]);
  const { bartenders } = props;
  const { name } = useParams();
  // console.log(category)
  

  // const bartenderCategory = async () => {
  //   const bartenderData = await bartenderCategory(name);
  //   setBartenderCategories(bartenderData);
  //   console.log(bartenderCategories)};
  useEffect(() => {
    const bartenderCategory = async () => {
      const bartenderData = await bartenderCategory(name);
      setBartenderCategories(bartenderData);
      console.log(bartenderCategories)
    };
    bartenderCategory();
  }, [name]);
  if (!bartenderCategories.data) {
    return <>not a category</>;
  }
  console.log(bartenderCategories.data);

  const categoryJSX = bartenderCategories.map((bartender, index) => (
    <React.Fragment key={index}>
      <Link className="bartender" to={`/bartenders/${bartender.id}`}>
        <img
          className="bartender-image"
          src={bartender.img_url}
          alt={bartender.name}
        />
        <h3 className="bartender-name">{bartender.name}</h3>
      </Link>
    </React.Fragment>
  ));

  return (
    <div className="bartender-category">
      <h1 id="category">{name}</h1>
      <div className="category-bartenders">
        <div>{categoryJSX}</div>
      </div>
    </div>
  );
};

export default Category;
