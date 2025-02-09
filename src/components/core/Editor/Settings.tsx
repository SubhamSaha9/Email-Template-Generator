"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useEffect, useState } from "react";
import InputField from "./Settings/InputField";
import { setSelectedElement } from "@/lib/slice/dragdropSlice";
import ColorPickerField from "./Settings/ColorPickerField";
import InputStyleField from "./Settings/InputStyleField";
import SliderField from "./Settings/SliderField";
import TextAreaField from "./Settings/TextAreaField";
import ToggleField from "./Settings/ToggleField";
import {
  alignItemOptions,
  fontStyleOptions,
  fontWeightOptions,
  justifyContentOptions,
  objectFitOptions,
  textDecorOptions,
  textTransformOptions,
} from "@/utils/constants";
import DropDownField from "./Settings/DropDownField";
import ImageField from "./Settings/ImageField";

const Settings = () => {
  const { selectedElement } = useAppSelector((state) => state.dragDrop);
  const dispatch = useAppDispatch();
  const [element, setElement] = useState<any>();

  useEffect(() => {
    setElement(selectedElement?.layout?.[selectedElement?.index]);
  }, [selectedElement]);

  const onHandleInputChnage = (fieldName: string, value: any) => {
    let updatedData = { ...selectedElement };
    let updatedLayout = { ...updatedData.layout };

    if (
      typeof selectedElement.index !== "undefined" &&
      updatedLayout[selectedElement.index]
    ) {
      updatedLayout[selectedElement.index] = {
        ...updatedLayout[selectedElement.index],
        [fieldName]: value ? value : "",
      };
    }
    updatedData.layout = updatedLayout;
    dispatch(setSelectedElement(updatedData));
  };

  const handleStyleChange = (fieldname: string, value: any) => {
    let updatedData = {
      ...selectedElement,
      layout: {
        ...selectedElement.layout,
        [selectedElement.index]: {
          ...selectedElement.layout[selectedElement.index],
          style: {
            ...selectedElement.layout[selectedElement.index].style,
            [fieldname]: value,
          },
        },
      },
    };
    dispatch(setSelectedElement(updatedData));
  };

  const handleSocialIconChange = (
    index: number,
    value: any,
    fieldName: string
  ) => {
    let updatedData = {
      ...selectedElement,
      layout: {
        ...selectedElement.layout,
        [selectedElement.index]: {
          ...selectedElement.layout[selectedElement.index],
          socialIcons: selectedElement.layout[
            selectedElement.index
          ].socialIcons.map((item: any, i: number) => {
            if (i === index) {
              return {
                ...item,
                [fieldName]: value,
              };
            }
            return item;
          }),
        },
      },
    };
    dispatch(setSelectedElement(updatedData));
  };

  const handleOuterStyleChange = (fieldname: string, value: any) => {
    let updatedData = {
      ...selectedElement,
      layout: {
        ...selectedElement.layout,
        [selectedElement.index]: {
          ...selectedElement.layout[selectedElement.index],
          outerStyle: {
            ...selectedElement.layout[selectedElement.index].outerStyle,
            [fieldname]: value,
          },
        },
      },
    };
    dispatch(setSelectedElement(updatedData));
  };

  return (
    <div className="p-5 flex flex-col gap-4">
      <h2 className=" font-bold text-lg p-1 text-primary">Settings</h2>

      {element?.imageUrl !== undefined && (
        <ImageField
          label={"Image URL"}
          value={element?.imageUrl}
          onHandleInputChnage={(value: any) =>
            onHandleInputChnage("imageUrl", value as any)
          }
        />
      )}

      {element?.content !== undefined && (
        <InputField
          label={"Content"}
          value={element?.content}
          onHandleInputChnage={(value: any) =>
            onHandleInputChnage("content", value as any)
          }
        />
      )}

      {element?.textarea !== undefined && (
        <TextAreaField
          label={"Text"}
          value={element?.textarea}
          onHandleInputChnage={(value: any) =>
            onHandleInputChnage("textarea", value as any)
          }
        />
      )}

      {element?.url !== undefined && (
        <InputField
          label={"URL"}
          value={element?.url}
          onHandleInputChnage={(value: any) =>
            onHandleInputChnage("url", value as any)
          }
        />
      )}

      {element?.socialIcons !== undefined &&
        element?.socialIcons?.map((item: any, i: number) => (
          <div key={i} className="flex flex-col gap-2">
            <InputField
              label={`Icon ${i + 1}`}
              value={item.icon}
              onHandleInputChnage={(value: any) =>
                handleSocialIconChange(i, value, "icon")
              }
            />
            <InputField
              label={`URL ${i + 1}`}
              value={item.url}
              onHandleInputChnage={(value: any) =>
                handleSocialIconChange(i, value, "url")
              }
            />
          </div>
        ))}
      {element?.style && (
        <>
          {element?.style?.textAlign && (
            <ToggleField
              label={"Align Text"}
              value={element?.style?.textAlign}
              handleStyleChange={(value: any) =>
                handleStyleChange("textAlign", value)
              }
              options={alignItemOptions}
            />
          )}

          {element?.style?.width && (
            <SliderField
              label={"Width"}
              value={element?.style?.width}
              handleStyleChange={(value: any) =>
                handleStyleChange("width", value)
              }
              type="%"
              max={100}
            />
          )}

          {element?.style?.objectFit && (
            <DropDownField
              label={"Object Fit"}
              value={element?.style?.objectFit}
              handleStyleChange={(value: any) =>
                handleStyleChange("objectFit", value)
              }
              options={objectFitOptions}
            />
          )}

          {element?.style?.backgroundColor && (
            <ColorPickerField
              label={"Background Color"}
              value={element?.style?.backgroundColor}
              handleStyleChange={(value: any) =>
                handleStyleChange("backgroundColor", value)
              }
            />
          )}

          {element?.style?.color && (
            <ColorPickerField
              label={"Text Color"}
              value={element?.style?.color}
              handleStyleChange={(value: any) =>
                handleStyleChange("color", value)
              }
            />
          )}

          {element?.style?.fontSize && (
            <InputStyleField
              label={"Font Size"}
              value={element?.style?.fontSize}
              handleStyleChange={(value: any) =>
                handleStyleChange("fontSize", value)
              }
              type="px"
            />
          )}

          {element?.style?.fontWeight && (
            <DropDownField
              label={"Font Weight"}
              value={element?.style?.fontWeight}
              handleStyleChange={(value: any) =>
                handleStyleChange("fontWeight", value)
              }
              options={fontWeightOptions}
            />
          )}

          {element?.style?.fontStyle && (
            <ToggleField
              label={"Font Style"}
              value={element?.style?.fontStyle}
              handleStyleChange={(value: any) =>
                handleStyleChange("fontStyle", value)
              }
              options={fontStyleOptions}
            />
          )}

          {element?.style?.textDecoration && (
            <DropDownField
              label={"Text Decoration"}
              value={element?.style?.textDecoration}
              handleStyleChange={(value: any) =>
                handleStyleChange("textDecoration", value)
              }
              options={textDecorOptions}
            />
          )}

          {element?.style?.textTransform && (
            <ToggleField
              label={"Text Style"}
              value={element?.style?.textTransform}
              handleStyleChange={(value: any) =>
                handleStyleChange("textTransform", value)
              }
              options={textTransformOptions}
            />
          )}

          {element?.style?.padding && (
            <InputStyleField
              label={"Padding"}
              value={element?.style?.padding}
              handleStyleChange={(value: any) =>
                handleStyleChange("padding", value)
              }
              type="px"
            />
          )}

          {element?.style?.margin && (
            <InputStyleField
              label={"Margin"}
              value={element?.style?.margin}
              handleStyleChange={(value: any) =>
                handleStyleChange("margin", value)
              }
              type="px"
            />
          )}

          {element?.style?.borderRadius && (
            <SliderField
              label={"Border Radius"}
              value={element?.style?.borderRadius}
              handleStyleChange={(value: any) =>
                handleStyleChange("borderRadius", value)
              }
              type="px"
              max={50}
            />
          )}
        </>
      )}
      {element?.outerStyle !== undefined && (
        <div>
          {element.type !== "socialIcons" && (
            <h2 className="font-bold mb-2">Outer Style</h2>
          )}
          {element?.outerStyle?.backgroundColor && (
            <ColorPickerField
              label={"Background Color"}
              value={element?.outerStyle?.backgroundColor}
              handleStyleChange={(value: any) =>
                handleOuterStyleChange("backgroundColor", value)
              }
            />
          )}
          {element?.outerStyle?.justifyContent && (
            <ToggleField
              label={"Aign Item"}
              value={element?.outerStyle?.justifyContent}
              handleStyleChange={(value: any) =>
                handleOuterStyleChange("justifyContent", value)
              }
              options={alignItemOptions}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Settings;
