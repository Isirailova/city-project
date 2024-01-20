import React, { useState } from "react";
import PropTypes from "prop-types";

import "./popup.style.css";

const Popup = ({ info, closePopup, imgUrl, imgUrl1, imgUrl2 }) => {
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);

  const openWelcomePopup = () => {
    setShowWelcomePopup(true);
  };

  const closeWelcomePopup = () => {
    setShowWelcomePopup(false);
  };

  return (
    <div className="popup-container">
      {!showWelcomePopup && (
        <div className="popup-text">
          <div className="image-group">
            <div className="left" onClick={openWelcomePopup}>
              <img
                src={imgUrl}
                alt="Popup Image"
                className="first-image flutter-animation"
              />
              <img src={imgUrl1} alt="Popup Image" />
            </div>
            <img
              src={imgUrl2}
              alt="Popup Image"
              className="imgUrl2"
              onClick={openWelcomePopup}
            />
          </div>
          <div className="info">
            <h2>{info.city}</h2>
            <p>{info.description}</p>
          </div>
        </div>
      )}

      {!showWelcomePopup && (
        <button onClick={closePopup} id="close-popup">
          X
        </button>
      )}

      {showWelcomePopup && (
        <div className="welcome-popup">
          <h2>Welcome to {info.city}...</h2>
          <button onClick={closeWelcomePopup} className="close-button">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

Popup.propTypes = {
  info: PropTypes.shape({
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  closePopup: PropTypes.func.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imgUrl1: PropTypes.string.isRequired,
  imgUrl2: PropTypes.string.isRequired,
};

export default Popup;
