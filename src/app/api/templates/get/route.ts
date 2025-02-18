import { connect } from "@/config/database";
import Template from "@/models/templates";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge", 
  maxDuration: 10, 
};

export async function POST(req:NextRequest) {
    try {
        await connect();
        const {id} = await req.json();

        if(!id){
            return NextResponse.json({
                message: "Template ID is missing",
                success: false
            }, {status: 400});
        }

        const template = await Template.findById(id);
        if(!template){
            return NextResponse.json({
                message: "Template not found",
                success: false
            }, {status: 404});
        }

        return NextResponse.json({
                message: "Template fetched successfully",
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