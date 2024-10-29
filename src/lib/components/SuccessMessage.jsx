import React from 'react';
import '../components/SuccessMessage.scss';

const Modal = ({ isDisplayed, onClose, message }) => {
  // Fonction pour fermer la modale
  const handleOverlayClick = (e) => {
    if (e.target.className.includes('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className={`modal-overlay ${isDisplayed ? 'show' : ''}`} onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="modal-close-icon" onClick={onClose}>✖</span> {/* Croix pour fermer */}
        </div>
        <p className="modal-message">{message}</p>
      </div>
    </div>
  );
};

export default Modal
