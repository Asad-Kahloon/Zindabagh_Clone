import Map from "./Map";

function Informed() {
  return (
    <div className=" px-5 pt-10 pb-4">
      <div className=" w-[100%]">
        <div className="flex flex-col gap-7 items-center">
          <h1 className=" text-center w-full block text-2xl md:text-4xl font-bold">
            Stay Informed and Prepared
          </h1>
          <p className="text-center md:w-[50%]">
            Join over Community to passionnate and aspiring international
            professionals.Subcribe for the latest update,tips and strategies to
            make your global career aspirations a reality.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-5">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="px-6 py-3 text-lg rounded-lg md:w-[25%]"
          />
          <button className=" bg-[#f6c458] text-lg px-6 py-3 rounded-md ">
            Submit
          </button>
        </div>
        <Map />
      </div>
    </div>
  );
}

export default Informed;
