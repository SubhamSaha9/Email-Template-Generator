import { Columns, Columns2, Columns3, Columns4, LucideProps, RectangleHorizontal } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";


export interface LayoutListsInterface extends Record<string, any> {
  label: string;
  type: string;
  numOfCol: number;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}
export default [
    {
        label: 'Column',
        type: 'column',
        numOfCol: 1,
        icon: RectangleHorizontal
    },
    {
        label: '2 Column',
        type: 'column',
        numOfCol: 2,
        icon: Columns2
    },
    {
        label: '3 Column',
        type: 'column',
        numOfCol: 3,
        icon: Columns3
    },
    {
        label: '4 Column',
        type: 'column',
        numOfCol: 4,
        icon: Columns4
    }
]