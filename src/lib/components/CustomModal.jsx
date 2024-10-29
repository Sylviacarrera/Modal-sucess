import React from 'react';
import '../components/CustomModal.scss';

// const Modal = ({ isDisplayed, onClose, message }) => {
//   // Fonction pour fermer la modale
//   const handleOverlayClick = (e) => {
//     if (e.target.className.includes('modal-overlay')) {
//       onClose();
//     }
//   };

//   return (
//     <div className={`modal-overlay ${isDisplayed ? 'show' : ''}`} onClick={handleOverlayClick}>
//       <div className="modal-content">
//         <div className="modal-header">
//           <span className="modal-close-icon" onClick={onClose}>✖</span> {/* Croix pour fermer */}
//         </div>
//         <p className="modal-message">{message}</p>
//       </div>
//     </div>
//   );
// };

// export default Modal
const CustomModal = ({ isDisplayed = false, onCloseModal, content }) => {
  return (
    <div
      className="custom-modal"
      style={{ display: isDisplayed ? 'block' : 'none' }}
    >
      <div className="custom-modal-main">
        <div onClick={onCloseModal} className="custom-modal-btn-close">
          X
        </div>
        <div className="custom-modal-content">{content}</div>
      </div>
    </div>
  )
}

export default CustomModal
