import * as Yup from 'yup';

export const ValidationSchema = Yup.object({
  website: Yup.string().url().required('Required'),
  aboutCompany: Yup.string()
    .max(150, 'Must be 150 characters or less')
    .required('Required'),
  industry: Yup.string().required('Required'),
  companySize: Yup.number()
    .required('Required')
    .moreThan(0, 'Must be a valid positive number'),
  headquarters: Yup.string().max(50, 'Must be 50 characters or less'),
  type: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
  founded: Yup.number().moreThan(1200, 'Must be a valid year').required('Required'),
  specialities: Yup.string(100, 'Must be less than 100 characters').required('Required'),
});
