import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const TextAreaField = ({
  label,
  value,
  onHandleInputChnage,
}: {
  label: string;
  value: string;
  onHandleInputChnage: any;
}) => {
  return (
    <div>
      <Label>{label}</Label>
      <Textarea
        value={value}
        onChange={(e) => onHandleInputChnage(e.target.value)}
      />
    </div>
  );
};

export default TextAreaField;
