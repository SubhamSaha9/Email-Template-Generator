import React from "react";

const TextComponemt = ({ style, textarea, outerStyle }: any) => {
  return (
    <div style={outerStyle}>
      <h2 style={style}>{textarea}</h2>
    </div>
  );
};

export default TextComponemt;
