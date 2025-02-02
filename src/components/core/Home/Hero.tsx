"use client";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const { token } = useAppSelector((state) => state.auth);

  return (
    <div className="px-10 md:px-20 lg:px-44 xl:px-56 flex flex-col justify-center items-center mt-24">
      <div className="font-extrabold text-bold text-5xl text-center">
        Ai Powerd <span className="text-primary">Email Templates</span>
      </div>

      <p className="text-gray-600 text-lg mt-4 text-center">
        Longing to impress clients with AI-powered emails but don’t have enough
        time to build them on your own? Use the AI-powered email templates that
        already have AI-generated imagery and copy — save time on email
        production with us.
      </p>

      <div className="flex gap-4 mt-8">
        <Button variant="outline">Try Demo</Button>
        {/* <SignInButton/> */}
        {token ? (
          <div>
            <Link href="/dashboard">
              <Button>dashboard</Button>
            </Link>
          </div>
        ) : (
          <div>
            <Link href="/signin">
              <Button>Get Started</Button>
            </Link>
          </div>
        )}
      </div>

      {/* <Image/> */}
      <Image
        src={"/landing.png"}
        alt="landing"
        height={850}
        width={970}
        className="py-4 rounded-2xl"
      />
    </div>
  );
};

export default Hero;
