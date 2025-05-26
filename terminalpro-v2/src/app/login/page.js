'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Form, Input, Button } from "@heroui/react";
import Logo from '../components/logo';
import ExclamationIcon from '../icons/exclamation';

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
    <div className="min-h-screen w-full bg-[#f0f6ff] flex items-center justify-center p-8">
      <div className="flex flex-col items-center max-w-6xl w-full md:flex-row">
        <div className="hidden pr-12 md:block md:w-1/2 lg:w-2/5">
          <Image
            src="/terminal-illustration.svg"
            alt="Airport Terminal"
            width={500}
            height={500}
            priority
            className="object-contain w-full"
          />
        </div>

        <div className="flex flex-col items-center gap-3 bg-white rounded-lg shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] p-8 max-w-lg w-full border border-[#dee6f1] md:p-10 md:w-1/2 lg:w-3/5">
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
      </div>
    </div>
  );
}