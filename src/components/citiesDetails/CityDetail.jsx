import React, { useState } from "react";
import { BishkekInfo } from "../../assets/data/cityInfo";
import { ParisInfo } from "../../assets/data/cityInfo";
import { RomeInfo } from "../../assets/data/cityInfo";
import { IstanbulInfo } from "../../assets/data/cityInfo";
import Popup from "../popup/Popup";
import "./cityDetail.style.css";

const CityDetail = () => {
  const [isBishkekOpen, setIsBishkekOpen] = useState(false);
  const [isParisOpen, setIsParisOpen] = useState(false);
  const [isRomeOpen, setIsRomeOpen] = useState(false);
  const [isIstanbulOpen, setIsIstanbulOpen] = useState(false);

  const onBishkekClick = () => {
    setIsBishkekOpen(!isBishkekOpen);
    setIsParisOpen(false);
    setIsRomeOpen(false);
    setIsIstanbulOpen(false);
  };

  const onParisClick = () => {
    setIsParisOpen(!isParisOpen);
    setIsBishkekOpen(false);
    setIsRomeOpen(false);
    setIsIstanbulOpen(false);
  };

  const onRomeClick = () => {
    setIsRomeOpen(!isRomeOpen);
    setIsBishkekOpen(false);
    setIsParisOpen(false);
    setIsIstanbulOpen(false);
  };

  const onIstanbulClick = () => {
    setIsIstanbulOpen(!isIstanbulOpen);
    setIsBishkekOpen(false);
    setIsParisOpen(false);
    setIsRomeOpen(false);
  };

  return (
    <div className="city-info">
      <div className="row">
        <div className="bishkek">
          <button
            onClick={onBishkekClick}
            style={{
              fontFamily: " URWvb vhbVzxzASZC L, cursive",
              fontSize: "20px",
            }}
          >
            Bishkek
          </button>
          <img
            src="https://mediaim.expedia.com/destination/1/f291dad6b0188714aaf7570ab511a527.jpg"
            alt="Bishkek Image"
          ></img>
          {isBishkekOpen ? (
            <Popup
              info={BishkekInfo}
              imgUrl={BishkekInfo.imgUrl}
              imgUrl1={BishkekInfo.imgUrl1}
              imgUrl2={BishkekInfo.imgUrl2}
              closePopup={() => setIsBishkekOpen(false)}
            />
          ) : null}
        </div>
        <div className="paris">
          <button
            onClick={onParisClick}
            style={{ fontFamily: " URW Chancery L, cursive", fontSize: "20px" }}
          >
            Paris
          </button>
          <img
            src="https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg"
            style={{ height: "233px" }}
            alt="Paris Image"
          ></img>
          {isParisOpen ? (
            <Popup
              info={ParisInfo}
              imgUrl={ParisInfo.imgUrl}
              imgUrl1={ParisInfo.imgUrl1}
              imgUrl2={ParisInfo.imgUrl2}
              closePopup={() => setIsParisOpen(false)}
            />
          ) : null}
        </div>
      </div>
      <div className="row">
        <div className="rome">
          <button
            onClick={onRomeClick}
            style={{ fontFamily: " URW Chancery L, cursive", fontSize: "20px" }}
          >
            Rome
          </button>
          <img
            src="https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg"
            alt="Rome Image"
          ></img>
          {isRomeOpen ? (
            <Popup
              info={RomeInfo}
              imgUrl={RomeInfo.imgUrl}
              imgUrl1={RomeInfo.imgUrl1}
              imgUrl2={RomeInfo.imgUrl2}
              closePopup={() => setIsRomeOpen(false)}
            />
          ) : null}
        </div>
        <div className="istanbul">
          <button
            onClick={onIstanbulClick}
            style={{ fontFamily: " URW Chancery L, cursive", fontSize: "20px" }}
          >
            Istanbul
          </button>
          <img
            src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0e/95/db/9e.jpg"
            style={{ height: "228px" }}
            alt="Istanbul Image"
          ></img>
          {isIstanbulOpen ? (
            <Popup
              info={IstanbulInfo}
              imgUrl={IstanbulInfo.imgUrl}
              imgUrl1={IstanbulInfo.imgUrl1}
              imgUrl2={IstanbulInfo.imgUrl2}
              closePopup={() => setIsIstanbulOpen(false)}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default CityDetail;
