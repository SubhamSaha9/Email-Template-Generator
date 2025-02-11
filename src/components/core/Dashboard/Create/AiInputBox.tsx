"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAppSelector } from "@/lib/hooks";
import Prompt from "@/utils/Prompt";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AiInputBox = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>("");
  const { user } = useAppSelector((state) => state.auth);
  const handleGenerateResponse = async () => {
    const prompt = Prompt.EMAIL_PROMPT + "\n-" + userInput;
    setLoading(true);
    const toastId = toast.loading("Generating template. Please wait...");
    try {
      const options = {
        prompt: prompt,
        email: user.email,
        tId: "0",
      };
      const { data } = await axios.post("/api/ai-email-generate", options);
      console.log(data);
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      toast.dismiss(toastId);
      setLoading(false);
    }
  };
  return (
    <div className="mt-5">
      <Label className="mb-2">
        Provide details about the email template you'd like to create
      </Label>
      <Textarea
        placeholder="Enter your prompt here..."
        rows={5}
        className="text-xl"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <Button
        className="mt-7 w-full"
        disabled={!userInput || loading}
        onClick={handleGenerateResponse}
      >
        {loading ? "Generating..." : "GENERATE"}
      </Button>
    </div>
  );
};

export default AiInputBox;
