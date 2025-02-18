import { connect } from "@/config/database";
import Template from "@/models/templates";
import mongoose from "mongoose";
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
                message: "Please provide id",
                success: false
            }, {status: 400});
        }
        const mongoId = new mongoose.Types.ObjectId(id);
        const allTemplates = await Template.find({createdBy: mongoId}).select("-createdBy");

        return NextResponse.json({
                message: "Templates fetched successfully",
                success: true,
                data: allTemplates
            }, {status: 200});
    } catch (error:any) {
         return NextResponse.json(
              { message: error.message, success: false },
              { status: 500 }
        );
    }
}