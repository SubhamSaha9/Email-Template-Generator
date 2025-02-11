import { aiChatSession } from "@/config/AIModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try {
        const {prompt,email,tId} = await req.json();
        if (!prompt || !email || !tId) {
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
        console.log(AIResponse)
        return NextResponse.json(
            {
              success: true,
              message: "LoggedIn successfully.",
              data: JSON.parse(AIResponse)
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