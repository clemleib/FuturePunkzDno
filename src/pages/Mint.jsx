import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import Slider from "react-slick";
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
import { Images } from "../utils/images";


const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

async function loadTotalSupply() {
  const abiResponse = await fetch("/config/abi.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const abi = await abiResponse.json();
  const configResponse = await fetch("/config/config.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const CONFIG = await configResponse.json();

  const provider = new Web3.providers.HttpProvider(
    "https://eth-mainnet.alchemyapi.io/v2/f46UvqKN605uslUs-bulSi_cyVdvet-f"
  );
  Web3EthContract.setProvider(provider);

  const PunksContract = new Web3EthContract(abi, CONFIG.CONTRACT_ADDRESS);
  const totalSupply = await PunksContract.methods.totalSupply().call();
  const element = document.querySelector(".total-supply");
  element.innerHTML = `${totalSupply} / ${CONFIG.MAX_SUPPLY}`;
}
loadTotalSupply();

const Mint = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
    MAX_PER_TX: 0,
  });


  var settings = {
    vertical: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    cssEase: "linear",
    speed: 1300,
    autoplaySpeed: 0,
    pauseOnHover: "false",
  };

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .publicSalesMint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    console.log(data.availableForMint);
    if (newMintAmount > data.availableForMint) {
      newMintAmount = data.availableForMint;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <div className="Mint">
      <div className="container">
        <div className="row">
          <div className="offset-lg-1 col-md-6">
            <div>
              <a className="logoBrand" href="/">
                <img className="img-fluid" src="/images/logo.png" alt="" />
              </a>
            </div>
            <div style={{marginTop: "100px"}}>
              <div className="h-100 d-flex flex-column  justify-content-center">
                <h1 className="mainHeading">
                  Mint your Future Punkz Nft <br /> You can mint up to{" "}
                  {20 || data.availableForMint} NFTS per transaction.
                </h1>
                <p className="subText">
                  The price per Future Punkz NFT is Free /{" "}
                  {0.0077 || CONFIG.DISPLAY_COST} ETH + Gas.
                </p>
                <div className="numberBtn">
                  <div className="darkBtn">
                    <div className="d-flex align-items-center px-3">
                      <h1>{data.totalSupply}</h1>
                      <span>sold</span>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-left supplyNo">
                      <span>of</span>
                      <h1>{CONFIG.MAX_SUPPLY}</h1>
                    </div>
                  </div>
                </div>
                {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                  <>
                    <p className="subText mb-0">The sale has ended.</p>
                    <p className="subText mb-0">
                      You can still find {CONFIG.NFT_NAME} on
                    </p>
                    <p className="subText mb-0">{CONFIG.MARKETPLACE}</p>
                  </>
                ) : (
                  <>
                    {/* <h5>
                    {" "}
                    1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST} {CONFIG.NETWORK.SYMBOL}.
                  </h5> */}
                    {blockchain.account === "" ||
                    blockchain.smartContract === null ? (
                      <>
                        <a
                          href="/#"
                          className="connectBtn"
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(connect());
                            getData();
                          }}
                        >
                          connect
                        </a>
                        {blockchain.errorMsg !== "" ? (
                          <p>{blockchain.errorMsg}</p>
                        ) : null}
                      </>
                    ) : (
                      <>
                        <p>{feedback}</p>
                        <div className="counter">
                          <button
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              decrementMintAmount();
                            }}
                          >
                            -
                          </button>
                          <span
                            style={{
                              textAlign: "center",
                              color: "var(--accent-text)",
                            }}
                          >
                            {mintAmount}
                          </span>
                          <button
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              incrementMintAmount();
                            }}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="connectBtn"
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            claimNFTs();
                            getData();
                          }}
                        >
                          {claimingNft ? "BUSY" : "BUY"}
                        </button>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="offset-md-1 offset-lg-0 col-md-3 text-center">
            <Slider {...settings}>
              {Images.map((image) => (
                <div className="img">
                  <img
                    className="img-fluid my-1 w-100"
                    src={`/images/gallery/${image.image}`}
                    alt=""
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
