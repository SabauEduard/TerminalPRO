'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Form, Input, Button, Card } from "@heroui/react";
import Logo from '../components/logo';
import ExclamationIcon from '../icons/exclamation';
import "../globals.css";

export default function LoginPage({ onLogin }) {
  const [employeeCode, setEmployeeCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validUsers = [
    { employeeCode: "EMPL1234567", password: "Password123!" },
    { employeeCode: "TEST5678901", password: "Secure123$" },
    { employeeCode: "ADMIN012345", password: "Admin2023@" }
  ];

  return (
    <div className="bg-linear-to-br from-tp-dusted-blue to-tp-dusted-beige min-h-screen w-full flex items-center justify-center p-8">
      <div className="flex flex-col items-center w-full">
        <Card
          isBlurred
          className="h-[425px] w-[900px] border-none bg-background/20 flex flex-row items-center justify-center"
          shadow="sm"
        >
          <div className="hidden md:block w-full">
            <Image
              src="/terminal-illustration.svg"
              alt="Airport Terminal"
              width={400}
              height={400}
              priority
              className="object-contain p-8"
            />
          </div>

          <div className="h-[425px] flex flex-col items-center gap-3 bg-white rounded-lg shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] p-8 w-full border border-[#dee6f1]">
            <div className="flex items-center justify-center mb-4">
              <Logo />
            </div>

            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-10 w-full">
                <div className="animate-pulse flex flex-col items-center gap-4">
                  <div className="h-8 w-8 rounded-full bg-blue-100"></div>
                  <div className="h-5 w-32 bg-blue-100 rounded"></div>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-light text-black text-center">Staff Authentication</h2>

                {error && (
                  <div className='w-full'>
                    <div className="flex gap-2 items-center text-red-700 text-sm font-medium p-2 my-1 bg-red-50 rounded-md">
                      <ExclamationIcon color="currentColor" />
                      {error}
                    </div>
                  </div>
                )}

                <Form
                  className="w-full flex flex-col gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const data = Object.fromEntries(formData);

                    const isValidUser = validUsers.some(
                      user => user.employeeCode === data.employeeCode && user.password === data.password
                    );

                    if (isValidUser) {
                      setError("");
                      setIsLoading(true);
                      if (onLogin) {
                        onLogin(data.employeeCode);
                      }
                      router.push('/');
                    } else {
                      setError("Invalid employee code or password");
                    }
                  }}
                >
                  <Input
                    isRequired
                    radius='sm'
                    errorMessage="Please enter a valid employee code"
                    label="Employee code"
                    labelPlacement="outside"
                    name="employeeCode"
                    placeholder="Enter your employee code"
                    type="text"
                  />

                  <Input
                    isRequired
                    radius='sm'
                    errorMessage="Please enter a valid password"
                    label="Password"
                    labelPlacement="outside"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                  />

                  <div className="flex gap-2">
                    <Button color="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}