import React from 'react'

const Login = () => {
  return (
    <div>
     <div className="min-h-screen flex items-center justify-center bg-[#2d2a27] p-4">
        <div className="bg-[#3a3734] rounded-lg shadow-lg w-full max-w-md p-8">
          <h2 className="text-2xl font-bold text-center text-[#e0e0e0]">
            Login
          </h2>
          <p className="text-[#b0b0b0] text-sm text-center mb-6">
            Welcome back! Please enter your credentials.
          </p>

          <form className="space-y-6">
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
                className="w-full bg-[#4a4744] text-[#ffffff] border border-[#55524f] rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#6c63ff]"
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
                placeholder="Enter your password"
                className="w-full bg-[#4a4744] text-[#ffffff] border border-[#55524f] rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#6c63ff]"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#6c63ff] text-white font-medium p-3 rounded-md hover:bg-[#817aff] transition"
            >
              Login
            </button>
          </form>

          <div className="text-sm text-center mt-6 text-[#b0b0b0]">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-[#6c63ff] hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
