import { useState } from 'react';
import Modal from '../lib'
import './App.scss';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setModalOpen(true)}>Ouvrir la modale</button>
      <Modal
        isDisplayed={isModalOpen}
        onClose={() => setModalOpen(false)}
        message="Employé créé avec succès !"
      />
    </div>
  );
};

export default App;
