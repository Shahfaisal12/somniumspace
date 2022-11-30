import Image from "next/image";

const Brand = () => {
  return (
    <>
     <div className="position-relative">
     <div className="brand-section d-flex align-items-center position-absolute" style={{left:'0', right:'0'}}>
     <div className="container">
       <div className="d-flex flex-wrap justify-content-between align-items-center">
         <a href="/">
           <Image
             src="/brand1.png"
             width={70}
             height={70}
             className="img-fluid"
             alt=""
           ></Image>
         </a>
         <div className="vr"></div>
         <a href="/">
           <Image
             src="/brand2.png"
             width={70}
             height={70}
             className="img-fluid"
             alt=""
           ></Image>
         </a>
         <div className="vr"></div>
         <a href="/">
           <Image
             src="/brand3.png"
             width={70}
             height={70}
             className="img-fluid"
             alt=""
           ></Image>
         </a>
         <div className="vr"></div>
         <a href="/">
           <Image
             src="/brand4.png"
             width={70}
             height={70}
             className="img-fluid"
             alt=""
           ></Image>
         </a>
         <div className="vr"></div>
         <a href="/">
           <Image
             src="/brand5.png"
             width={70}
             height={70}
             className="img-fluid"
             alt=""
           ></Image>
         </a>
         <div className="vr"></div>
         <a href="/">
           <Image
             src="/brand6.png"
             width={70}
             height={70}
             className="img-fluid"
             alt=""
           ></Image>
         </a>
         <div className="vr"></div>
         <a href="/">
           <Image
             src="/brand7.png"
             width={70}
             height={70}
             className="img-fluid"
             alt=""
           ></Image>
         </a>
         <div className="vr"></div>
         <a href="/">
           <Image
             src="/brand8.png"
             width={70}
             height={70}
             className="img-fluid"
             alt=""
           ></Image>
         </a>
         <div className="vr"></div>
         <a href="/">
           <Image
             src="/brand9.png"
             width={70}
             height={70}
             className="img-fluid"
             alt=""
           ></Image>
         </a>
       </div>
     </div>
   </div>
     </div>
    </>
  );
};

export default Brand;
