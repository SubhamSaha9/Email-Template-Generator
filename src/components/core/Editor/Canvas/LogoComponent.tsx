import React from "react";

const LogoComponent = ({ style, outerStyle, imageUrl }: any) => {
  return (
    <div style={outerStyle}>
      <img src={imageUrl} alt="logo" style={style} />
    </div>
  );
};

export default LogoComponent;
