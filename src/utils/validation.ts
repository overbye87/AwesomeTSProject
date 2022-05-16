import * as yup from 'yup';

const email = yup.string().required('Input Email').email('Invalid Email');

const password = yup.string().required('Input password').min(3, 'To short').max(10, 'To long');

const firstName = yup.string().required('Input name').min(3, 'To short').max(50, 'To long');

const lastName = yup.string().required('Input surname').min(3, 'To short').max(50, 'To long');

const login = yup.string().required('Input login').min(3, 'To short').max(50, 'To long');

export default {
  email,
  password,
  firstName,
  lastName,
  login,
};
