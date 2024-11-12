// frontend/src/components/PersonalDetails.tsx
import React from 'react';
import { TextField, Box, Grid } from '@mui/material';
import './PersonalDetails.css';

const PersonalDetails: React.FC = () => {
  return (
    <Box className="personal-details">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Nombre" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Apellidos" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Teléfono" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Dirección" variant="outlined" fullWidth margin="normal" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalDetails;
