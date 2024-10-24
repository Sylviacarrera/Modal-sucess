import React from 'react';
import '../components/SuccessMessage.scss'; 

/**
 * Composant de message de succès
 * @param {boolean} isDisplayed - Booléen indiquant si la modale est affichée
 * @param {function} onClose - Fonction appelée lorsque l'utilisateur clique sur le bouton fermer
 * @param {string} message - Message à afficher dans la modale
 * @returns {JSX.Element} Composant de message de succès
 */
const ModalSuccessMessage = ({ isDisplayed, onClose, message }) => {
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

export default ModalSuccessMessage;
