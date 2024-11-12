// frontend/src/components/ProfessionalExperience.tsx
import React, { useState } from 'react';
import { TextField, Box, Grid, Button, IconButton } from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import './ProfessionalExperience.css';
import { Formik, Form, Field, ErrorMessage, FormikErrors } from 'formik';
import * as Yup from 'yup';

interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

const validationSchema = Yup.object().shape({
  experiences: Yup.array().of(
    Yup.object().shape({
      company: Yup.string().required('Compañía es requerida'),
      role: Yup.string().required('Rol es requerido'),
      startDate: Yup.string().required('Fecha de inicio es requerida'),
      endDate: Yup.string().required('Fecha de fin es requerida'),
      description: Yup.string().required('Descripción es requerida'),
    })
  ),
});

const ProfessionalExperience: React.FC<{ handleNext: () => void, formikRef: React.Ref<any> }> = ({ handleNext, formikRef }) => {
  const [experiences] = useState<Experience[]>([
    { company: '', role: '', startDate: '', endDate: '', description: '' },
  ]);

  const handleAddExperience = (setFieldValue: (field: string, value: any) => void, values: { experiences: Experience[] }) => {
    const newExperience = { company: '', role: '', startDate: '', endDate: '', description: '' };
    setFieldValue('experiences', [...values.experiences, newExperience]);
  };

  const handleRemoveExperience = (index: number, setFieldValue: (field: string, value: any) => void, values: { experiences: Experience[] }) => {
    const newExperiences = values.experiences.filter((_, i) => i !== index);
    setFieldValue('experiences', newExperiences);
  };

  return (
    <Formik
      innerRef={formikRef}
      initialValues={{ experiences }}
      validationSchema={validationSchema}
      onSubmit={() => { handleNext(); }}
    >
      {({ values, setFieldValue, touched, errors }) => (
        <Form>
          <Box className="professional-experience">
            {values.experiences.map((_, index) => (
              <Grid container spacing={2} key={index} className="experience-entry">
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    name={`experiences[${index}].company`}
                    label="Compañía"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    helperText={<ErrorMessage name={`experiences[${index}].company`} />}
                    error={touched.experiences?.[index]?.company && Boolean((errors.experiences as FormikErrors<Experience>[])?.[index]?.company)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    name={`experiences[${index}].role`}
                    label="Rol"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    helperText={<ErrorMessage name={`experiences[${index}].role`} />}
                    error={touched.experiences?.[index]?.role && Boolean((errors.experiences as FormikErrors<Experience>[])?.[index]?.role)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    name={`experiences[${index}].startDate`}
                    label="Fecha de Inicio"
                    type="date"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    helperText={<ErrorMessage name={`experiences[${index}].startDate`} />}
                    error={touched.experiences?.[index]?.startDate && Boolean((errors.experiences as FormikErrors<Experience>[])?.[index]?.startDate)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    name={`experiences[${index}].endDate`}
                    label="Fecha de Fin"
                    type="date"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    helperText={<ErrorMessage name={`experiences[${index}].endDate`} />}
                    error={touched.experiences?.[index]?.endDate && Boolean((errors.experiences as FormikErrors<Experience>[])?.[index]?.endDate)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name={`experiences[${index}].description`}
                    label="Descripción"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    helperText={<ErrorMessage name={`experiences[${index}].description`} />}
                    error={touched.experiences?.[index]?.description && Boolean((errors.experiences as FormikErrors<Experience>[])?.[index]?.description)}
                  />
                </Grid>
                <Grid item xs={12} className="experience-actions">
                  <IconButton onClick={() => handleRemoveExperience(index, setFieldValue, values)} disabled={values.experiences.length === 1}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => handleAddExperience(setFieldValue, values)}
            >
              Añadir Experiencia
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ProfessionalExperience;
