import facebookIcon from "../assets/svgexport-16.svg";
import whatsappIcon from "../assets/svgexport-17.svg";
import logo from "../assets/logo.svg";
import fullGlobe from "../assets/globeFooter.webp";

const Footer = () => {
  return (
    <footer className="footer-container mx-auto text-footer-text-color font-medium sm:mt-5 md:mt-20 bg-footerbg bg-no-repeat bg-bottom">
      <a
        aria-label="zindabhag logo"
        className="hidden md:flex flex-center w-full"
        href="/"
      >
        <div className="flex justify-cener item-center flex-col">
          <img src={logo} alt="" />

          <div>
            <p className="text-base">Head office: 3577 Harlem Road,</p>
            <p className="text-base">Cheektowaga, NY 14225, USA</p>
          </div>
        </div>
      </a>
      <div className="hidden md:flex md:flex-row mt-2 justify-between mx-10">
        <div className="md:flex flex-1 items-center ">
          <a
            className="mx-2 lg:mx-4 font-bold z-10"
            href="/terms-and-condition"
          >
            Terms &amp; Condition
          </a>
          <a className="mx-2 lg:mx-4 font-bold z-10" href="/privacy-policy">
            Privacy Policy
          </a>
        </div>
        <div className="md:flex flex-1  justify-end items-center">
          <a className="mx-2 lg:mx-4 font-bold z-10" href="/reviews">
            Reviews
          </a>
          <a className="mx-2 lg:mx-4 font-bold z-10" href="/contact-us">
            Contact Us
          </a>
        </div>
      </div>
      <div className="hidden md:flex md:justify-between mx-10">
        <div className="flex justify-between mt-5">
          <div className="flex flex-1 items-center z-10">
            <a aria-label="Facebook" href="#" target="_blank">
              <div className="mx-1 font-bold">
                <img src={facebookIcon} className="h-[8vh]" alt="Facebook" />
              </div>
            </a>
            <a
              aria-label="WhatsApp"
              href="https://www.whatsapp.com/channel/0029VaI4DRV0lwguNsGLFz3a"
              target="_blank"
            >
              <div className="mx-1 font-bold">
                <img src={whatsappIcon} className="h-[8vh]" alt="Whatsapp" />
              </div>
            </a>
          </div>
        </div>
        <div className="text-gray-500 mt-7">
          <p className="text-base">Copyright © 2024 ZindaBhag</p>
        </div>
      </div>
      <div className="flex justify-center items-center md:hidden flex-col bg-footerbg bg-cover bg--repeat">
        <a href="/">
          <img src={logo} className="mt-12 mr-4" alt="" />
        </a>
        <div className="flex flex-1 font-normal flex-wrap my-4">
          <div className="flex flex-col text-center">
            <a className="font-semibold" href="/terms-and-condition">
              Terms &amp; Condition
            </a>
            <a className="font-semibold" href="/privacy-policy">
              Privacy Policy
            </a>
            <a className="font-semibold" href="/reviews">
              Reviews
            </a>
            <a className="font-semibold" href="/contact-us">
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex items-center z-10">
          <a href="https://www.facebook.com/zindabhag01" target="_blank">
            <div className="mx-1 font-bold">
              <img src={facebookIcon} className="h-[10vh]" alt="Facebook" />
            </div>
          </a>
          <a
            href="https://www.whatsapp.com/channel/0029VaI4DRV0lwguNsGLFz3a"
            target="_blank"
          >
            <div className="mx-1 font-bold">
              <img src={whatsappIcon} className="h-[10vh]" alt="Whatsapp" />
            </div>
          </a>
        </div>
        <div className="flex flex-1 justify-center text-center text-gray-500 -mb-24">
          <p className="mt-9 text-base">Copyright © 2024 ZindaBhag</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-80 h-64 overflow-hidden">
            <div className="w-full h-full transform translate-y-1/2">
              <img
                alt="globe"
                src={fullGlobe}
                className="object-cover animate-spin-slow"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="hidden md:flex justify-center -my-44">
          <img src={logo} alt="Footer" />
        </div>
        <div className="hidden md:flex justify-center">
          <div className="w-96 h-64 ml-7 overflow-hidden">
            <div className="w-full h-full transform translate-y-1/2">
              <img
                alt="globe"
                src={fullGlobe}
                className="object-cover animate-spin-slow"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
