import { aiChatSession } from "@/config/AIModel";
import { connect } from "@/config/database";
import Template from "@/models/templates";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function POST(req: NextRequest){
    try {
        const {prompt,email} = await req.json();
        if (!prompt || !email) {
            return NextResponse.json(
                {
                    success: false,
                    message: "All fields are required!",
                },
                { status: 403 }
            );
        }
        const result = await aiChatSession.sendMessage(prompt);
        const AIResponse = result.response.text();
        const token = req.cookies.get('token')?.value || ''
        if(!token){
            return NextResponse.json(
                {
                    success: false,
                    message: "Token not found",
                },
                { status: 401 }
            );
        }
        
        const user = await User.findOne({email: email});
        if(!user){
            return NextResponse.json(
                {
                    success: false,
                    message: "Token not found",
                },
                { status: 404 }
            );
        }

        const newTemplate = await Template.create({
            design:AIResponse,
            createdBy: user._id,
        })
        return NextResponse.json(
            {
              success: true,
              message: "Template created successfully.",
              data: newTemplate
            },
            { status: 200 }
        );
    } catch (error:any) {
        return NextResponse.json(
      { message: error.message, success: false },
      { status: 500 }
    );
    }
    
}