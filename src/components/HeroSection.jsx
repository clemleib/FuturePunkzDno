import React from "react";
import { Link } from "react-router-dom";
import CarouselItems from "./CarouselItems";

const HeroSection = () => {
  return (
    <section className="HeroSection" id="homeSection">
      <div className="container">
        <div>
          <img className="img-fluid" src="/images/logo.png" alt="" />
        </div>
        <p className="mainText">
          4444 Future Punkz enter the Blockchain to disrupt the corrupt <br />
          financial system one JPEG at a time. Welcome to the Revolution!
        </p>
      </div>
      <div>
        <CarouselItems rtl={false} speed={1300} />
      </div>
      <div>
        <CarouselItems rtl={true} speed={1600} />
      </div>
      <div className="container mint-section">
        <div>
          <p className="price">Mint price: Free / 0.0077 ETH + Gas</p>
          <Link to="/Mint" className="mintBtn">
            mint now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
