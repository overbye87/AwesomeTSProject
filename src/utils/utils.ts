import { FormikProps } from 'formik';

export const getInputProps = <Values>(formik: FormikProps<Values>, name: keyof Values) => ({
  value: formik.values[name],
  error: formik.errors[name],
  touched: formik.touched[name],
  onChangeText: formik.handleChange(name),
  onBlur: formik.handleBlur(name),
});
