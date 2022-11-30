import Image from "next/image";

const Patners = () => {
  return (
    <div className="partner-section">
      <div className="container">
        <div className="header-content py-5 text-center">
          <h3 className="mb-0 fs-3">SOMNIUM SPACE</h3>
          <h2 className="display-5 fw-bold mb-0">PARTNERS</h2>
        </div>
        <div className="d-flex justify-content-end align-items-center py-4">
          <div className="img px-5">
            <Image src="/partner1.png" width={100} height={40} alt=""></Image>
          </div>
          <div className="">
            <h1>Somnium Space & Admix</h1>
            <p>
              We work together to bring advertising revenues for our players.
              It's the best and fastest way to monetize your property, measure,
              analyze how your audience interacts in VR.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-end align-items-center py-4">
          <div className="img px-5">
            <Image src="/partner8.png" width={120} height={100} alt=""></Image>
          </div>
          <div className="">
            <h1>High Fidelity & JanusVR</h1>
            <p>
              We believe that the future of the VR space is in connectivity and
              interoperability between open social worlds. That’s why we
              partnered with HighFidelity and JanusVR on two groundbreaking
              projects:
            </p>
            <div className="d-flex align-items-center">
              <h1 className="mb-0">OASIS</h1>
              <p className="mb-0">- Teleporting between VR worlds</p>
            </div>
            <div className="d-flex align-items-center">
              <h1>VRBA</h1>
              <p>- Virtual Reality Blockchain Alliance.</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end align-items-center py-4">
          <div className="img px-5">
            <Image src="/partner7.png" width={120} height={40} alt=""></Image>
          </div>
          <div className="">
            <h1>Sony</h1>
            <p>
              In 2019 we partnered with Sony and their amazing 3D model creation
              technology that allows our users to create full embodiment avatars
              of themselves in minutes alongside any 3D models for Somnium
              Store. Sony’s VR store in Somnium Space was among the world’s
              first.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-end align-items-center py-4">
          <div className="img px-5">
            <Image src="/partner6.png" width={150} height={100} alt=""></Image>
          </div>
          <div className="">
            <h1>Polygon & OpenSea</h1>
            <p>
              Our blockchain partners Polygon and OpenSea offer the best
              technology there is in their specific fields. OpenSea’s online
              platform is the largest marketplace for online collectibles, while
              Polygon’s unique second layer brings speed and close to zero
              transaction costs to our users for our in-game transactions.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-end align-items-center py-4">
          <div className="img px-5">
            <Image src="/partner5.png" width={150} height={40} alt=""></Image>
          </div>
          <div className="">
            <h1>Blockchain Gaming Alliance</h1>
            <p>
              We became a member of Blockchain Game Alliance to contribute
              towards building a true and decentralized Metaverse.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-end align-items-center py-4">
          <div className="img px-5">
            <Image src="/partner4.png" width={120} height={50} alt=""></Image>
          </div>
          <div className="">
            <h1>Somnium Space & Gemini</h1>
            <p>
              We are excited to be partners with one of the leading exchanges in
              the world. Gemini has invested into Somnium Space and together we
              believe and work towards an open and decentralized future of The
              Metaverse.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-end align-items-center py-4">
          <div className="img px-5">
            <Image src="/partner2.png" width={120} height={50} alt=""></Image>
          </div>
          <div className="">
            <h1>Somnium Space & Holaplex</h1>
            <p>
              We have partnered with Holaplex to release our first official NFT
              store on Solana blockchain. We are delighted to work with this
              energetic and innovative team.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-end align-items-center py-4">
          <div className="img px-5">
            <Image src="/partner3.png" width={120} height={60} alt=""></Image>
          </div>
          <div className="">
            <h1>Somnium Space & FTX</h1>
            <p>
              We have partnered with one of the leading and largest exchanges in
              the world to bring Somnium NFTs into their official NFT
              marketplace. We are excited about this partnership and together we
              are looking forward to a long-term relationship.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-sec d-flex justify-content-center">
        <h3>Available Now</h3>
        <div className="d-flex justify-content-between align-items-center mx-5 w-25">
          <Image src="/VR-window.png" width={60} height={50} alt=""></Image>
          <Image src="/VR-text-img.png" width={70} height={60} alt=""></Image>
          <Image src="/vivi.png" width={70} height={60} alt=""></Image>
          <Image src="/steam.png" width={70} height={60} alt=""></Image>
        </div>
        <h3>Ready to Play</h3>
      </div>
    </div>
  );
};

export default Patners;
