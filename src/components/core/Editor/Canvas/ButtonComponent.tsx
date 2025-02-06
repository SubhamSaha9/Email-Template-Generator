import React from "react";

const ButtonComponent = ({ style, content, url, outerStyle }: any) => {
  return (
    <div style={outerStyle}>
      <a href={url} target="_blank" style={style}>
        {content}
      </a>
    </div>
  );
};

export default ButtonComponent;
