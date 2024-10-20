import React, { useState } from 'react';
import ModalSuccessMessage from '../lib/components/SuccessMessage'; // Assurez-vous que le chemin est correct
import './App.scss';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <button onClick={handleOpenModal}>Ouvrir la modale</button>
      <ModalSuccessMessage 
        isDisplayed={isModalOpen} 
        onClose={handleCloseModal} 
        message="Employé créé avec succès !" 
      />
    </div>
  );
};

export default App;
