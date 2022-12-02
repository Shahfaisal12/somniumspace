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
            <div className="d-flex justify-content-center">
              <iframe
                src="https://e.widgetbot.io/channels/494994753146847233/496817347211034630"
                width="1000"
                height="400"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6">
            <div className="icons d-flex align-items-center justify-content-center mb-3">
              <a href="/">
                <FaTwitter />
              </a>
            </div>
            <div className="">
              <iframe
                id="twitter-widget-0"
                scrolling="no"
                frameborder="0"
                allowtransparency="true"
                allowfullscreen="true"
                class=""
                style={{
                  position: "static",
                  visibility: "visible",
                  width: "500px",
                  height: "600px",
                  display: "block",
                }}
                title="Twitter Timeline"
                src="https://syndication.twitter.com/srv/timeline-profile/screen-name/somniumspace?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOlsibGlua3RyLmVlIiwidHIuZWUiLCJ0ZXJyYS5jb20uYnIiLCJ3d3cubGlua3RyLmVlIiwid3d3LnRyLmVlIiwid3d3LnRlcnJhLmNvbS5iciJdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdGltZWxpbmVfMTIwMzQiOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2JhY2tlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3JlZnNyY19zZXNzaW9uIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19jaGluX3BpbGxzXzE0NzQxIjp7ImJ1Y2tldCI6ImNvbG9yX2ljb25zIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9yZXN1bHRfbWlncmF0aW9uXzEzOTc5Ijp7ImJ1Y2tldCI6InR3ZWV0X3Jlc3VsdCIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2Vuc2l0aXZlX21lZGlhX2ludGVyc3RpdGlhbF8xMzk2MyI6eyJidWNrZXQiOiJpbnRlcnN0aXRpYWwiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2V4cGVyaW1lbnRzX2Nvb2tpZV9leHBpcmF0aW9uIjp7ImJ1Y2tldCI6MTIwOTYwMCwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2hvd19ibHVlX3ZlcmlmaWVkX2JhZGdlIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2Zyb250ZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH19&amp;frame=false&amp;hideBorder=false&amp;hideFooter=false&amp;hideHeader=false&amp;hideScrollBar=false&amp;lang=en&amp;maxHeight=600px&amp;origin=https%3A%2F%2Fsomniumspace.com%2F&amp;sessionId=16c8f91a67b0bb263fda87fe728bea3045055e73&amp;showHeader=true&amp;showReplies=false&amp;theme=dark&amp;transparent=false&amp;widgetsVersion=a3525f077c700%3A1667415560940"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6">
            <div className="icons d-flex align-items-center justify-content-center mb-3">
              <a href="/">
                <FaFacebookF />
              </a>
            </div>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSomniumSpace&amp;tabs=timeline&amp;width=500&amp;height=600&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
              width="500"
              height="600"
              scrolling="no"
              frameborder="0"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="social-icons-dev position-absolute">
        <Image src="/socialimage1.png" width={30} height={30} alt=""/>
        <div class="vr my-auto"></div>
        <Image
          src="/socialimage2.png"
          width={30}
          height={30}
          alt=""
        />
        <div class="vr my-auto"></div>
        <Image
          src="/socialimage3.png"
          width={30}
          height={30}
          alt=""
        />
        <div class="vr my-auto"></div>
        <Image
          src="/socialimage4.png"
          width={30}
          height={30}
          alt=""
        />
        <div class="vr my-auto"></div>
        <Image src="/socialimage5.png" width={30} height={30} alt=""></Image>
      </div>
    </div>
  );
};

export default KeepInTouch;

/* 
          <RiSendPlaneFill /> <FaInstagram /> <FaYoutube /> */
