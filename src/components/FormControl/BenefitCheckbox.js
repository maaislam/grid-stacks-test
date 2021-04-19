import React, { useState, useEffect } from 'react';
import { TrackChanges } from '@material-ui/icons';
import {
  Checkbox,
  Typography,
  Grid,
  makeStyles,
  FormControlLabel,
} from '@material-ui/core';
import { useField } from 'formik';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '54px',
    padding: '0 16px',
    border: `1px solid ${theme.palette.grey.A500}`,
    borderRadius: '27px',
  },
  checkboxSelected: {
    backgroundColor: theme.palette.benefit.main,
  },
  formControl: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 0,
  },
  labelText: {
    fontFamily: 'Open sans',
    marginLeft: '1rem',
    '@media (max-width:1024px)': {
      fontSize: '0.875rem',
    },
  },
  checkBoxChecked: {
    color: theme.palette.common.white,
  },
  iconColor: {
    color: theme.palette.grey[700],
  },
}));

const BenefitCheckbox = (props) => {
  const [checked, setChecked] = useState(null);

  const classes = useStyles();

  const [field] = useField(props);

  useEffect(() => {
    const detectSelected = () => {
      const selected = field.value.some((item) => {
        return item === props.value;
      });

      setChecked(selected);
    };

    detectSelected();
  }, [field.value, props.value]);

  var checkbox = () => {
    return (
      <Checkbox
        icon={props.icon}
        checkedIcon={props.checkedIcon}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        checked={checked ? true : false}
        style={{ color: `${checked ? '#ffff' : ''}` }}
      />
    );
  };

  const checkBoxLabel = () => {
    return (
      <Grid
        container
        item
        justify='space-between'
        alignItems='center'
        className={checked ? classes.checkBoxChecked : classes.iconColor}
      >
        <TrackChanges />
        <Typography variant='subtitle2' color='initial' className={classes.labelText}>
          {props.value}
        </Typography>
      </Grid>
    );
  };

  return (
    <Grid
      container
      item
      justify='space-between'
      alignItems='center'
      className={`${classes.root} ${checked ? classes.checkboxSelected : ''}`}
    >
      <FormControlLabel
        className={classes.formControl}
        value='start'
        control={checkbox()}
        label={checkBoxLabel()}
        labelPlacement='start'
      />
    </Grid>
  );
};

export default BenefitCheckbox;
