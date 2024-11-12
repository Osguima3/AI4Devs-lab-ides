// frontend/src/components/ProfessionalExperience.tsx
import React, { useState } from 'react';
import { TextField, Box, Grid, Button, IconButton } from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import './ProfessionalExperience.css';

interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

const ProfessionalExperience: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([
    { company: '', role: '', startDate: '', endDate: '', description: '' },
  ]);

  const handleAddExperience = () => {
    setExperiences([...experiences, { company: '', role: '', startDate: '', endDate: '', description: '' }]);
  };

  const handleRemoveExperience = (index: number) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
  };

  const handleChange = (index: number, field: keyof Experience, value: string) => {
    const newExperiences = experiences.map((experience, i) =>
      i === index ? { ...experience, [field]: value } : experience
    );
    setExperiences(newExperiences);
  };

  return (
    <Box className="professional-experience">
      {experiences.map((experience, index) => (
        <Grid container spacing={2} key={index} className="experience-entry">
          <Grid item xs={12} sm={6}>
            <TextField
              label="Compañía"
              variant="outlined"
              fullWidth
              margin="normal"
              value={experience.company}
              onChange={(e) => handleChange(index, 'company', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Rol"
              variant="outlined"
              fullWidth
              margin="normal"
              value={experience.role}
              onChange={(e) => handleChange(index, 'role', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Fecha de Inicio"
              type="date"
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              value={experience.startDate}
              onChange={(e) => handleChange(index, 'startDate', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Fecha de Fin"
              type="date"
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              value={experience.endDate}
              onChange={(e) => handleChange(index, 'endDate', e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Descripción"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={experience.description}
              onChange={(e) => handleChange(index, 'description', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} className="experience-actions">
            <IconButton onClick={() => handleRemoveExperience(index)} disabled={experiences.length === 1}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddExperience}>
        Añadir Experiencia
      </Button>
    </Box>
  );
};

export default ProfessionalExperience;
