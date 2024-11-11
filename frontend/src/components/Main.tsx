// frontend/src/components/Main.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import './Main.css';

const Main: React.FC = () => {
  const navigate = useNavigate();

  const handleAddCandidate = () => {
    navigate('/add-candidate');
  };

  return (
    <main className="main">
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleAddCandidate}
        className="main-button"
      >
        Add Candidate
      </Button>
    </main>
  );
};

export default Main;