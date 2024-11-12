// frontend/src/components/UploadCV.tsx
import React, { useState, useCallback } from 'react';
import { TextField, Box, Button, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import './UploadCV.css';

const UploadCV: React.FC = () => {
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
    <Box className="upload-cv">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
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
        onChange={handleFileChange}
      />
      <label htmlFor="upload-cv">
        <Button variant="contained" color="primary" component="span">
          Subir CV (PDF)
        </Button>
      </label>
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
  );
};

export default UploadCV;
