const VirtualReality = () => {
  return (
    <div className="virtural-reality-section">
      <div className="header-content py-5 text-center">
        <h3 className="mb-0">SOMNIUM SPACE IS A</h3>
        <h2 className="display-5 fw-bold mb-0">VIRTUAL REALITY WORLD</h2>
        <h4>Open, Social & Persistent</h4>
      </div>

      <div className="d-flex align-items-center">
        <div className="left-content position-relative text-end">
          <h5>
            We are creating an Open, Social, Virtual Reality world. A world with
            its own economy and its own currency. A VR world with its own
            Marketplace, Games, Social experiences and Virtual Land ownership.
          </h5>
          <div
            className="position-absolute w-100 d-flex justify-content-end flex-column"
            style={{ top: "160px", right: "-160px", zIndex: "21" }}
          >
            <img
              src="/PC_client.png"
              className="img-fluid"
              style={{ maxWidth: "300px" }}
              alt=""
            ></img>
            <div className="text-center">
              <h5 className="mb-0">Oculus Quest</h5>
              <h5>Compatible</h5>
            </div>
          </div>
        </div>
        <div className="img position-relative">
          <img
            src="/VRmode.png"
            className=""
            alt=""
            style={{ width: "600px" }}
          ></img>
          <div
            className="content position-absolute w-100 text-center"
            style={{ bottom: "-40px" }}
          >
            <h5 className="mb-0">PC VR Mode</h5>
            <h5>Live Inside Somnium World</h5>
          </div>
        </div>
        <div className="right-content  position-relative">
          <h5>
            A VR world which is fully interconnected and seamless. Fully
            accessible from any device: PC & VR clients for user's Desktop or an
            immersive VR experience on mobile devices.
          </h5>
          <div
            className="position-absolute w-100 d-flex flex-column"
            style={{ top: "170px", left: "-65px" }}
          >
            <img src="/oculusNew.png" className="img-fluid" alt=""></img>
            <div className="text-center">
              <h5 className="mb-0">Oculus Quest</h5>
              <h5>Compatible</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-sec d-flex justify-content-center">
        <h1>Available Now</h1>
        <div className="d-flex justify-content-between align-items-center mx-5 w-25">
          <img src="/VR-window.png" className="img-fluid" alt=""></img>
          <img src="/VR-text-img.png" className="img-fluid" alt=""></img>
          <img src="/vivi.png" className="img-fluid" alt=""></img>
          <img src="/steam.png" className="img-fluid" alt=""></img>
        </div>
        <h1>Ready to Play</h1>
      </div>
    </div>
  );
};

export default VirtualReality;
