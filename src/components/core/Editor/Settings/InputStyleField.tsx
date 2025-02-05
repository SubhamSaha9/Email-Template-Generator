import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const InputStyleField = ({
  label,
  value,
  handleStyleChange,
  type = "px",
}: {
  label: string;
  value: string;
  handleStyleChange: any;
  type: string;
}) => {
  const formatValue = (value: string) => {
    return Number(value.toString().replace(type, ""));
  };
  return (
    <div>
      <Label>{label}</Label>
      <div className="flex">
        <Input
          value={formatValue(value)}
          onChange={(e) => handleStyleChange(e.target.value + type)}
        />
        <h2 className="p-1.5 bg-gray-100 rounded-r-lg -ml-1">{type}</h2>
      </div>
    </div>
  );
};

export default InputStyleField;
