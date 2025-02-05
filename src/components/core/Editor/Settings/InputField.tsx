import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const InputField = ({ label, value, onHandleInputChnage }: any) => {
  return (
    <div>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={(e) => onHandleInputChnage(e.target.value)}
        placeholder="enter content"
      />
    </div>
  );
};

export default InputField;
