'use client'
import React from 'react'

const Login = () => {
  return (
    <div>
       <div className="min-h-screen flex items-center justify-center bg-[#2d2a27] p-4">
      <div className="bg-[#3a3734] rounded-lg shadow-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-[#e0e0e0]">Sign Up</h2>
        <p className="text-[#b0b0b0] text-sm text-center mb-6">
          Create an account to get started.
        </p>

        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-[#d4d4d4] block"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="w-full bg-[#4a4744] text-[#ffffff] border border-[#55524f] rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#e09800]"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-[#d4d4d4] block"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full bg-[#4a4744] text-[#ffffff] border border-[#55524f] rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#e09800]"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-[#d4d4d4] block"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter a password"
              className="w-full bg-[#4a4744] text-[#ffffff] border border-[#55524f] rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#e09800]"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-[#e09800] text-white font-medium p-3 rounded-md hover:bg-[#62502afc] transition"
          >
            Sign Up
          </button>
        </form>

        <div className="text-sm text-center mt-6 text-[#b0b0b0]">
          Already have an account?{" "}
          <a href="/login" className="text-[#e09800] hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
