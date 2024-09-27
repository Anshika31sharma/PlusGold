import React from "react";
import howitworks from "../assets/how it works.png";
import graph from "../assets/graph.png";
import goldbar from "../assets/gold bar.png";
import offers from "../assets/offers.png";
import gold from "../assets/TEXT.png";
import goldrush from "../assets/gold rush.png";
import gift from "../assets/gift card.png";
import app from "../assets/app.png";
import download from "../assets/download app.png";
import secure from "../assets/secure money.png";

function Page2() {
  return (
    <div className="ml-4 mt-16 p-4 md:ml-10 md:mt-32 md:p-10">
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="text-4xl md:text-5xl font-medium">How it works?</p>
          <p className="text-3xl md:text-4xl font-medium mt-4 md:mt-6">
            Buy <span className="text-yellow-600">GOLD</span> in just 3 clicks
          </p>
          <p className="text-lg md:text-xl font-normal mt-2">
            Through our 10 + 1 Savings Scheme
          </p>
          <p className="text-3xl md:text-4xl font-medium mt-6 md:mt-10">
            Redeem as Jewellery, Coin, or Cash
          </p>
          <p className="text-lg md:text-xl font-normal mt-2">
            Explore our easy and flexible redemption options
          </p>
          <p className="text-3xl md:text-4xl font-medium mt-6 md:mt-10">
            Participate & win extra{" "}
            <span className="text-yellow-600">GOLD</span>
          </p>
          <p className="text-lg md:text-xl font-normal mt-2">
            Win big in our Gold Rush Festival
          </p>
        </div>
        <img src={howitworks} className="w-72 md:w-80 lg:w-96 mt-10 lg:mt-0 lg:mr-20" alt="How it works" />
      </div>

      {/* Second Section */}
      <div className="flex flex-col lg:flex-row justify-between mt-16">
        <div className="mt-10 lg:mt-40 max-w-xl">
          <p className="text-3xl md:text-4xl font-medium">
            Why <span className="text-yellow-600">Gold</span> is the
          </p>
          <p className="text-3xl md:text-4xl font-medium mt-4">
            safest asset to invest in?
          </p>
          <p className="text-lg md:text-xl font-medium mt-8">What the statistics reveal:</p>
          <div className="mt-8 flex flex-col lg:flex-row justify-between items-center gap-5">
            <div className="text-center">
              <p className="text-lg md:text-xl font-semibold">Gold Reserves</p>
              <p className="mt-2 text-md md:text-lg">700 tonnes</p>
            </div>

            <div className="text-center">
              <p className="text-lg md:text-xl font-semibold">Gold Imports (2023)</p>
              <p className="mt-2 text-md md:text-lg">$45.54 billion</p>
            </div>

            <div className="border-l-2 border-gray-300 h-full hidden lg:block"></div>

            <div className="text-center">
              <p className="text-lg md:text-xl font-semibold">Gold Consumption</p>
              <p className="mt-2 text-md md:text-lg">25% of world</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
          <button className="bg-red-700 text-xs  text-center text-white rounded-3xl p-2 justify-center items-center">
            Start saving Now
          </button>
          </div>
        </div>
        <img src={graph} className="max-w-full lg:max-w-xl mr-1 mt-10 lg:mt-20" alt="Graph" />
      </div>

      {/* Third Section */}
      <div className="mt-16 md:mt-20">
        <p className="text-3xl md:text-4xl font-medium">
          Saving with Plus <span className="text-yellow-600">Gold</span> is
        </p>
        <p className="text-3xl md:text-4xl font-medium">fun and rewarding!</p>
        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <div className="mt-10">
              <div className="border border-gray-300 rounded-lg p-4 max-w-full lg:max-w-96">
                <p className="text-xl md:text-2xl font-medium">
                  Earn free <span className="text-yellow-600">Gold</span>
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-md md:text-lg">
                    Refer Plus Gold to your friends and family
                  </p>
                  <img src={goldbar} className="w-16 h-16 md:w-20 md:h-20" alt="Gold bar" />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="border border-gray-300 rounded-lg p-4 max-w-full lg:max-w-96">
                <div className="flex gap-2">
                  <p className="text-xl md:text-2xl font-medium text-yellow-600">Offer</p>
                  <p className="text-xl md:text-2xl font-medium">like never before</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-md md:text-lg text-gray-600">
                    Earn points and enjoy our exciting rewards
                  </p>
                  <img src={offers} className="w-16 h-16 md:w-20 md:h-20" alt="Offers" />
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg p-4 mt-10 lg:mt-0 lg:ml-10">
            <img src={gold} alt="Gold text" />
            <p className="text-md md:text-xl font-medium">
              Be the next big winner of{" "}
              <span className="text-yellow-600">10gm gold</span>
            </p>
            <p className="text-md md:text-xl font-medium text-gray-400">
              By joining the Gold Rush Festival
            </p>
            <div className="flex justify-end">
              <img src={goldrush} className="w-16 h-16 md:w-20 md:h-20" alt="Gold Rush" />
            </div>
          </div>
        </div>
      </div>

      {/* Gift Cards Section */}
      <div className="mt-16 md:mt-20 flex flex-col lg:flex-row justify-between p-4 lg:p-20">
        <div className="w-full lg:w-96">
          <h2 className="text-4xl md:text-5xl font-bold">
            Introducing <br />
            <span className="text-yellow-600">Gold</span> Gift Cards
          </h2>
          <p className="mt-6 text-md md:text-xl">
            Share the love of gold with your loved ones by gifting them this
            timeless treasure. Its beauty and value will forever remind them of
            your heartfelt affection.
          </p>
          <div className="flex justify-center lg:justify-start mt-6 lg:mt-10">
            <a
              id="giftNow"
              href="https://play.google.com/store/apps/details?id=com.fs.getplus&hl=en_IN&pli=1"
            >
              <button className="bg-maroon hover:bg-maroon text-white py-2 px-10 rounded-full">
                Coming Soon
              </button>
            </a>
          </div>
        </div>
        <img src={gift} className="w-full lg:w-96 mt-6 lg:mt-0 lg:mr-32" alt="Gift card" />
      </div>

      {/* Download App Section */}
      <div className="flex flex-col lg:flex-row justify-between p-4 lg:p-10 gap-2">
        <div className="col-span-2 flex justify-center items-center">
          <div>
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-6xl">Download the App</h2>
              <p className="mt-5 text-md md:text-lg">
                Plus, a revolutionary app that helps Indian homemakers to
                pre-plan their jewellery purchase by saving monthly & gaining
                10% IRR
              </p>
            </div>
            <div className="pt-5 flex justify-center md:justify-start mt-2">
              <img src={app} alt="App" />
            </div>
          </div>
        </div>
        <div className="col-span-1 px-3 mt-6 lg:mt-0 lg:mr-40 flex justify-center items-end">
          <img alt="Plus Gold App" width="300" height="500" src={download} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-20">
        <div id="securityAssurance">
          <div className="text-4xl md:text-5xl font-bold text-gray-700">
            <h2>Your money is 100% Secure!</h2>
          </div>
          <div className="text-md md:text-xl text-gray-500 mt-6 md:mt-10">
            Your asset is stored in secured vaults at Augmont and available to
            withdraw anytime.
          </div>
          <div className="mt-5">
            <img
              alt="grouping"
              loading="lazy"
              className="h-12  md:h-14 mr-10"
              src={secure}
            />
          </div>
        </div>
        <div className="mt-6 lg:mt-0">
          <img
            alt="banksafe"
            loading="lazy"
            width="100"
            height="100"
            src="https://storage.googleapis.com/getplus.in/images/BankSafe.png"
            className="size-80 mr-20"
          />
        </div>
      </div>
    </div>
  );
}

export default Page2;

