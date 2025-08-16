import React from "react";
import leftarrow from "../assets/left-arrow.png";

function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <span className="breadcrumb-link">Candidates</span>{" "}
      <span className="leftarrow">
        <img src={leftarrow} width="7px" height="11px" />
      </span>{" "}
      <span className="link">Robert Hardy</span>
      <span className="link-number">ID - 231</span>
    </div>
  );
}

export default Breadcrumb;
