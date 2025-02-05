import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const ColorPickerField = ({ label, value, handleStyleChange }: any) => {
  return (
    <div>
      <Label htmlFor="">{label}</Label>
      <Input
        type="color"
        value={value}
        onChange={(e) => handleStyleChange(e.target.value)}
        className="cursor-pointer"
      />
    </div>
  );
};

export default ColorPickerField;
