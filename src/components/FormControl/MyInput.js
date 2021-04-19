import React from 'react';
import { useField } from 'formik';
import { TextField, InputLabel, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import industries from '../../Data/industries';

const useStyles = makeStyles((theme) => ({
  root: {
    border: 'none',
    boxShadow: '3px 3px 5px #00000029',
    '&:focus': {
      outline: 'none',
    },
  },
  labelStyles: {
    textAlign: 'left',
    padding: theme.spacing(2, 0),
    color: theme.palette.common.black,
  },
  error: {
    color: theme.palette.error.main,
    marginTop: theme.spacing(1),
  },
  toUpperCase: {
    textTransform: 'capitalize',
  },
}));

const MyInput = (props) => {
  const classes = useStyles();
  const [field, meta] = useField(props);

  return (
    <Grid container justify='flex-start' direction='column'>
      <InputLabel htmlFor={props.id} className={classes.labelStyles}>
        <Typography variant='subtitle2' color='initial' className={classes.toUpperCase}>
          {props.label}
          {props.required ? '*' : ''}
        </Typography>
      </InputLabel>
      <TextField
        select={props.variant === 'select' ? true : false}
        SelectProps={{
          native: true,
        }}
        fullWidth
        required={props.required}
        id={props.id}
        name={props.id}
        multiline={props.rows > 0 ? true : false}
        rows={props.rows || 1}
        variant='outlined'
        placeholder={props.placeholder || props.label}
        {...field}
        error={Boolean(meta.touched && meta.error)}
        className={classes.root}
      >
        {props.variant &&
          industries.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </TextField>
      {meta.touched && meta.error ? (
        <span className={classes.error}>
          <Typography variant='caption'> {meta.error}</Typography>
        </span>
      ) : null}
    </Grid>
  );
};

export default MyInput;
