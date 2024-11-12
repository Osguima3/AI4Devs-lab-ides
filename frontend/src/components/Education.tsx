// frontend/src/components/Education.tsx
import React, { useState } from 'react';
import { TextField, Box, Grid, Button, IconButton } from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import './Education.css';

interface EducationEntry {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
}

const Education: React.FC = () => {
  const [educationEntries, setEducationEntries] = useState<EducationEntry[]>([
    { institution: '', degree: '', startDate: '', endDate: '', description: '' },
  ]);

  const handleAddEducation = () => {
    setEducationEntries([...educationEntries, { institution: '', degree: '', startDate: '', endDate: '', description: '' }]);
  };

  const handleRemoveEducation = (index: number) => {
    const newEducationEntries = educationEntries.filter((_, i) => i !== index);
    setEducationEntries(newEducationEntries);
  };

  const handleChange = (index: number, field: keyof EducationEntry, value: string) => {
    const newEducationEntries = educationEntries.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry
    );
    setEducationEntries(newEducationEntries);
  };

  return (
    <Box className="education">
      {educationEntries.map((entry, index) => (
        <Grid container spacing={2} key={index} className="education-entry">
          <Grid item xs={12} sm={6}>
            <TextField
              label="Institución"
              variant="outlined"
              fullWidth
              margin="normal"
              value={entry.institution}
              onChange={(e) => handleChange(index, 'institution', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Título"
              variant="outlined"
              fullWidth
              margin="normal"
              value={entry.degree}
              onChange={(e) => handleChange(index, 'degree', e.target.value)}
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
              value={entry.startDate}
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
              value={entry.endDate}
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
              value={entry.description}
              onChange={(e) => handleChange(index, 'description', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} className="education-actions">
            <IconButton onClick={() => handleRemoveEducation(index)} disabled={educationEntries.length === 1}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddEducation}>
        Añadir Educación
      </Button>
    </Box>
  );
};

export default Education;
