import React from "react";

const LinkComponent = ({ style, textarea, outerStyle, url }: any) => {
  return (
    <div style={outerStyle}>
      {!url?.includes("https://") ? (
        <h2 style={style}>{textarea}</h2>
      ) : (
        <a href={url} style={style}>
          {textarea}
        </a>
      )}
    </div>
  );
};

export default LinkComponent;
