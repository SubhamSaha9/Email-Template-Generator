import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connect } from "@/config/database";

connect();

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required!",
        },
        { status: 403 }
      );
    }

    //check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User is not registered, Please SignUp to continue.",
        },
        { status: 400 }
      );
    }

    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        email: user.email,
        id: user._id,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET!, {
        expiresIn: "2h",
      });

      user.token = token;
      user.password = undefined;

      const options = {
        expires: Date.now() + 3 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      };

      const response = NextResponse.json(
        {
          success: true,
          token,
          user,
          message: "LoggedIn successfully.",
        },
        { status: 200 }
      );

      response.cookies.set("token", token, options);
      return response;
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Password is incorrect!",
        },
        { status: 401 }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message, success: false },
      { status: 500 }
    );
  }
}
