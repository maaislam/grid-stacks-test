import React, { useContext } from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Modal from '../components/Modal';
import { ModalStateContext } from '../context/ModalStateContext';
import BenefitChoice from '../components/BenefitChoice';

const useStyles = makeStyles(() => ({
  root: {
    // minHeight: '100vh',
  },
}));

const EditProfile = ({ children }) => {
  const classes = useStyles();

  const { modalState } = useContext(ModalStateContext);
  console.log(
    '🚀 ~ file: EditProfile.js ~ line 18 ~ EditProfile ~ modalState',
    modalState
  );

  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item container xs={1} lg={2} />
      <Grid item container xs={10} lg={8} justify='center'>
        {children}
        {modalState && <Modal modalHeader='Add Benefit'>{<BenefitChoice />}</Modal>}
      </Grid>
      <Grid item container xs={1} lg={2} />
    </Grid>
  );
};

export default EditProfile;
