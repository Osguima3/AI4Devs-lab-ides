import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import AddCandidateForm from './components/AddCandidateForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/add-candidate" element={<AddCandidateForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;