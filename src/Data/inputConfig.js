const inputConfig = [
  {
    id: 'aboutCompany',
    label: 'about company',
    type: 'text',
    required: true,
    rows: 7,
    placeholder: 'Type in your summary',
  },
  {
    id: 'website',
    label: 'website',
    type: 'text',
    required: true,
    placeholder: 'Website (url)',
  },
  {
    id: 'industry',
    label: 'industry',
    type: 'select',
    required: true,
  },
  {
    id: 'companySize',
    label: 'company size',
    type: 'text',
    required: true,
    placeholder: 'Employees',
  },
  {
    id: 'headquarters',
    label: 'headquarters',
    type: 'text',
    required: false,
    placeholder: 'Enter Text',
  },
  {
    id: 'type',
    label: 'type',
    type: 'text',
    required: true,
    placeholder: 'Enter Text',
  },
  {
    id: 'founded',
    label: 'founded',
    type: 'text',
    required: true,
    placeholder: 'Enter Year',
  },
  {
    id: 'specialities',
    label: 'specialities',
    type: 'text',
    required: true,
    placeholder: 'Enter Text',
  },
];

export default inputConfig;
