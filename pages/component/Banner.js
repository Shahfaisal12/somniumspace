import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <div className="banner-section">
      <Carousel
        slide={false}
        className="position-relative"
        id="carouselMDExample"
      >
        <Carousel.Item>
          <video
            className="slider-video"
            src="https://somniumspace.com/images/AvatarsAnimation.mp4"
            loop
            autoPlay
            muted
            loading="lazy"
            style={{ width: "100%", height: "auto" }}
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
            style={{ width: "100%", height: "auto" }}
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
            style={{ width: "100%", height: "auto" }}
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
            style={{ width: "100%", height: "auto" }}
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
            style={{ width: "100%", height: "auto" }}
          ></video>
        </Carousel.Item>

        <div class="carousel-indicators left-auto">
          <button
            type="button"
            data-mdb-target="#carouselMDExample"
            data-mdb-slide-to="0"
            className="active p-2"
            aria-current="true"
            aria-label="Slide 1"
            style={{ width: "100px", background: "#000000" }}
          >
            <img
              src="/thumbnail1.png"
              className=" d-block w-100 shadow-1-strong rounded"
              alt=""
            />
          </button>
          <button
            className="position-relative p-2"
            type="button"
            data-mdb-target="#carouselMDExample"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
            style={{ width: "100px", background: "#000000" }}
          >
            <img
              src="/thumbnail2.png"
              className=" d-block w-100 shadow-1-strong rounded"
              alt=""
            />
            <img
              src="/play.png"
              className=" d-block shadow-1-strong rounded position-absolute"
              width={60}
              alt=""
              style={{ top: "20px", left: "20px" }}
            />
          </button>
          <button
            className="position-relative p-2"
            type="button"
            data-mdb-target="#carouselMDExample"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
            style={{ width: "100px", background: "#000000" }}
          >
            <img
              src="/thumbnail3.png"
              className=" d-block w-100 shadow-1-strong rounded"
              alt=""
            />
            <img
              src="/play.png"
              className=" d-block shadow-1-strong rounded position-absolute"
              width={60}
              alt=""
              style={{ top: "20px", left: "20px" }}
            />
          </button>
          <button
            className="position-relative p-2"
            type="button"
            data-mdb-target="#carouselMDExample"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
            style={{ width: "100px", background: "#000000" }}
          >
            <img
              src="/thumbnail4.png"
              className=" d-block w-100 shadow-1-strong rounded"
              alt=""
            />
            <img
              src="/play.png"
              className=" d-block shadow-1-strong rounded position-absolute"
              width={60}
              alt=""
              style={{ top: "20px", left: "20px" }}
            />
          </button>
          <button
            className="position-relative p-2"
            type="button"
            data-mdb-target="#carouselMDExample"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
            style={{ width: "100px", background: "#000000" }}
          >
            <img
              src="/thumbnail5.png"
              className=" d-block w-100 shadow-1-strong rounded"
              alt=""
            />
            <img
              src="/play.png"
              className=" d-block shadow-1-strong rounded position-absolute"
              width={60}
              alt=""
              style={{ top: "20px", left: "20px" }}
            />
          </button>
          <button
            className="position-relative p-2"
            type="button"
            data-mdb-target="#carouselMDExample"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
            style={{ width: "100px", background: "#000000" }}
          >
            <img
              src="/thumbnail6.png"
              className=" d-block w-100 shadow-1-strong rounded"
              alt=""
            />
            <img
              src="/play.png"
              className=" d-block shadow-1-strong rounded position-absolute"
              width={60}
              alt=""
              style={{ top: "20px", left: "20px" }}
            />
          </button>
        </div>

        <div
          className="position-absolute"
          style={{ top: "200px", right: "350px" }}
        >
          <div className="d-flex justify-content-center align-items-center">
            <img src="/carosel1.png" alt="" />
            <div style={{ marginLeft: "15px" }}>
              <img src="/carosel2.png" className="mb-5" alt="" />
              <br />
              <img src="/carosel3.png" className="position-relative p-2" alt="" />
              <span
                className="position-absolute text-download"
                style={{ left: "44%", top:'27%' }}
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
            <div className="position-relative p-2" style={{ marginLeft: "15px" }}>
              <img
                src="/carosel5.png"
                className="img-fluid"
                width={150}
                alt=""
              />
              <span
                className="position-absolute"
                style={{ left: "30px", top: "25px" }}
              >
                <img src="/carosel6.png" className="img-fluid" width={90} />
              </span>
            </div>
            <div className="position-relative p-2" style={{ marginLeft: "15px" }}>
              <img
                src="/carosel5.png"
                className="img-fluid"
                width={150}
                alt=""
              />
              <span
                className="position-absolute"
                style={{ left: "30px", top: "25px" }}
              >
                <img src="/carosel7.png" className="img-fluid" width={90} />
              </span>
            </div>
            <div className="position-relative p-2" style={{ marginLeft: "15px" }}>
              <img
                src="/carosel5.png"
                className="img-fluid"
                width={150}
                alt=""
              />
              <span
                className="position-absolute"
                style={{ left: "30px", top: "25px" }}
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
