import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import { ModalStateContext } from '../context/ModalStateContext';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,.7)',
  },
  modalChildren: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10000,
    padding: '24px',
    backgroundColor: '#fff',
  },
  modalHeader: {
    color: theme.palette.footer.main,
    fontWeight: '600',
  },
}));

const Modal = ({ modalHeader, children }) => {
  const { setModalState } = useContext(ModalStateContext);

  const classes = useStyles();

  return ReactDOM.createPortal(
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid
          container
          item
          xs={8}
          spacing={4}
          justify='space-between'
          alignItems='center'
          className={classes.modalChildren}
        >
          <Grid container item justify='space-between'>
            <Typography variant='subtitle1' className={classes.modalHeader}>
              {modalHeader}
            </Typography>
            <CloseIcon onClick={() => setModalState(false)} />
          </Grid>
          <Grid container item>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
