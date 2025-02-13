import Template from "@/models/templates";
import { NextRequest, NextResponse } from "next/server";

export async function   PUT(req:NextRequest) {
    try {
        const {id, design} = await req.json();

        if(!id || !design){
            return NextResponse.json({
                message: "All fields are required",
                success: false
            }, {status: 400});
        }

        const template = await Template.findByIdAndUpdate(id, {design: design}, {new: true});
        return NextResponse.json({
                message: "Template updated successfully",
                success: true,
                data: template
            }, {status: 200});
    } catch (error:any) {
         return NextResponse.json(
              { message: error.message, success: false },
              { status: 500 }
        );
    }
}