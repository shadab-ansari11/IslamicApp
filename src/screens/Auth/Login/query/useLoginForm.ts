/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * @format
 */
import * as Yup from 'yup';
import {FormikHelpers, useFormik} from 'formik';

export interface ILogin {
  email: string;
  password: string;
}

const defaultValues: ILogin = {
  email: '',
  password: '',
};

const schema = Yup.object().shape({
  email: Yup.string()
    .required('Please enter email address')
    .email('Please enter a valid email address.'),

  password: Yup.string().required('Please enter password'),
});

export const useLoginForm = (
  onSubmit: (
    values: ILogin,
    formikHelpers: FormikHelpers<ILogin>,
  ) => void | Promise<unknown>,
  initialValues: ILogin = defaultValues,
) => {
  return useFormik<ILogin>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};
