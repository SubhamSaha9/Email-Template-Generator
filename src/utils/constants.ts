import { AlignCenter, AlignLeft, AlignRight, CaseLower, CaseSensitive, CaseUpper, Columns2, Italic, SquareSplitVertical, Type } from "lucide-react";

export const alignItemOptions = [
    {
        value:"left",
        icon: AlignLeft,
    },
    {
        value:"center",
        icon: AlignCenter,
    },
    {
        value:"right",
        icon: AlignRight,
    },
];

export const textTransformOptions = [
    {
        value:"uppercase",
        icon:CaseUpper
    },
    {
        value:"lowercase",
        icon: CaseLower
    },
    {
        value:"capitalize",
        icon: CaseSensitive
    },
];

export const justifyContentOptions = [
    {
        value:"flex-start",
        icon: AlignLeft
    },
    {
        value:"center",
        icon: AlignCenter
    },
    {
        value:"flex-end",
        icon: AlignRight
    },
    {
        value:"space-between",
        icon: SquareSplitVertical
    },
    {
        value:"space-around",
        icon: Columns2
    }
];

export const fontWeightOptions = ["normal", "bold", "bolder", "lighter"];

export const fontStyleOptions = [
    {
        value:"normal",
        icon: Type
    },
    {
        value:"italic",
        icon: Italic
    }
];

export const textDecorOptions = ["none", "underline", "underline dotted", "underline double", "underline wavy", "overline", "line-through"];

export const objectFitOptions = [ "none", "fill", "contain", "cover","scale-down"];