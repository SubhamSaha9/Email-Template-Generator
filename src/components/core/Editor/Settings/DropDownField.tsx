import { Label } from "@/components/ui/label";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DropDownField = ({
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
      <Select defaultValue={value} onValueChange={(v) => handleStyleChange(v)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={value} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option: any, i: number) => (
            <SelectItem value={option} key={i}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DropDownField;
