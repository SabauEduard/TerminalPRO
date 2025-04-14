'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import '../styles/login.css';

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
    <div className="terminal-container">
      {/* Container for both elements */}
      <div className="terminal-flex-container">
        {/* Terminal illustration on the left */}
        <div className="terminal-illustration">
          <Image
            src="/terminal-illustration.svg"
            alt="Airport Terminal"
            width={500}
            height={500}
            priority
            className="object-contain w-full"
          />
        </div>

        {/* Floating white authentication box on the right */}
        <div className="terminal-auth-box">
          <div className="terminal-logo-container">
            <Image
              src="/airplane-icon.svg"
              alt="Airplane Icon"
              width={40}
              height={40}
              className="mr-2"
            />
            <h1 className="terminal-title">
              Terminal<span className="terminal-title-highlight">PRO</span>
            </h1>
          </div>

          <h2 className="terminal-heading">Staff Authentication</h2>

          <form onSubmit={handleSubmit}>
            <div className="terminal-form-group">
              <label htmlFor="employee-code" className="terminal-label">
                Enter your employee code
              </label>
              <input
                type="text"
                id="employee-code"
                name="employee-code"
                value={employeeCode}
                onChange={handleInputChange}
                className="terminal-input"
              />
            </div>

            <button
              type="submit"
              className="terminal-button"
            >
              Authorize
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}