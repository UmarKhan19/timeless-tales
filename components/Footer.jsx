import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f49b01]  text-[#eee] py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaFacebook className=" text-2xl" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaTwitter className=" text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className=" text-2xl" />
          </a>
        </div>
        <div className="flex justify-center">
          <a href="mailto:info@timelesstales.com" className=" text-sm flex">
            <FaEnvelope className="mr-2  text-base" />{" "}
            <span>info@timelesstales.com</span>
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-4 text-center ">
        &copy; {new Date().getFullYear()} Timeless Tales . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
