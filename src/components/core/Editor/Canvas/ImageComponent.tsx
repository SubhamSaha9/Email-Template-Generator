import React from "react";

const ImageComponent = ({ style, outerStyle, imageUrl, url }: any) => {
  return (
    <div>
      {url === "" || url === "#" || !url?.includes("https://") ? (
        <div style={outerStyle}>
          <img
            src={imageUrl ? imageUrl : "/image.png"}
            alt="Image"
            style={style}
          />
        </div>
      ) : (
        <a
          href={url}
          style={outerStyle}
          target={url !== "#" && url !== "" ? "_blank" : undefined}
        >
          <img
            src={imageUrl ? imageUrl : "/image.png"}
            alt="Image"
            style={style}
          />
        </a>
      )}
    </div>
  );
};

export default ImageComponent;
