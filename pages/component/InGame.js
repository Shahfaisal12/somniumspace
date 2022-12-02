import Image from "next/image";

const InGame = () => {
  return (
    <div className="ingame-section">
      <div className="container">
        <div className="header-content py-5 text-center">
          <h3 className="mb-0 fs-3">SOMNIUM SPACE</h3>
          <h2 className="display-5 fw-bold mb-0">INGAME MECHANICS</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex justify-content-end align-items-center py-4">
              <div className="text-end">
                <h1>Cross Platform</h1>
                <p>Available on all major VR headsets.</p>
              </div>
              <div className="img px-5">
                <Image
                  src="/Ingame-pc.png"
                  width={70}
                  height={60}
                  alt=""
                 />
              </div>
            </div>
            <div className="d-flex align-items-center py-4">
              <div className="text-end">
                <h1>Customizable PC Client</h1>
                <p>
                  Create and adjust your own layout setup for fast in-game
                  interaction.
                </p>
              </div>
              <div className="img px-5">
                <Image src="/ingame3.png" width={70} height={60} alt="" />
              </div>
            </div>
            <div className="d-flex align-items-center py-4">
              <div className="text-end">
                <h1 className="text-danger">Live Forever</h1>
                <p>
                  Automatic recording mode of yourself on your own property for
                  future AI analysis to bring your avatar to life.
                </p>
              </div>
              <div className="img px-5">
                <Image src="/ingame4.png" width={60} height={70} alt="" />
              </div>
            </div>
            <div className="d-flex align-items-center py-4">
              <div className="text-end">
                <h1>Blockchain</h1>
                <p>
                  Integration of blockchain allows true ownership of digital
                  goods, avatars, items and virtual land. We are creating a long
                  lasting Economy which will allow instant monetization for our
                  in-world creators.
                </p>
              </div>
              <div className="img px-5">
                <Image src="/ingame5.png" width={60} height={50} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-center py-4">
              <div className="img px-5">
                <Image src="/ingame2.png" width={70} height={70} alt="" />
              </div>
              <div className="">
                <h1>Persistent Social VR World</h1>
                <p>
                  Unlimited scalable world built by users within one instance.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center py-4">
              <div className="img px-5">
                <Image src="/ingame6.png" width={70} height={60} alt="" />
              </div>
              <div className="">
                <h1>Virtual Land Ownership</h1>
                <p>
                  Buy and customize your own land. Build anything you envision.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center py-4">
              <div className="img px-5">
                <Image src="/ingame7.png" width={60} height={70} alt="" />
              </div>
              <div className="">
                <h1>Scriptable World</h1>
                <p>
                  Program your own experience and monetize through the asset
                  store or on your property.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center py-4">
              <div className="img px-5">
                <Image src="/ingame8.png" width={60} height={70} alt="" />
              </div>
              <div className="">
                <h1>Monetize Your Space</h1>
                <p>
                  Take advantage of fully programmatic VR advertisement plugin.
                  Capture and analyze gaze tracking, engagement and conversion
                  rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-sec d-flex justify-content-center">
        <h3>Available Now</h3>
        <div className="d-flex justify-content-between align-items-center mx-5 w-25">
          <Image src="/VR-window.png" width={60} height={50} alt="" />
          <Image src="/VR-text-img.png" width={70} height={60} alt="" />
          <Image src="/vivi.png" width={70} height={60} alt="" />
          <Image src="/steam.png" width={70} height={60} alt="" />
        </div>
        <h3>Ready to Play</h3>
      </div>
    </div>
  );
};

export default InGame;
