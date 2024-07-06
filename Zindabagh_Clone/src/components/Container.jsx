import ReviewSection from "./ReviewSection";

import visaImage from "../assets/visa.webp";

function Container() {
  return (
    <div className="text-white flex flex-col md:flex-row bg-[#1f202e] mx-auto p-4">
      <div className=" md:p-12 md:w-1/2 mt-5 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Secure Your Visa Legally
        </h1>
        <img
          src={visaImage}
          alt="Visa"
          className="w-full mt-20 md:w-1/2 mx-auto md:mx-0"
        />
      </div>
      <div className="md:w-1/2">
        <ReviewSection />
      </div>
    </div>
  );
}

export default Container;
