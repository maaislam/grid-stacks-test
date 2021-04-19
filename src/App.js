import React from 'react';
import { CssBaseline, Paper } from '@material-ui/core';

import Footer from './components/Footer';
import ProfileForm from './components/FormControl/ProfileForm';

import Header from './components/Header';

import ModalStateContextProvider from './context/ModalStateContext';
import footerItems from './Data/footerItems';
import menuItems from './Data/menu';
import EditProfile from './pages/EditProfile';
import AddBenefitContextProvider from './context/AddBenefitContext';

const App = () => {
  return (
    <ModalStateContextProvider>
      <AddBenefitContextProvider>
        <CssBaseline />
        <Header menuLinks={menuItems} />
        <Paper>
          <EditProfile>
            <ProfileForm />
          </EditProfile>
        </Paper>
        <Footer footerItems={footerItems} />
      </AddBenefitContextProvider>
    </ModalStateContextProvider>
  );
};

export default App;
