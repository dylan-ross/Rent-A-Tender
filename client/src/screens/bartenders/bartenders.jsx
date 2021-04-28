import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Bartenders.css";
import Layout from "../../components/layout/Layout";
import Search from "../../components/search/Search";
import Bartender from "../../components/bartender/Bartender";
import { bartenders, currentUser } from "../../services/bartenders";

const Bartenders = (props) => {
  const [queriedBartenders, setQueriedBartenders] = useState([]);
  const { bartenders, currentUser } = props;
  console.log(bartenders);
  const handleSearch = (event) => {
    const newQueriedBartenders = bartenders.filter((bartender) =>
      bartender.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQueriedBartenders(newQueriedBartenders);
  };

  if (!bartenders) {
    return (
      <>
        <h3>Hello</h3>
      </>
    );
  }

//   const bartendersJSX = {bartenders.map((bartender, index) => (
//     <React.Fragment key={index}>
//       <Link
//         className="bartender"
//         to={`/bartenders/${bartender.id}`}
//       >
//         <img className="bartender-image" src={props.img_url} alt={props.name} />
//         <h3 className="bartender-name">{props.name}</h3>
//       </Link>
//     </React.Fragment>
//   ))
// };

  const handleSubmit = (event) => event.preventDefault();

  return (
    <Layout currentUser={currentUser}>
      <div className="bartender-screen-container">
        <div className="header">
          <h3 className="bartenders-title">Bartenders</h3>
          <Search onSubmit={handleSubmit} onChange={handleSearch} />
        </div>
        {bartenders.map((bartender, index) => (
    <React.Fragment key={index}>
      <Link
        className="bartender"
        to={`/bartenders/${bartender.id}`}
      >
        <img className="bartender-image" src={bartender.img_url} alt={bartender.name} />
        <h3 className="bartender-name">{bartender.name}</h3>
      </Link>
    </React.Fragment>
  ))
}
      </div>
    </Layout>
  );
};

export default Bartenders;
