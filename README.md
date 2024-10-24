<h1>Modal Success Message</h1>

![npm](https://img.shields.io/npm/v/modal-success-message?color=blue&style=flat-square) 
![downloads](https://img.shields.io/npm/dm/modal-success-message?color=green&style=flat-square)
![size](https://img.shields.io/bundlephobia/minzip/modal-success-message?color=purple&style=flat-square)

Un composant modal simple et réutilisable pour afficher un message de succès dans vos applications React.

Installation<br/>
Vous pouvez installer le composant via npm. Exécutez la commande suivante dans votre terminal :
```
npm install modal-success-message
```
Utilisation<br/>
Voici comment utiliser le composant ModalSuccessMessage dans votre application :

Importez le composant :

```
import { ModalSuccessMessage } from 'modal-success-message';
```
Utilisez le composant dans votre code :
```
import React, { useState } from 'react';
import { ModalSuccessMessage } from 'modal-success-message';

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
```

Propriétés

| Prop            | Type         | Description                                                                 |
| :-------------- |:-------------| --------------------------------------------------------------------------- |
| isDisplayed       | boolean      | Indique si la modale doit être affichée.                                        |
| onClose       | function     | Fonction à appeler lorsque la modale doit être fermée.                |
| message | string       | Le message à afficher dans la modale. |

Tags et Mots-clés<br/>
React<br/>
Modal<br/>
Component<br/>
Success Message<br/>
UI<br/>
Library<br/>
Reusable Component