import Banner from "./component/Banner";
import Brand from "./component/Brand";
import Ethereum from "./component/Ethereum";
import Footer from "./component/Footer";
import Header from "./component/Header";
import InGame from "./component/InGame";
import KeepInTouch from "./component/KeepInTouch";
import Patners from "./component/Patners";
import StaySharp from "./component/StaySharp";
import Tokenize from "./component/Tokenize";
import VirtualReality from "./component/VirtualReality";

const index = () => {
  return (
    <>
      <Header />
      <Banner />
      <Brand />
      <Ethereum />
      <Tokenize />
      <VirtualReality />
      <InGame />
      <Patners />
      <StaySharp />
      <KeepInTouch />
      <Footer />
    </>
  );
};

export default index;
