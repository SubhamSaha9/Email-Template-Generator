import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import React from "react";

const SliderField = ({
  label,
  value,
  handleStyleChange,
  type = "px",
  max,
}: {
  label: string;
  value: string;
  handleStyleChange: any;
  type: string;
  max: number;
}) => {
  const formatValue = (value: string) => {
    return Number(value.toString().replace(type, ""));
  };
  return (
    <div>
      <Label>
        {label} ({value})
      </Label>
      <Slider
        defaultValue={[formatValue(value)]}
        max={max}
        step={1}
        onValueChange={(v) => handleStyleChange(v + type)}
      />
    </div>
  );
};

export default SliderField;
