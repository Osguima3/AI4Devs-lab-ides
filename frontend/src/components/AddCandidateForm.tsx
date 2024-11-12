// frontend/src/components/AddCandidateForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stepper, Step, StepLabel, Button, Typography, Box, Link } from '@mui/material';
import PersonalDetails from './PersonalDetails';
import ProfessionalExperience from './ProfessionalExperience';
import Education from './Education';
import UploadCV from './UploadCV';
import './AddCandidateForm.css';

const steps = ['Datos personales', 'Experiencia profesional', 'Educación', 'CV'];

const AddCandidateForm: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // Aquí puedes añadir la lógica para enviar los datos al servidor
      // Simularemos una respuesta exitosa
      setIsSuccess(true);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep === 0) {
      navigate('/');
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setIsSuccess(null);
  };

  return (
    <Box className="form-container">
      <Stepper activeStep={activeStep} className="stepper">
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            {isSuccess ? (
              <div>
                <Typography variant="h5" gutterBottom>
                  Candidato creado correctamente.
                </Typography>
                <Link href="/" variant="body2">
                  Volver a la pantalla principal
                </Link>
              </div>
            ) : (
              <div>
                <Typography variant="h5" gutterBottom>
                  Hubo un error al crear el candidato.
                </Typography>
                <Button onClick={handleReset}>Intentar de nuevo</Button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <Typography variant="h6" gutterBottom className="step-title">
              {steps[activeStep]}
            </Typography>
            {activeStep === 0 && <PersonalDetails />}
            {activeStep === 1 && <ProfessionalExperience />}
            {activeStep === 2 && <Education />}
            {activeStep === 3 && <UploadCV />}
            <div className="form-buttons">
              <Button onClick={handleBack}>
                Atrás
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Box>
  );
};

export default AddCandidateForm;
