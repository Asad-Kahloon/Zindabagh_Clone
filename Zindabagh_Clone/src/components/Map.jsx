import backgroundImage from "../assets/mapFooter.webp";
function Map() {
  return (
    <div
      className=" mt-5 relative flex bg-contain bg-center h-[40vh] md:h-[60vh]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
}

export default Map;
