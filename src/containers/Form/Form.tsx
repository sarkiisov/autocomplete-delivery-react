import * as React from 'react';

import { Formik, Form as FormikForm, Field } from 'formik';
import { fieldConfig, initialValues, validationSchema } from './config/fieldsConfig';
import { FiledProps } from '../../types/form';

import { Button } from '../../components/Button';

export interface FormProps {
  className?: string;
}

export const Form: React.FC<FormProps> = ({
  className
}) => {
  const handleSubmit = (values: any) => {
    alert(JSON.stringify(values, null, 2));
  };

  const renderField = (field: FiledProps, errors: any, touched: any, handleBlur: any, setFieldValue: any, setFieldTouched: any) => {
    const handlersProps = field.customHandlers ? {
      onChange: (value: any) => setFieldValue(field.name, value),
      onBlur: () => setFieldTouched(field.name, true, true)
    } : {
      name: field.name
    };

    return (
      <Field
        key={field.name}
        as={field.as}
        error={touched[field.name] && Boolean(errors[field.name])}
        {...field.props}
        {...handlersProps}
      >
      </Field>
    );
  };

  return (
    <div className={className}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnBlur
        validateOnChange
      >
        {({ isValid, dirty, setFieldValue, setFieldTouched, handleBlur, touched, errors }) => (
          <>
            <FormikForm>
              {fieldConfig.map((field) => renderField(
                field,
                errors,
                touched,
                handleBlur,
                setFieldValue,
                setFieldTouched
              ))}
              <Button innerText="Оформить заказ" type="submit"
                isDisabled={!(isValid && dirty)}
              />
            </FormikForm>
          </>
        )}
      </Formik>
    </div>
  );
};