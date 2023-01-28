import React from 'react';

import { Formik, Form as FormikForm, Field } from 'formik';
import { fieldConfig, initialValues, validationSchema } from './config/fieldsConfig';
import { FiledProps } from '../../types/form';

import { Button } from '../../components/Button';
import { setNotification } from '../../utils/setNotification';

export interface FormProps {
  className?: string;
}

export const Form: React.FC<FormProps> = ({ className }) => {
  const handleSubmit = (values) => {
    setNotification({ type: 'success', message: 'Заказ успешно создан' });
    console.log(JSON.stringify(values, null, 2));
  };

  const renderField = (field: FiledProps, errors, touched) => (
    <Field
      as={field.as}
      name={field.name}
      key={field.name}
      error={touched[field.name] && Boolean(errors[field.name])}
      {...field.props}
    />
  );

  return (
    <div className={className}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnBlur
        validateOnChange
      >
        {({
          isValid, dirty, touched, errors
        }) => (
          <FormikForm>
            {fieldConfig.map((field) => renderField(field, errors, touched))}
            <Button innerText="Оформить заказ" isDisabled={!(isValid && dirty)} />
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};
