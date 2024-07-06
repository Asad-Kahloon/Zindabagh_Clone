import facebookIcon from "../assets/svgexport-16.svg";
import whatsappIcon from "../assets/svgexport-17.svg";
import logo from "../assets/logo.svg";
import passportGlobe from "../assets/footertopSVG.png";
import fullGlobe from "../assets/globeFooter.webp";

const Footer = () => {
  return (
    <footer className=" overflow-hidden bottom-1 p-10 h-[50vh] text-black py-8">
      <div className="container h-full mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="left mb-4 md:mb-0 flex flex-col items-center md:items-start">
          <div className=" term-privacy flex space-x-4 mb-4">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="icons flex space-x-4">
            <a href="#">
              <img className="h-10" src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#">
              <img className="h-10" src={whatsappIcon} alt="WhatsApp" />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="center text-center md:text-center mb-4 md:mb-0">
          <div className="logo-image flex flex-col items-center ">
            <img src={logo} alt="Logo" className="mx-auto md:mx-0" />
            <p className="mt-2">
              Head Office: 3577 Harlem Road,
              <br />
              Cheektowaga, NY 14225, USA
            </p>
          </div>
          <div className="passport-image ">
            <img
              src={passportGlobe}
              alt="passport Globe"
              className="half-globe bottom-auto "
            />
          </div>
          <div className="globe">
            <img
              src={fullGlobe}
              alt="Full Globe"
              className="full-globe size-2/3 mx-auto md:mx-0"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="right flex flex-col items-center md:items-end">
          <div className="flex space-x-4 mb-4">
            <p>Reviews</p>
            <p>Contact Us</p>
          </div>
          <div className="copyright">
            <p>&copy; Copyright 2024 Zindabhag</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
