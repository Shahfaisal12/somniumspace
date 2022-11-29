// import Link from 'next/link'
import Image from "next/image";
import {
  FaDiscord,
  FaWindows,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { IoIosSend } from "react-icons/io";

const header = () => {
  return (
    <>
      <div class="header-section d-flex" >
        <div class="bg-000" style={{paddingLeft:'8px'}}>
          <nav className="navbar navbar-expand-lg navbar-light pt-1">
            <div className="container-fluid p-0">
              <a className="navbar-brand p-0" href="#">
                <Image src="/logo.png" width="130" height="40"></Image>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link text-white active" aria-current="page" href="#">
                      Blockchain
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      Mechanics
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      Partners
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      Events
                    </a>
                  </li>
                </ul>
                <div className="custom-btn d-flex">
                  <button className="ant-btn btn-explore">
                    Explore Somnium Map
                  </button>
                  <button className="ant-btn btn-market">Marketplace</button>
                </div>
              </div>
            </div>
          </nav>
          <div className="in-out d-flex justify-content-center">
            <a href="/" className="text-decoration-none text-white">
              Log In
            </a>
            <div className="vr mx-2 text-white"></div>
            <a
              href=""
              className="text-decoration-none text-white"
              style={{ marginRight: "53px" }}
            >
              Sign Up
            </a>
            <div className="d-flex justify-content-between social-icons">
              <a href="/" className=" icon">
                <FaDiscord />
              </a>
              <a href="/" className=" icon">
                <FaFacebookF />
              </a>
              <a href="/" className=" icon">
                <FaInstagram />
              </a>
              <a href="/" className=" icon">
                <IoIosSend />
              </a>
              <a href="/" className=" icon">
                <FaTwitter />
              </a>
              <a href="/" className=" icon">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        {/* <div class="p-2">Flex item</div> */}
          <div className="join-sec w-100 h-100">
            {/* <div> */}
            <button className='btn-bg btn-download w-100'><span className="position-relative">Download VR Client &nbsp;<span className="fs-4"><FaWindows /></span></span></button>
{/*             
            </div>
            <div> */}
            <button className='btn-bg btn-join w-100' ><span className="position-relative">Join SOMNIUM <span className="">WEB</span></span></button>
            {/* </div> */}
        </div>
      </div>
    </>
    /* 
      
         */
  );
};

export default header;
