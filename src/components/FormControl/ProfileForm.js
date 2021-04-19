import React, { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { ValidationSchema } from './Validation';
import { Grid, Typography, Button } from '@material-ui/core';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import MyInput from './MyInput';
import { makeStyles } from '@material-ui/styles';
import BenefitCheckbox from './BenefitCheckbox';
import inputConfig from '../../Data/inputConfig';
import { ModalStateContext } from '../../context/ModalStateContext';
import { AddBenefitContext } from '../../context/AddBenefitContext';

const useStyles = makeStyles((theme) => ({
  generalButton: {
    borderRadius: '27px',
    padding: '0 47px',
    height: '54px',
  },
  customButton: {
    backgroundColor: theme.palette.buttonColor.main,
    color: theme.palette.common.black,
    border: '1px solid #C1C1C1',
    '&:hover': {
      backgroundColor: theme.palette.grey[500],
      boxShadow: theme.shadows[2],
    },
  },
  benefitText: {
    color: theme.palette.benefit.main,
    fontSize: '18px',
  },
  addBenefitContainer: {
    marginBottom: theme.spacing(0),
    alignSelf: 'flex-end',
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
    marginRight: '16px',
    backgroundColor: '#fff',
    color: '#000',
    '&:hover': {
      backgroundColor: theme.palette.grey[500],
      boxShadow: theme.shadows[2],
    },
  },
  editProfilepage: {
    padding: '32px 42px',
    backgroundColor: '#fff',
    marginBottom: '64px',
    marginTop: '40px',
    boxShadow: '4px 4px 13px #B4B4B414',
    borderRadius: '10px',
  },
}));
const ProfileForm = () => {
  const classes = useStyles();

  const { setModalState } = useContext(ModalStateContext);
  const { additionalBenefit } = useContext(AddBenefitContext);

  const renderAdditionalBenefit = additionalBenefit.map((benefit, index) => {
    return (
      <Grid item xs={6} lg={4} key={index}>
        <Field
          name='benefits'
          value={benefit}
          icon={<CircleUnchecked />}
          checkedIcon={<CircleChecked />}
          as={BenefitCheckbox}
        />
      </Grid>
    );
  });

  const handleModal = () => {
    setModalState(true);
  };

  const renderTextFields = inputConfig.map(
    ({ id, label, type, required, rows, placeholder }, index) => {
      return (
        <Grid
          item
          xs={12}
          sm={index === 0 || index === inputConfig.length - 1 ? 12 : 6}
          key={index}
        >
          <MyInput
            id={id}
            label={label}
            name={id}
            rows={rows || 0}
            variant={type}
            required={required}
            placeholder={placeholder}
          />
        </Grid>
      );
    }
  );

  return (
    <>
      <Formik
        initialValues={{
          aboutCompany: '',
          website: '',
          industry: '',
          companySize: '',
          headquarters: '',
          type: '',
          founded: '',
          specialities: '',
          benefits: [],
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true);
          // make async call
          console.log('submit: ', values);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => {
          return (
            <Grid container className={classes.editProfilepage}>
              <Grid item xs={12}>
                <Form>
                  <Grid container spacing={5} direction='column'>
                    <Grid item container spacing={4} justify='space-between'>
                      {renderTextFields}
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      justify='space-between'
                      alignContent='flex-end'
                      alignItems='center'
                    >
                      <Typography variant='h6' className={classes.benefitText}>
                        Benefits
                      </Typography>
                      <Button
                        className={`${classes.generalButton} ${classes.customButton}`}
                        disabled={isSubmitting}
                        variant='contained'
                        onClick={() => handleModal()}
                        type='button'
                        disableElevation
                      >
                        Add Benefits
                      </Button>
                    </Grid>
                    <Grid item container spacing={4} justify='space-between'>
                      <Grid item xs={12} lg={4}>
                        <Field
                          name='benefits'
                          value='Excellent Health Care'
                          icon={<CircleUnchecked />}
                          checkedIcon={<CircleChecked />}
                          as={BenefitCheckbox}
                        />
                      </Grid>
                      <Grid item xs={12} lg={4}>
                        <Field
                          name='benefits'
                          value='Daily Snacks'
                          icon={<CircleUnchecked />}
                          checkedIcon={<CircleChecked />}
                          as={BenefitCheckbox}
                        />
                      </Grid>
                      <Grid item xs={12} lg={4}>
                        <Field
                          name='benefits'
                          value='Group Activities'
                          icon={<CircleUnchecked />}
                          checkedIcon={<CircleChecked />}
                          as={BenefitCheckbox}
                        />
                      </Grid>
                      {renderAdditionalBenefit}
                    </Grid>

                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      lg={4}
                      justify='space-between'
                      alignContent='flex-end'
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
                        className={`${classes.generalButton} ${classes.saveButton}`}
                        disabled={isSubmitting}
                        variant='contained'
                        color='secondary'
                        type='submit'
                        disableElevation
                      >
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              </Grid>
            </Grid>
          );
        }}
      </Formik>
    </>
  );
};

export default ProfileForm;
