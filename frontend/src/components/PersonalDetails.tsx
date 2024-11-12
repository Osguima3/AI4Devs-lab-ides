// frontend/src/components/PersonalDetails.tsx
import React from 'react';
import { TextField, Box, Grid } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './PersonalDetails.css';

const validationSchema = Yup.object({
  firstName: Yup.string().required('Nombre es requerido'),
  lastName: Yup.string().required('Apellidos son requeridos'),
  email: Yup.string().email('Email inválido').required('Email es requerido'),
  phone: Yup.string().required('Teléfono es requerido'),
  address: Yup.string().required('Dirección es requerida'),
});

const PersonalDetails: React.FC<{ handleNext: () => void, formikRef: React.Ref<any> }> = ({ handleNext, formikRef }) => {
  return (
    <Formik
      innerRef={formikRef}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        handleNext();
      }}
    >
      {({ touched, errors }) => (
        <Form>
          <Box className="personal-details">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  name="firstName"
                  label="Nombre"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  helperText={<ErrorMessage name="firstName" />}
                  error={touched.firstName && Boolean(errors.firstName)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  name="lastName"
                  label="Apellidos"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  helperText={<ErrorMessage name="lastName" />}
                  error={touched.lastName && Boolean(errors.lastName)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  helperText={<ErrorMessage name="email" />}
                  error={touched.email && Boolean(errors.email)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  name="phone"
                  label="Teléfono"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  helperText={<ErrorMessage name="phone" />}
                  error={touched.phone && Boolean(errors.phone)}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="address"
                  label="Dirección"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  helperText={<ErrorMessage name="address" />}
                  error={touched.address && Boolean(errors.address)}
                />
              </Grid>
            </Grid>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalDetails;
