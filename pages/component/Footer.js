import Image from "next/image";
import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer-section bg-000">
      <div className="container">
        <div className="row">
          <div className="col-md-3 my-3">
            <Image src="/logo.png" width={140} height={60} alt="" />
            <p className="mb-0 mt-3">
              2022 by Somnium Space LTD. Somnium Space and Somnium Space Logo
              are trademarks of Somnium Space LTD. All other trademarks are the
              property of their respective owners. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 my-5">
            <div className="d-flex justify-content-between align-items-center">
              <div className="">
                <a href="/">
                  <h5>Get Somnium</h5>
                </a>
                <a href="/">
                  <h5>Events</h5>
                </a>
              </div>
              <div className="">
                <a href="/">
                  <h5>Partners</h5>
                </a>
                <a href="/">
                  <h5>Support</h5>
                </a>
              </div>
              <div className="">
                <a href="/">
                  <h5>Terms of Service</h5>
                </a>
                <a href="/">
                  <h5>Privacy Policy</h5>
                </a>
              </div>
              <div className="">
                <a href="/">
                  <h5>FAQ</h5>
                </a>
                <a href="/">
                  <h5>Contact</h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-3 social-icons">
            <div className="d-flex justify-content-evenly">
              <a href="/">
                <FaDiscord />
              </a>
              <a href="/">
                <FaFacebookF />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
            </div>
            <div className="d-flex justify-content-evenly mb-3">
              <a href="/">
                <IoIosSend />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
              <a href="/">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
