import backgroundImage from "../assets/svgexport-6.svg";
import cartImage from "../assets/svgexport-9.svg";
import planeImage from "../assets/plane.svg";
import peopleImage from "../assets/peoples.svg";

function Content() {
  return (
    <div className="mt-28 text-gray-700 text-center  ">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Do You Want To Move
        <br />
        Abroad?
      </h1>
      <h2 className="text-xl md:text-3xl font-semibold mb-4">
        Let AI Guide Your Decision On Where to Live, Work, and
        <br />
        Excel
      </h2>
      <p className="text-base md:text-lg mb-6">
        Travel Abroad Safely Without Relying on Travel Agents
      </p>
      <button className="get-started-btn bg-[#f6c458]  px-6 py-3 rounded-md ">
        Get Started &gt;
      </button>
      <div
        className=" mt-5 relative flex bg-cover bg-center h-[100%] md:h-[20%]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="relative container mx-auto flex flex-row items-center justify-between w-full p-3">
          <img src={cartImage} alt="Image 1" className=" w-1/4 mb-8 md:mb-0" />
          <img
            src={peopleImage}
            alt="Image 2"
            className="  w-1/3 md:mb-14 sm:mb-2 relative mt-auto"
          />
          <img
            src={planeImage}
            alt="Image 3"
            className=" w-1/4 mb-8 relative  mb-auto "
          />
        </div>
      </div>
    </div>
  );
}

export default Content;
