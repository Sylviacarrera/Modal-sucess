import React, { useState } from 'react';
import ModalSuccessMessage from '../lib'
import './App.scss';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // const handleOpenModal = () => {
  //   setModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setModalOpen(false);
  // };

  return (
    <div className="App">
      <button onClick={() => setModalOpen(true)}>Ouvrir la modale</button>
      <ModalSuccessMessage
        isDisplayed={isModalOpen}
        onClose={() => setModalOpen(false)}
        message="Employé créé avec succès !"
      />
    </div>
  );
};

export default App;
