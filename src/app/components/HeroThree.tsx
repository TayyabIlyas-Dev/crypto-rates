import React from 'react'
import Image from 'next/image'

const HeroThree = () => {
  return (
    <div>
       <section
      className="flex justify-center items-center py-12 sm:py-16"
      style={{ backgroundColor: "#2d2a27" }} // Updated background color
    >
      <div className="w-full max-w-4xl bg-[#5e514572] text-white rounded-lg shadow-lg p-6 mx-2 md:p-12 text-center relative">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Start Exchange on <span className="text-[#e09800]"><span className='text-white'>EX</span>Crypto</span>
        </h1>
        <p className="text-sm md:text-xl text-gray-300 mb-6">
          Exchange your cryptocurrency with the most commercial international rate.
        </p>
        <div className="flex justify-center">
          <button className="relative group flex items-center justify-center px-8 sm:px-12 py-2 text-lg font-medium text-white hover:text-[#e09800] bg-[#5e514572] border-white border-[1px] rounded-lg hover:bg-[#42352af3]">
            Start now
            {/* <span
              className="absolute inset-0 w-full h-full transition-all scale-100 bg-transparent rounded-full group-hover:scale-110 group-hover:bg-yellow-300"
              aria-hidden="true"
            ></span> */}
          </button>
        </div>
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
  <Image
    src="/images/money-bag.png" // Replace with the actual image path
    alt="Money Bag"
    width={90}
    height={100}
    className="rounded " // Add any additional Tailwind classes if needed
    priority // Ensures this image is loaded immediately
  />
</div>
      </div>
    </section>
    </div>
  )
}

export default HeroThree
