import React from "react";
import logo from "../assets/secure money.png";
import vector from "../assets/Vector.png";
import hero from "../assets/hero.png";
import banner from "../assets/logos.png";
import icon1 from "../assets/benefit1.png";
import icon2 from "../assets/benefit2.png";
import icon3 from "../assets/benefit3.png";
import mobile from "../assets/app mockup.png";

function Page() {
  return (
    <div className="mt-10 lg:mt-20">

      <div className="flex flex-col lg:flex-row ml-2 lg:ml-10 justify-between">
        <div className="flex flex-col">
          <p className="flex gap-2 text-gray-600 text-3xl md:text-4xl lg:text-5xl font-semibold">
            Save in
            <span className="text-yellow-600">Gold</span>
          </p>
          <p className="flex gap-2 text-gray-600 text-3xl md:text-4xl lg:text-5xl font-semibold">
            With 21% * Extra
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-red-700 justify-center items-center  text-xs flex text-white rounded-3xl p-2 text-center">
              Start Saving Now
            </button>
            <p className="text-xs md:text-lg  rounded-3xl border-gray-200 border bg-white p-2">
              Trusted by 3 lakh + Indians
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-4 lg:mt-6">
            <p className="text-sm flex md:text-lg p-2">Powered By</p>
            <img src={logo} className="h-20 lg:h-14" alt="Logo" />
          </div>
        </div>

        <div className="relative mt-6 lg:mt-0">
          <div className="mr-0 md:mr-40 lg:mr-80">
            <img src={vector} className="w-60 md:w-80 lg:w-96" alt="Vector" />
          </div>
          <div className="absolute top-0 left-0">
            <img src={hero} className="max-h-64 md:max-h-80 lg:max-h-96" alt="Hero" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between bg-gray-200 p-4 mt-6">
        <div className="flex md:w-full  md:flex-row gap-2">
          <p className="text-lg md:text-xl font-medium">Featured in</p>
          <p className="text-lg md:text-xl font-medium">top channels</p>
        </div>
        <img src={banner} className="mt-4 md:mt-0 w-full max-w-xs  " alt="Banner" />
      </div>

      <div className="mt-10 lg:mt-20">
        <div className="flex flex-col lg:flex-row justify-between">
   
          <div>
            <div className="px-6 lg:px-10 max-w-xl mt-6 lg:mt-20">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Benefits of buying
              </p>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
                from Plus Gold
              </p>
              <p className="mt-4 text-base md:text-lg lg:text-xl">
                Opting for the Plus Gold Savings Scheme is a smart and easy way to
                accumulate gold. Here's why you should choose our scheme.
              </p>
            </div>
            <div className="flex gap-6 mt-10 lg:mt-20">
              <button className="bg-red-700 text-xs ml-6 lg:ml-10 text-white rounded-3xl py-2 px-4">
                Start Saving Now
              </button>
              <p className="text-yellow-600 text-3xl md:text-4xl justify-center text-center items-center flex">
                &gt; &gt; &gt; &gt;
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center">
  <div className="flex flex-col sm:flex-row gap-6 lg:mr-32 w-full justify-center">
    <div className="p-2 border w-full sm:w-44 md:w-56 lg:w-64 h-24 md:h-28 lg:h-32 mt-6 lg:mt-16 rounded-lg border-gray-300 flex flex-col items-center">
      <img src={icon1} className="w-10 h-10 md:w-12 md:h-12" alt="Benefit 1" />
      <p className="text-sm md:text-lg font-medium text-center">Hassle-free</p>
      <p className="text-sm md:text-lg font-medium text-center">Redemption</p>
    </div>
    <div className="p-2 border w-full sm:w-44 md:w-56 lg:w-64 h-24 md:h-28 lg:h-32 mt-6 lg:mt-16 rounded-lg border-gray-300 flex flex-col items-center">
      <img src={icon2} className="w-10 h-10 md:w-12 md:h-12" alt="Benefit 2" />
      <p className="text-sm md:text-lg font-medium text-center">21% Extra</p>
      <p className="text-sm md:text-lg font-medium text-center">Gold Rewards</p>
    </div>
  </div>
  <div className="p-2 border w-full sm:w-80 md:w-96 flex mt-10 rounded-lg border-gray-300">
    <img src={icon3} className="w-10 h-10 md:w-12 md:h-12" alt="Benefit 3" />
    <div className="ml-4">
      <p className="text-sm md:text-lg font-medium">The Convenience</p>
      <p className="text-sm md:text-lg font-medium">of Online Platform</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-red-700 underline text-sm md:text-lg lg:text-xl">Learn more</p>
        <img src={mobile} className="w-16 md:w-28 lg:w-44" alt="Mobile App" />
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default Page;
