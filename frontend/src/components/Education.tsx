// frontend/src/components/Education.tsx
import React, { useState } from 'react';
import { TextField, Box, Grid, Button, IconButton } from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import './Education.css';
import { Formik, Form, Field, ErrorMessage, FormikErrors } from 'formik';
import * as Yup from 'yup';

interface EducationEntry {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
}

const validationSchema = Yup.object().shape({
  educationEntries: Yup.array().of(
    Yup.object().shape({
      institution: Yup.string().required('Institución es requerida'),
      degree: Yup.string().required('Título es requerido'),
      startDate: Yup.string().required('Fecha de inicio es requerida'),
      endDate: Yup.string().required('Fecha de fin es requerida'),
      description: Yup.string().required('Descripción es requerida'),
    })
  ),
});

const Education: React.FC<{ handleNext: () => void, formikRef: React.Ref<any> }> = ({ handleNext, formikRef }) => {
  const [educationEntries] = useState<EducationEntry[]>([
    { institution: '', degree: '', startDate: '', endDate: '', description: '' },
  ]);

  const handleAddEducation = (setFieldValue: (field: string, value: any) => void, values: { educationEntries: EducationEntry[] }) => {
    const newEducationEntry = { institution: '', degree: '', startDate: '', endDate: '', description: '' };
    setFieldValue('educationEntries', [...values.educationEntries, newEducationEntry]);
  };

  const handleRemoveEducation = (index: number, setFieldValue: (field: string, value: any) => void, values: { educationEntries: EducationEntry[] }) => {
    const newEducationEntries = values.educationEntries.filter((_, i) => i !== index);
    setFieldValue('educationEntries', newEducationEntries);
  };

  return (
    <Formik
      innerRef={formikRef}
      initialValues={{ educationEntries }}
      validationSchema={validationSchema}
      onSubmit={() => { handleNext(); }}
    >
      {({ values, setFieldValue, touched, errors }) => (
        <Form>
          <Box className="education">
            {values.educationEntries.map((_, index) => (
              <Grid container spacing={2} key={index} className="education-entry">
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    name={`educationEntries[${index}].institution`}
                    label="Institución"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    helperText={<ErrorMessage name={`educationEntries[${index}].institution`} />}
                    error={touched.educationEntries?.[index]?.institution && Boolean((errors.educationEntries as FormikErrors<EducationEntry>[])?.[index]?.institution)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    name={`educationEntries[${index}].degree`}
                    label="Título"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    helperText={<ErrorMessage name={`educationEntries[${index}].degree`} />}
                    error={touched.educationEntries?.[index]?.degree && Boolean((errors.educationEntries as FormikErrors<EducationEntry>[])?.[index]?.degree)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    name={`educationEntries[${index}].startDate`}
                    label="Fecha de Inicio"
                    type="date"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    helperText={<ErrorMessage name={`educationEntries[${index}].startDate`} />}
                    error={touched.educationEntries?.[index]?.startDate && Boolean((errors.educationEntries as FormikErrors<EducationEntry>[])?.[index]?.startDate)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    name={`educationEntries[${index}].endDate`}
                    label="Fecha de Fin"
                    type="date"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    helperText={<ErrorMessage name={`educationEntries[${index}].endDate`} />}
                    error={touched.educationEntries?.[index]?.endDate && Boolean((errors.educationEntries as FormikErrors<EducationEntry>[])?.[index]?.endDate)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name={`educationEntries[${index}].description`}
                    label="Descripción"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    helperText={<ErrorMessage name={`educationEntries[${index}].description`} />}
                    error={touched.educationEntries?.[index]?.description && Boolean((errors.educationEntries as FormikErrors<EducationEntry>[])?.[index]?.description)}
                  />
                </Grid>
                <Grid item xs={12} className="education-actions">
                  <IconButton onClick={() => handleRemoveEducation(index, setFieldValue, values)} disabled={values.educationEntries.length === 1}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => handleAddEducation(setFieldValue, values)}
            >
              Añadir Educación
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default Education;
