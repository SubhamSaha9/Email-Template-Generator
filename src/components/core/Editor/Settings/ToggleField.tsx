import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import React from "react";

const ToggleField = ({
  label,
  value,
  handleStyleChange,
  options,
}: {
  label: string;
  value: string;
  handleStyleChange: any;
  options: any;
}) => {
  return (
    <div>
      <Label>{label}</Label>
      <ToggleGroup
        className="flex gap-4"
        type="single"
        defaultValue={value}
        onValueChange={(selectedValue) => handleStyleChange(selectedValue)}
      >
        {options.map((option: any, i: number) => (
          <ToggleGroupItem
            value={option.value}
            title={option.value}
            className={`w-1/2 ${label === "Text Style" && "text-2xl"}`}
            key={i}
          >
            <option.icon />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};

export default ToggleField;
