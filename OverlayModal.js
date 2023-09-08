import React from "react";
import "./OverlayModal.css";

const OverlayModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay-modal">
      <div className="overlay-modal-content">
        <button className="close-button" onClick={onClose}>
          Close Overlay Modal
        </button>
        {children}
      </div>
    </div>
  );
};

export default OverlayModal;
