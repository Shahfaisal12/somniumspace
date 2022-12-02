import Image from "next/image";

const Ethereum = () => {
  return (
    <div className="ethereum-section">
      <div className="main-img">
        <div className="position-relative w-100" style={{ height: "1000px" }}>
          <Image
            src="/bg-solanna.png"
            fill
            className="img-fluid"
            alt=""
          />
          <div className="shoes-sec">
            <Image
              src="/shoes-shadow.png"
              fill
              className="shoes-shadow img-fluid"
              alt=""
            />
            <Image
              src="/shoes.png"
              fill
              className="shoes img-fluid"
              alt=""
            />
          </div>
          <Image
            src="/profile.png"
            fill
            className="profile img-fluid"
            alt=""
          />
          <Image
            src="/char-holo.png"
            fill
            className="char-holo img-fluid"
            alt=""
          />
          <div className="loca-pro">
            <Image
              src="/map-pro.png"
              fill
              className="map-pro img-fluid"
              alt=""
            />
            <Image
              src="/location-pro.png"
              fill
              className="location-pro img-fluid"
              alt=""
            />
          </div>
          <div className="watch-sec">
            <Image
              src="/watchshawdow.png"
              fill
              className="watchshawdow img-fluid"
              alt=""
            />
            <Image
              src="/watch.png"
              fill
              className="watch img-fluid"
              alt=""
            />
          </div>
          <div className="position-relative w-100" style={{ height: "400px" }}>
            <Image
              src="/ab-solanna.png"
              fill
              className="img-fluid"
              alt=""
            />
            <div
              className="content text-center w-75 m-auto position-absolute"
              style={{ left: "0", right: "0" }}
            >
              <h3 className=" mb-0" style={{ marginTop: "80px" }}>
                True Ownership of In-Game Assets on
              </h3>
              <h2 className="fw-bold display-5">
                ETHEREUM & SOLANA BLOCKCHAIN
              </h2>{" "}
              <br />
              <span className="mt-5 fs-5">in Partnership with</span>
              <div className="d-flex">
                <div className="">
                  <Image
                    src="/polygon.png"
                    className="img-fluid"
                    width={210}
                    height={70}
                    alt=""
                  />
                </div>
                <div className="ms-auto ">
                  <Image
                    src="/holaplex.png"
                    className="img-fluid"
                    width={210}
                    height={70}
                    alt=""
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="">
                  <Image
                    src="/opensea-logo.png"
                    className="img-fluid"
                    width={210}
                    height={70}
                    alt=""
                  />
                </div>
                <div className="">
                  <Image
                    src="/FTX-logo.png"
                    className="img-fluid"
                    width={210}
                    height={70}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-100 position-absolute"
            style={{ height: "400px", bottom: "-30px" }}
          >
            <Image
              src="/map-bg-shadow.svg"
              fill
              className="img-fluid"
              alt=""
            />
          </div>
          <div
            className="map-section position-absolute bg-19343D"
            style={{
              zIndex: "-1",
              top: "700",
              left: "0",
              right: "0",
              height: "1200px",
            }}
          >
            <Image
              src="/map-bg.png"
              width={600}
              height={1200}
              style={{ width: "100%", height: "100%" }}
              className="img-fluid"
              alt=""
            />
            <Image
              src="/map.png"
              width={200}
              height={400}
              className="map img-fluid position-absolute"
              alt=""
            />
            <Image
              src="/markers.svg"
              width={200}
              height={400}
              className="marks img-fluid position-absolute"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ethereum;
