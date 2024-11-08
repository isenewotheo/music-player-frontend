"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AlertCircle, X } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Logo from "@/components/Logo";
import PasswordInput from "../components/PasswordInput";
import AuthCard from "../components/AuthCard";

function Login() {
  const [showWrongPasswordAlert, setShowWrongPasswordAlert]: [
    Boolean,
    Function
  ] = useState(false);

  function signIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShowWrongPasswordAlert(true);
    console.log("signing in");
  }

  return (
    <div className="">
      <AuthCard>
        <div className="w-full px-6 py-8 md:px-8">
          <div className="flex justify-center mx-auto">
            <Logo />
          </div>
          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome back!
          </p>
          <form onSubmit={signIn}>
            <div className="grid w-full items-center gap-1.5 mt-4">
              <Label htmlFor="email">Email</Label>
              <Input
                className="bg-secondary pr-3"
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="grid w-full items-center gap-1.5 mt-4">
              <div className="flex justify-between">
                <Label htmlFor="password">Password</Label>
              </div>
              <PasswordInput />
            </div>
            <div className="grid w-full items-center gap-1.5 mt-4">
              <div className="flex justify-between">
                <Label htmlFor="password">Confirm Password</Label>
              </div>
              <PasswordInput />
            </div>
            {showWrongPasswordAlert ? (
              <Alert variant="destructive" className="mt-8">
                <AlertCircle className="h-4 w-4" />
                {/* <AlertTitle>Error</AlertTitle> */}
                <div className="flex justify-between items-center">
                  <AlertDescription>Wrong Email or Password</AlertDescription>
                  <X
                    className="cursor-pointer"
                    onClick={() => setShowWrongPasswordAlert(false)}
                    size={"15"}
                  />
                </div>
              </Alert>
            ) : (
              ""
            )}
            <div className="mt-8">
              <Button
                onSubmit={(e) => signIn}
                className=" w-full bg-primary text-white hover:bg-primary"
              >
                Sign up
              </Button>
            </div>
          </form>
          <div className="flex items-center justify-between my-8">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
            <div className="text-xs text-center uppercase">
              or sign up with Google
            </div>
            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
          <a
            href="#"
            className="flex items-center justify-center mt-4 transition-colors duration-300 transform border rounded-lg dark:border-gray-700  hover:bg-secondary "
          >
            <div className="">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>
            <span className=" px-4 py-3 font-bold text-center">
              Sign up with Google
            </span>
          </a>
        </div>
      </AuthCard>
    </div>
  );
}

export default Login;
