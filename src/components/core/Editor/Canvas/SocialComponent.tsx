import React from "react";
import ImageComponent from "./ImageComponent";
import { ElementListInterface } from "@/utils/ElementList";

const SocialComponent = ({
  socialIcons,
  outerStyle,
  style,
}: Pick<ElementListInterface, "socialIcons" | "outerStyle" | "style">) => {
  return (
    <div style={outerStyle}>
      {socialIcons?.map((item, i) => (
        <ImageComponent
          key={i}
          imageUrl={item.icon}
          style={style}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default SocialComponent;
