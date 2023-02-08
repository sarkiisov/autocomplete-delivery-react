import React from 'react';
import clsx from 'clsx';
import hash from 'object-hash';

import { Formik, Form as FormikForm, Field } from 'formik';
import { fieldConfig, initialValues, validationSchema } from '../../config/form';

import { Button } from '../../components/Button';
import { setNotification } from '../../utils';
import { addBookItem } from '../../store/addressBook/reducer';
import { useAppDispatch } from '../../store/hooks';

import useStyles from './Form.styles';

export interface FormProps {
  className?: string;
}

export const Form: React.FC<FormProps> = ({ className }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleSubmit = (details, { resetForm }) => {
    const id = hash(details);
    const timestamp = Date.now();

    dispatch(addBookItem({ id, timestamp, details }));
    setNotification({ type: 'success', message: 'Адрес успешно добавлен' });
    resetForm();
  };

  return (
    <div className={clsx(className, classes.root)}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnBlur
        validateOnChange
      >
        {({
          values, isValid, dirty, touched, errors
        }) => (
          <FormikForm>
            {fieldConfig.map((field) => (
              <Field
                as={field.as}
                value={values[field.name]}
                name={field.name}
                key={field.name}
                error={touched[field.name] && Boolean(errors[field.name])}
                {...field.props}
              />
            ))}
            <Button isDisabled={!(isValid && dirty)}>Добавить адрес</Button>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};
