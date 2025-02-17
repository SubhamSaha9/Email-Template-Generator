"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import { useAppDispatch } from "@/lib/hooks";
import { setToken, setUser } from "@/lib/slice/authSlice";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const submitLoginForm = async (formData: any) => {
    const toastId = toast.loading("Please Wait...");
    setLoading(true);
    try {
      const { data } = await axios.post(`/api/users/signin`, formData, {
        withCredentials: true,
      });
      toast.dismiss(toastId);
      setLoading(false);
      if (!data.success) {
        toast.error(data.message);
        return;
      }

      toast.success(data.message);
      dispatch(setToken(data.token));
      dispatch(setUser(data.user));
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/dashboard");
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      toast.dismiss(toastId);
      toast.error(error.response?.data.message || error.message);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        password: "",
      });
    }
  }, [reset, isSubmitSuccessful]);
  return (
    <div>
      <Card>
        <form onSubmit={handleSubmit(submitLoginForm)}>
          <CardHeader>
            <CardTitle>Log In</CardTitle>
            <CardDescription>
              Welcome back! Please login to continue.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="example@xyz.com"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="-mt-1 text-[12px] text-red-600">
                  Please enter your Email address.
                </span>
              )}
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="*****************"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  pattern: {
                    value:
                      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                  },
                })}
              />
              {errors.password && (
                <span className="-mt-1 text-[12px] text-red-600">
                  Password must contain at least one uppercase letter, one
                  lowercase letter, one number, and one special character
                </span>
              )}
            </div>
            <CardDescription>
              Don't have an account?{" "}
              <span
                className="text-blue-400 cursor-pointer"
                onClick={() => router.push("/signup")}
              >
                register
              </span>
              .
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={loading}>
              {loading ? <Loader2 className="animate-spin" /> : "Submit"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;
