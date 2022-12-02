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
            style={{ width: "500", height: "auto" }}
          ></video>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <video
            className="slider-video"
            src="https://somniumspace.com/images/video22.mp4"
            loop
            autoPlay
            muted
            loading="lazy"
          ></video>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <video
            className="slider-video"
            src="https://somniumspace.com/images/video33.mp4"
            loop
            autoPlay
            muted
            loading="lazy"
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
          ></video>
        </Carousel.Item>
        <div
          className="position-absolute"
          style={{ top: "200px", right: "250px" }}
        >
          <div className="d-flex justify-content-center align-items-center">
            <img src="/carosel1.png" alt="" />
            <div style={{ marginLeft: "15px" }}>
              <img src="/carosel2.png" className="mb-3" alt="" />
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
      </Carousel>
    </div>
  );
};

export default Banner;
