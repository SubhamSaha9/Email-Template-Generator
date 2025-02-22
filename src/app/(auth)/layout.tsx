import Image from "next/image";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="hidden w-1/2 items-center justify-center bg-brand p-10 lg:flex xl:w-2/5 bg-emerald-300">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12 ">
          <Image
            src="/logo.svg"
            alt="logo"
            width={224}
            height={82}
            className="h-auto"
          />

          <div className="space-y-5">
            <h1 className="text-xl font-bold">
              Manage your files the best way
            </h1>
            <p className="body-1">
              This is a place where you can store all your documents.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        {children}
      </section>
    </div>
  );
};

export default Layout;
