import { connect } from "@/config/database";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'

export const config = {
  runtime: "edge", 
  maxDuration: 10, 
};

export async function POST(request: NextRequest) {
    try {
        await connect()
        const { firstName, lastName, email, password } = await request.json();
        if (!firstName || !lastName || !email || !password) {
            return NextResponse.json({
                success: false,
                message: "All fields are required!",
            }, { status: 400 });
        }

        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return NextResponse.json({
                success: false,
                message: "User already exists"
            }, { status: 400 });
        }

        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
        })

        user.password = undefined;

        return NextResponse.json({
            message: "User created successfully",
            success: true,
        }, { status: 200 });

    } catch (error: any) {
        return NextResponse.json({
            message: error.message ,
            success:false
        }, { status: 500 });
    }
}