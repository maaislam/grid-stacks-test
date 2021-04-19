import React, { useState, createContext } from 'react';

export const AddBenefitContext = createContext();

const AddBenefitContextProvider = ({ children }) => {
  const [additionalBenefit, setAdditionalBenefit] = useState([]);

  return (
    <AddBenefitContext.Provider value={{ additionalBenefit, setAdditionalBenefit }}>
      {children}
    </AddBenefitContext.Provider>
  );
};

export default AddBenefitContextProvider;
