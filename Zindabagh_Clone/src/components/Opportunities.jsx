import flag1 from "../assets/svgexport-12.svg";
import flag2 from "../assets/svgexport-13.svg";
import flag3 from "../assets/svgexport-14.svg";

function Opportunities() {
  return (
    <div className="bg-white px-5 py-10">
      <div className=" w-[100%]">
        <div className="flex flex-col gap-7 items-center">
          <h1 className=" text-center w-full block text-2xl md:text-4xl font-bold">
            International Opportunities
          </h1>
          <p className="text-center md:w-[50%]">
            Embark on an enriching journey towards global career opportunities.
            Our platform offers comprehensive resources to navigate the
            complexities of the international job market, immigration processes,
            and career advancement. Delve into a wealth of information tailored
            to help you understand and adapt to different work cultures, legal
            requirements for working abroad, and strategies for successful
            career growth in a global context.
          </p>
        </div>
        <div className="mt-9 flex  gap-3 justify-center items-center">
          <img className="h-auto w-20 rounded-lg" src={flag1} alt="1" />
          <img className="h-auto w-20 rounded-lg" src={flag2} alt="2" />
          <img className="h-auto w-20 rounded-lg" src={flag3} alt="3" />
        </div>
        <div className="flex justify-center mt-5">
          <button className=" bg-[#f6c458] px-6 py-3 rounded-md ">
            Explore International Opportunities &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Opportunities;
