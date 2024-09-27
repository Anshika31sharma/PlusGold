import React from "react";
import shark from "../assets/shark tank.png";

function Footer() {
  return (
    <div className="p-8 md:p-16 lg:p-20">
      <footer>
        {/* Top section */}
        <div className="flex flex-col md:flex-row ml-2 md:ml-10 justify-between">
          {/* Company Info */}
          <div className="flex flex-col mb-6 md:mb-0">
            <p className="text-3xl md:text-4xl lg:text-5xl font-medium">
              Plus <span className="text-yellow-600">Gold</span>
            </p>
            <address className="mt-2 text-lg md:text-xl">
              B.No 19, H.No 1413, R.S. Pal, Near Mahatma Gandhi School, Nagpur, Maharashtra, 440014
            </address>
            <p className="mt-2 text-sm md:text-base">
              <span>Email: founders@getplus.in</span> |{" "}
              <span>Phone: +91-9035202565</span>
            </p>
<div className="flex mt-4 space-x-3">
  <a
    href="https://www.facebook.com/PlusGold.in"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-8 h-8" />
  </a>
  <a
    href="https://www.instagram.com/plusgold.in/"
    target="_blank"
    rel="noopener noreferrer"
  >
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-8 h-8" />
  </a>
  <a
  href="https://x.com/plusgoldin?s=21"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    alt="twitter"
    src="data:image/png;base64,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"
    className="w-6 h-6 md:w-8 md:h-8"
  />
</a>
<a
  href="https://www.linkedin.com/company/getplusofficial/"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    alt="linkedin"
    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
    className="w-6 h-6 md:w-8 md:h-8"
  />
</a>
  <a
    href="https://www.youtube.com/@Plus-App/featured"
    target="_blank"
    rel="noopener noreferrer"
  >
  <img src="data:image/jpeg;base64,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" alt="YouTube" className="w-8 h-8" />
  </a>
</div>

          </div>

          {/* Links */}
          <div className="flex space-x-6 md:space-x-10 mt-4 md:mt-0">
            <ul className="space-y-2">
              <li>
                <a href="/about/" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/privacy-and-policy/" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions/" className="hover:underline">
                  Terms &amp; Condition
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a href="/faq/" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/blogs/" className="hover:underline">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/cancellation-and-refund-policy/" className="hover:underline">
                  Cancellation &amp; Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-5" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row ml-2 md:ml-10 mt-10 justify-between items-center">
          <p>© FinShakti Solutions Pvt. Ltd.</p>
          <div className="flex space-x-5 mt-4 md:mt-0">
            <a
              href="https://play.google.com/store/apps/details?id=com.fs.getplus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="playstore"
                src="https://storage.googleapis.com/getplus.in/images/download_play_store.png"
                className="w-20 md:w-24"
              />
            </a>
            <a
              href="https://apps.apple.com/in/app/plus-gold-save-for-jewellery/id6443759619"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="appstore"
                src="https://storage.googleapis.com/getplus.in/images/download_app_store.png"
                className="w-20 md:w-24"
              />
            </a>
          </div>
        </div>

        {/* Additional Content */}
        <div className="qAnswer pt-12 text-left">
          <div className="qaPart">
            <div className="q">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                What is a Gold Savings Scheme?
              </h2>
            </div>
            <div className="a space-y-4">
              <p>
                A gold savings scheme or gold investment scheme is a financial
                instrument that enables individuals to invest in gold
                systematically over a period of time. At Plus Gold, India’s
                first jewellery savings app, we offer various gold schemes to
                cater to the diverse needs of gold investors and buyers with
                varying budgets.
              </p>
              <p>
                These schemes work on the principle of accumulating gold
                gradually, making them accessible to all seeking to invest in
                gold. Plus Gold allows investors to choose from different
                schemes like the golden bonanza scheme, wedding saving scheme,
                anniversary gift scheme, gold monthly scheme, and many other
                gold savings schemes, each tailored to suit their preferences
                and financial goals.
              </p>
              <p>
                These schemes often offer flexibility in terms of payment
                frequencies and duration, allowing investors to choose the most
                suitable plan according to their financial capabilities. By
                choosing a gold savings scheme, individuals can diversify
                their investment portfolio, hedge against inflation, and
                accumulate gold in a disciplined manner, thereby fostering
                long-term financial security.
              </p>
            </div>
          </div>

          {/* Features of Gold Investment Scheme */}
          <div className="qaPart mt-10" id="featureGold">
            <div className="q">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Features of Gold Investment Scheme
              </h2>
            </div>
            <div className="a space-y-4">
              <p>
                Gold investment schemes offered by Plus Gold offer various
                features, including flexible investment options, assured
                returns, and the convenience of online transactions. Some
                other features include:
              </p>
              <ul className="list-disc ml-5 space-y-2">
                <li>
                  <h3 className="font-medium">0 Lock-in period:</h3> Invest in gold schemes with Plus Gold 
                  without any lock-in period, meaning you can withdraw anytime.
                </li>
                <li>
                  <h3 className="font-medium">Safe &amp; Secure:</h3> Your gold is 100% secured in regulated vaults.
                </li>
                <li>
                  <h3 className="font-medium">Instant Withdrawal:</h3> Instant cash withdrawal into your account.
                </li>
                <li>
                  <h3 className="font-medium">Flexibility of one-time or SIP:</h3> Buy gold through one-time or SIP 
                  and enjoy 10% extra gold (1gm extra gold for every 10gm purchase).
                </li>
              </ul>
            </div>
          </div>

          {/* Why Invest in Gold */}
          <div className="qaPart mt-10" id="whyInvestGold">
            <div className="q">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Why Invest in Gold?</h2>
            </div>
            <div className="a space-y-4">
              <p>Investing in gold brings several benefits. Here is why:</p>
              <h3 className="font-medium">Gold holds its value over time:</h3>
              <p>
                Gold helps protect your money from losing value when prices go
                up. It tends to maintain or even increase its worth, offering
                long-term security for your investment.
              </p>
              <h3 className="font-medium">Universal appeal:</h3>
              <p>
                Gold’s universal acceptance ensures seamless conversion to cash,
                making it a preferred choice for liquidity and stability in your
                portfolio.
              </p>
              <h3 className="font-medium">Higher liquidity than real estate:</h3>
              <p>
                Compared to real estate, gold is easy to buy, sell, or convert to
                money quickly. It offers high liquidity and portability as an
                investment.
              </p>
            </div>
          </div>
        </div>

        {/* As Seen On section */}
        <div className="flex flex-col mt-10 gap-6 justify-center">
          <p className="text-xl text-center justify-center md:text-xl">As Seen on</p>
          <div className=" w-full  justify-center text-center items-center flex">
            <img src={shark} alt="Shark Tank" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
