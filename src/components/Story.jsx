import React from "react";

const Story = () => {
  return (
    <div className="Story" id="storySection">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Who are we?</h1>
            {/* <p className="subText">Battle for Utopia</p> */}
            <p>
              We are the Punkz of the Future. We represent the values of
              decentralization, community and freedom. Imagine what the
              evolution of Cryptopunks would look like. Thats us!
            </p>
            <p>
              Futuristic mask styles, freaky hairstyles, neon eyes, lightsabers,
              cyber-shades, 3 species and many unique traits that make our
              collection the freshest Punk style artwork that’s out there.
            </p>
            <p>
              Some traits and backgrounds are inspired and paying homage to
              Fidenza, Cyberkongz, Cryptoadz, Dystopunks, Cryptopunks, and the
              culture of our generation. By holding one future punk you are
              holding the membership pass to our DAO ecosystem with future drops
              and many perks.
            </p>
            <p>
            We believe that web3 is the Future and that we can create a decentralized world.
            </p>
            <p>Let's DAO it the right way. .</p>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-4">
                <div>
                  <img
                    className="img-fluid"
                    src="/images/story/upper-left-corner.png"
                    alt=""
                  />
                </div>
                <div>
                  <img className="img-fluid" src="/images/gallery/8.png" alt="" />
                </div>
              </div>
              <div className="col-8">
                <div>
                  <img
                    className="img-fluid"
                    src="/images/story/story-right-low-corner.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-4">
                <div>
                  <img
                    className="img-fluid"
                    src="/images/image 14.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-4">
                <div>
                  <img
                    className="img-fluid"
                    src="/images/image 21.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-4">
                <div>
                  <img
                    className="img-fluid"
                    src="/images/image 34.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
