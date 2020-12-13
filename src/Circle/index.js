import React from "react";

import "./style.css";

function Circle({ children, color, ...otherProps }) {
  return (
    <div className="circle" style={{ backgroundColor: color }} {...otherProps}>
      {children}
    </div>
  );
}

export default Circle;
