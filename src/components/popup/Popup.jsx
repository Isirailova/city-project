import React from "react";
import PropTypes from "prop-types";
import "./popup.style.css";

const Popup = ({ info, closePopup, imgUrl, imgUrl1, imgUrl2 }) => {
  return (
    <div className="popup-container">
      <div className="popup-text">
        <div className="image-group">
          <img
            src={imgUrl}
            alt="Popup Image"
            className="first-image bounce-image"
            style={{ width: "15%", borderRadius: "50%" }}
          />
          <div>
            <p>{info.description}</p>
            <div className="second">
              <img src={imgUrl1} alt="Popup Image" />
              <img src={imgUrl2} alt="Popup Image" />
            </div>
          </div>
        </div>

        <button onClick={closePopup} id="close-popup">
          X
        </button>
      </div>
    </div>
  );
};

Popup.propTypes = {
  info: PropTypes.string.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default Popup;
