import {
  FaDiscord,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";

const KeepInTouch = () => {
  return (
    <div className="keep-in-touch position-relative">
      <div className="container">
        <div className="header-content pt-5 pb-2 text-center w-75 m-auto">
          <h3 className="mb-5 fs-4">KEEP IN TOUCH WITH</h3>
          <h3 className="mb-5 fs-4">
            DREAM COMMUNITY <br />
            Share your thoughts with Us and the World
          </h3>
          <h4>
            We are an open social world. Our community is the most important
            thing. We are active and happy to answer every question through our
            live channels or through our social channels.
          </h4>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="icons d-flex align-items-center justify-content-center">
              <a href="/">
                <FaDiscord />
              </a>
            </div>
            <iframe
              id="reddit-embed"
              src="https://www.redditmedia.com/r/discordapp/comments/z44bx5/mee6_now_dms_you_unsolicited_advertisements_i/?ref_source=embed&amp;ref=share&amp;embed=true"
              sandbox="allow-scripts allow-same-origin allow-popups"
              style={{ border: "none", width: "100%" }}
              height="300"
              //   width="1000"
              scrolling="no"
            ></iframe>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6">
            <div className="icons d-flex align-items-center justify-content-center mb-3">
              <a href="/">
                <FaTwitter />
              </a>
            </div>
            <div className="overflow-auto" style={{ height: "500px" }}>
              <a
                class="twitter-timeline"
                href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw"
              >
                Tweets by TwitterDev
              </a>{" "}
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
            </div>
          </div>
          <div className="col-md-6">
            <div className="icons d-flex align-items-center justify-content-center mb-3">
              <a href="/">
                <FaFacebookF />
              </a>
            </div>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=1920&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width=""
              height="500"
              style={{ border: "none", overflow: "hidden", width:'100%' }}
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="social-icons-dev position-absolute">
          <Image src="/socialimage1.png" width={30} height={30} alt=""></Image> <div class="vr my-auto"></div>
          <Image src="/socialimage2.png" width={30} height={30} alt=""></Image> <div class="vr my-auto"></div>
          <Image src="/socialimage3.png" width={30} height={30} alt=""></Image> <div class="vr my-auto"></div>
          <Image src="/socialimage4.png" width={30} height={30} alt=""></Image> <div class="vr my-auto"></div>
          <Image src="/socialimage5.png" width={30} height={30} alt=""></Image>
        </div>
      </div>
  );
};

export default KeepInTouch;


/* 
          <RiSendPlaneFill /> <FaInstagram /> <FaYoutube /> */