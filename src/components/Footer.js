import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // position: 'absolute',
    // bottom: 0,
    height: '180px',
    backgroundColor: theme.palette.footer.main,
    color: theme.palette.common.white,
  },
  itemPadding: {
    padding: theme.spacing(0, 4),
  },
}));

const Footer = ({ footerItems }) => {
  const classes = useStyles();

  const renderFooterItems = footerItems.map((item, index) => {
    return (
      <Grid key={index} item className={classes.itemPadding}>
        {item.text}
      </Grid>
    );
  });

  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid container item xs={2} />
      <Grid container item xs={8} justify='center' alignItems='center'>
        {renderFooterItems}
      </Grid>
      <Grid container item xs={2} />
    </Grid>
  );
};

export default Footer;
