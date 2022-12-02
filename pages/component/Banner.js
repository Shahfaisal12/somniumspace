import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <div className="banner-section">
      <Carousel slide={false} className="position-relative">
        <Carousel.Item>
          <video
            className="slider-video"
            src="https://somniumspace.com/images/AvatarsAnimation.mp4"
            loop
            autoPlay
            muted
            loading="lazy"
          style={{width:'100%', height:'auto'}}
          ></video>
        </Carousel.Item>
        <Carousel.Item>
          <video
            className="slider-video"
            src="https://somniumspace.com/images/video22.mp4"
            loop
            autoPlay
            muted
            loading="lazy"
            style={{width:'100%', height:'auto'}}
          ></video>
        </Carousel.Item>
        <Carousel.Item>
          <video
            className="slider-video"
            src="https://somniumspace.com/images/video33.mp4"
            loop
            autoPlay
            muted
            loading="lazy"
            style={{width:'100%', height:'auto'}}
          ></video>
        </Carousel.Item>
        <Carousel.Item>
          <video
            className="slider-video"
            src="https://somniumspace.com/images/video44.mp4"
            loop
            autoPlay
            muted
            loading="lazy"
          ></video>
        </Carousel.Item>
        <Carousel.Item>
          <video
            className="slider-video"
            src="https://somniumspace.com/images/video66.mp4"
            loop
            autoPlay
            muted
            loading="lazy"
            style={{width:'100%', height:'auto'}}
          ></video>
        </Carousel.Item>
        <Carousel.Item>
          <video
            className="slider-video"
            src="https://somniumspace.com/images/video77.mp4"
            loop
            autoPlay
            muted
            loading="lazy"
            style={{width:'100%', height:'auto'}}
          ></video>
        </Carousel.Item>
        <div
          className="position-absolute"
          style={{ top: "200px", right: "350px" }}
        >
          <div className="d-flex justify-content-center align-items-center">
            <img src="/carosel1.png" alt="" />
            <div style={{ marginLeft: "15px" }}>
              <img src="/carosel2.png" className="mb-5" alt="" />
              <br />
              <img src="/carosel3.png" className="position-relative" alt="" />
              <span
                className="position-absolute text-download"
                style={{ left: "40%" }}
              >
                Download
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-5">
            <img src="/carosel4.png" alt="" />
            <div className="text-access">
              <span>Access CUBEs</span>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <div className="position-relative" style={{ marginLeft: "15px" }}>
              <img
                src="/carosel5.png"
                className="img-fluid"
                width={150}
                alt=""
              />
              <span
                className="position-absolute"
                style={{ left: "30px", top: "15px" }}
              >
                <img src="/carosel6.png" className="img-fluid" width={90} />
              </span>
            </div>
            <div className="position-relative" style={{ marginLeft: "15px" }}>
              <img
                src="/carosel5.png"
                className="img-fluid"
                width={150}
                alt=""
              />
              <span
                className="position-absolute"
                style={{ left: "30px", top: "15px" }}
              >
                <img src="/carosel7.png" className="img-fluid" width={90} />
              </span>
            </div>
            <div className="position-relative" style={{ marginLeft: "15px" }}>
              <img
                src="/carosel5.png"
                className="img-fluid"
                width={150}
                alt=""
              />
              <span
                className="position-absolute"
                style={{ left: "30px", top: "15px" }}
              >
                <img src="/carosel8.png" className="img-fluid" width={90} />
              </span>
            </div>
          </div>
        </div>
        <div
          className="unity d-flex flex-column position-absolute mt-3"
          style={{ right: "30px" }}
        >
          <div className="position-relative mb3">
            <img
              src="/unity-icon1.png"
              className="img-fluid"
              alt=""
              style={{ width: "200px" }}
            />
            <span
              className="position-absolute"
              style={{ bottom: "-30px", right: "30%" }}
            >
              UnitySDK
            </span>
          </div>
          <div className="position-relative mb-5">
            <img
              src="/unity-icon2.png"
              className="img-fluid"
              alt=""
              style={{ width: "200px" }}
            />
            <span
              className="position-absolute"
              style={{ bottom: "-30px", right: "30%" }}
            >
              UnitySDK
            </span>
          </div>
          <div className="position-relative mb-5">
            <img
              src="/unity-icon3.png"
              className="img-fluid"
              alt=""
              style={{ width: "200px" }}
            />
            <span
              className="position-absolute"
              style={{ bottom: "-30px", right: "30%" }}
            >
              UnitySDK
            </span>
          </div>
          <div className="position-relative mb-5">
            <img
              src="/unity-icon4.png"
              className="img-fluid"
              alt=""
              style={{ width: "200px" }}
            />
            <span
              className="position-absolute"
              style={{ bottom: "-30px", right: "30%" }}
            >
              UnitySDK
            </span>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
