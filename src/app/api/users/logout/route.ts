import { NextResponse } from "next/server";

export const config = {
  runtime: "edge", 
  maxDuration: 10, 
};

export async function GET() {
    try {
        const response = NextResponse.json({
                message: "Logout successful",
                success: true,
            }, {status: 200}
        )
        response.cookies.set("token", "",{
                httpOnly: true, expires: new Date(0)
            });
        return response;
    } catch (error: any) {
        return NextResponse.json({
            message: error.message,
            success: false
        }, { status: 500 });
    }
}

