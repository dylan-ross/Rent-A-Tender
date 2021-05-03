import { useState } from "react";
import { Link } from "react-router-dom";
import "./Bartenders.css";

export default function Bartenders(props) {
  const { bartenders } = props;
  console.log(bartenders);

  if (!bartenders) {
    return (
      <>
        <h3>No bartenders</h3>
      </>
    );
  }

  const bartendersJSX = bartenders.map((bartender, index) => (
    <div>
      <Link className="bartender" to={`/bartenders/${bartender.id}`}>
        <img
          className="bartender-image"
          src={bartender.img_url}
          alt={bartender.name}
          width="20%"
        />
        <h3 className="bartender-name">{bartender.name}</h3>
      </Link>
    </div>
  ));

  return (
    <div className="bartender-screen-container">
      <h3 className="bartenders-title">Bartenders</h3>
      <div>{bartendersJSX}</div>
    </div>
  )
}
