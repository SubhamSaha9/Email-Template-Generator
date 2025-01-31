"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAppDispatch } from "@/lib/hooks";
import { setSelectedElement } from "@/lib/slice/dragdropSlice";
import { DialogDescription } from "@radix-ui/react-dialog";
import { CopyPlusIcon } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ViewHtmlDialog = ({
  openDialog,
  htmlCode,
  closeDialog,
}: {
  openDialog: boolean;
  htmlCode: any;
  closeDialog: (value: boolean) => void;
}) => {
  const dispatch = useAppDispatch();
  const handleCopyText = async () => {
    dispatch(setSelectedElement(null));
    await navigator.clipboard.writeText(htmlCode);
    toast.success("Copied to clipboard");
  };
  return (
    <div>
      <Dialog open={openDialog} onOpenChange={(v) => closeDialog(v)}>
        <DialogContent className="w-full h-auto max-w-2xl p-4">
          <DialogHeader className="mb-2">
            <DialogTitle asChild>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  HTML Generated Code 😎
                </h2>
              </div>
            </DialogTitle>
          </DialogHeader>
          <DialogDescription asChild>
            <div className="h-auto overflow-hidden rounded-md border">
              <div className="h-full overflow-auto border-2 border-dotted border-gray-400 rounded-md bg-gray-200">
                <SyntaxHighlighter
                  language="htmlbars"
                  style={vs}
                  showLineNumbers={true}
                >
                  {htmlCode}
                </SyntaxHighlighter>
              </div>
            </div>
          </DialogDescription>
          <DialogFooter className="sm:justify-start">
            <Button onClick={handleCopyText}>
              <CopyPlusIcon className="h-4 w-4" /> Copy
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ViewHtmlDialog;
