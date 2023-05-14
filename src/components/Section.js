import React from "react";
import "../styles/Section.css";
function Section({ Icon, title, color, selected }) {
  return (
    <div className="section--box">
      {" "}
      <div
        className={`section ${selected && "section--selected"}`}
        style={{
          borderBottom: `1px solid ${color}`,
          color: `${selected && color}`,
        }}
      >
        <Icon fontSize="small" />
        <p> {title}</p>
      </div>
    </div>
  );
}

export default Section;
