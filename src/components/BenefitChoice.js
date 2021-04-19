import React, { useContext } from 'react';
import benefitCollection from '../Data/benefitCollection';

import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Checkbox, makeStyles, Typography, Button, Grid } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { AddBenefitContext } from '../context/AddBenefitContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '8px',
    height: '34px',
    padding: '0 14px',
    margin: '0 12px 10px 0',
    border: '1px solid #707070',
    borderRadius: '17px',
    color: '#4D4F5C',
    fontSize: '14px',
  },
  generalButton: {
    borderRadius: '27px',
    padding: '0 54px',
    height: '54px',
  },
  saveButton: {
    background: `transparent linear-gradient(135deg, #2D3E8B 0%, #67709C 100%) 0% 0% no-repeat padding-box;`,
    '&:hover': {
      backgroundColor: theme.palette.grey[500],
      boxShadow: theme.shadows[2],
    },
  },
  skipButton: {
    border: `1px solid #2D3E8B`,
    boxShadow: '0px 0px 9px #00000036',
    backgroundColor: '#fff',
    color: '#000',
    '&:hover': {
      backgroundColor: theme.palette.grey[500],
      boxShadow: theme.shadows[2],
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  addBtnColor: {
    color: '#F15A29',
  },
  greyContainer: {
    padding: '15px',
    backgroundColor: '#F7F7F7',
  },
  leftMargin: {
    marginLeft: '16px',
  },
  addBenefitContainer: {
    margin: '16px 0',
  },
}));

const BenefitChoice = () => {
  const classes = useStyles();

  const { setAdditionalBenefit } = useContext(AddBenefitContext);

  const renderBenefits = benefitCollection.map((benefit, index) => {
    return (
      <div key={index} className={classes.root}>
        <label htmlFor={benefit.title} style={{ cursor: 'pointer' }}>
          {benefit.title}
        </label>
        <Field
          className={classes.addBtnColor}
          id={benefit.title}
          name='benefitSelected'
          value={benefit.title}
          type='checkbox'
          as={Checkbox}
          icon={<AddCircleIcon />}
          checkedIcon={<RemoveCircleIcon />}
        />
      </div>
    );
  });

  return (
    <Formik
      initialValues={{
        benefitSelected: [],
      }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        setAdditionalBenefit(values.benefitSelected);

        actions.setSubmitting(false);
      }}
    >
      {({ values, isSubmitting }) => {
        return (
          <div className={classes.greyContainer}>
            <Typography variant='subtitle1' color='initial' paragraph>
              Choose benefit to add
            </Typography>
            <Form className={classes.container}>
              {renderBenefits}

              <Grid
                container
                spacing={3}
                item
                xs={12}
                justify='flex-end'
                alignItems='center'
                className={classes.addBenefitContainer}
              >
                <Button
                  className={`${classes.generalButton} ${classes.skipButton}`}
                  disabled={isSubmitting}
                  variant='contained'
                  color='secondary'
                  type='reset'
                  disableElevation
                >
                  Skip
                </Button>
                <Button
                  className={`${classes.generalButton} ${classes.saveButton} ${classes.leftMargin}`}
                  disabled={isSubmitting}
                  variant='contained'
                  color='secondary'
                  type='submit'
                  disableElevation
                >
                  Save
                </Button>
              </Grid>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default BenefitChoice;
