import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import UserIcon from './svgIcons/UserIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 2),
    color: theme.palette.grey.A700,
    borderBottom: `1px solid ${theme.palette.grey.A600}`,
  },
  leftLine: {
    borderLeft: `2px solid ${theme.palette.grey.A600}`,
  },
  userImg: {
    paddingBottom: '6px',
  },
}));

const Header = ({ menuLinks, userDetails }) => {
  const classes = useStyles();

  const renderMenuLinks = menuLinks.map((menuLink, index) => {
    return (
      <Grid item xs={3} key={index}>
        <Typography variant='subtitle1' align='center' color='initial'>
          {menuLink.text}
        </Typography>
      </Grid>
    );
  });

  return (
    <Grid container className={classes.root} alignItems='center'>
      <Grid container item xs={7}>
        <Typography variant='h5' color='initial'>
          Company Logo
        </Typography>
      </Grid>
      <Grid container item xs={5} justify='center' alignItems='center'>
        {renderMenuLinks}
        <Grid container item xs={3} className={classes.leftLine} justify='space-evenly' alignItems='center'>
          <UserIcon color='primary' style={{ fontSize: 20 }} />
          <Typography variant='h6' align='center' color='secondary'>
            Hi Elise !
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
