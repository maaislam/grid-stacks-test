import React, { useState, createContext } from 'react';

export const ModalStateContext = createContext();

const ModalStateContextProvider = ({ children }) => {
  const [modalState, setModalState] = useState(false);

  return (
    <ModalStateContext.Provider value={{ modalState, setModalState }}>
      {children}
    </ModalStateContext.Provider>
  );
};

export default ModalStateContextProvider;
