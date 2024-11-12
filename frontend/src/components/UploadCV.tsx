// frontend/src/components/UploadCV.tsx
import React, { useState, useCallback } from 'react';
import { TextField, Box, Button, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './UploadCV.css';

const validationSchema = Yup.object({
  file: Yup.mixed().required('Se requiere un archivo PDF'),
});

const UploadCV: React.FC<{ handleNext: () => void, formikRef: React.Ref<any> }> = ({ handleNext, formikRef }) => {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.pdf',
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <Formik
      innerRef={formikRef}
      initialValues={{ file: null }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleNext();
      }}
    >
      {({ setFieldValue, touched, errors }) => (
        <Form>
          <Box className="upload-cv">
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} onChange={(event) => {
                handleFileChange(event);
                if (event.currentTarget.files && event.currentTarget.files.length > 0) {
                  setFieldValue('file', event.currentTarget.files[0]);
                }
              }} />
              {isDragActive ? (
                <Typography>Arrastra y suelta el archivo aquí...</Typography>
              ) : (
                <Typography>Arrastra y suelta el archivo aquí, o haz clic para seleccionar un archivo</Typography>
              )}
            </div>
            <input
              accept=".pdf"
              style={{ display: 'none' }}
              id="upload-cv"
              type="file"
              onChange={(event) => {
                handleFileChange(event);
                if (event.currentTarget.files && event.currentTarget.files.length > 0) {
                  setFieldValue('file', event.currentTarget.files[0]);
                }
              }}
            />
            <label htmlFor="upload-cv">
              <Button variant="contained" color="primary" component="span">
                Subir CV (PDF)
              </Button>
            </label>
            <ErrorMessage name="file" component="div" className="error-message custom-error" />
            {file && (
              <TextField
                label="Archivo seleccionado"
                value={file.name}
                variant="outlined"
                fullWidth
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
              />
            )}
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default UploadCV;
