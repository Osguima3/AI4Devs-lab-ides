// frontend/src/components/AddCandidateForm.tsx
import React, { useState, useRef } from 'react';
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
  const formRef = useRef<HTMLFormElement>(null);
  const formikRef = useRef<any>(null);

  const handleNext = () => {
    if (formikRef.current) {
      formikRef.current.validateForm().then((errors: any) => {
        if (Object.keys(errors).length === 0) {
          formikRef.current.handleSubmit();
        } else {
          formikRef.current.setTouched({
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            address: true,
            experiences: errors.experiences ? errors.experiences.map(() => ({
              company: true,
              role: true,
              startDate: true,
              endDate: true,
              description: true,
            })) : [],
            educationEntries: errors.educationEntries ? errors.educationEntries.map(() => ({
              institution: true,
              degree: true,
              startDate: true,
              endDate: true,
              description: true,
            })) : [],
            file: true,
          });
        }
      });
    }
  };

  const handleStepNext = () => {
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
            <form ref={formRef}>
              {activeStep === 0 && <PersonalDetails handleNext={handleStepNext} formikRef={formikRef} />}
              {activeStep === 1 && <ProfessionalExperience handleNext={handleStepNext} formikRef={formikRef} />}
              {activeStep === 2 && <Education handleNext={handleStepNext} formikRef={formikRef} />}
              {activeStep === 3 && <UploadCV handleNext={handleStepNext} formikRef={formikRef} />}
            </form>
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
