'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [employeeCode, setEmployeeCode] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication logic here
    console.log('Employee code submitted:', employeeCode);

    // For now, just navigate to dashboard
    router.push('/dashboard');
  };

  const handleInputChange = (e) => {
    setEmployeeCode(e.target.value);
  };

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

        <div className="bg-white rounded-lg shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] p-8 max-w-lg w-full border border-[#dee6f1] md:p-10 md:w-1/2 lg:w-3/5">
          <div className="flex items-center justify-center mb-8">
            <Image
              src="/airplane-icon.svg"
              alt="Airplane Icon"
              width={40}
              height={40}
              className="mr-2"
            />
            <h1 className="ml-2 text-2xl font-normal text-[#1E1E1E]">
              Terminal<span className="text-[#54479B]">PRO</span>
            </h1>
          </div>

          <h2 className="text-2xl font-light text-black mb-8 text-center">Staff Authentication</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-8 mr-4">
              <label htmlFor="employee-code" className="block text-sm text-black mb-2 font-normal">
                Enter your employee code
              </label>
              <input
                type="text"
                id="employee-code"
                name="employee-code"
                value={employeeCode}
                onChange={handleInputChange}
                className="w-full px-4 py-[0.875rem] border border-gray-300 rounded-md bg-gray-100 text-base font-normal"
              />
            </div>

            <button
              type="submit"
              className="bg-[#373F51] text-white px-8 py-[0.875rem] rounded-[1rem] text-base cursor-pointer mx-auto block transition-colors duration-200 font-normal hover:bg-[#292a3a]"
            >
              Authorize
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}