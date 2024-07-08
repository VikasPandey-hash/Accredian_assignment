// src/App.js
import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ReferralModal from './components/ReferralModal';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleReferNow = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleSubmit = (formData) => {
    // Send formData to the backend
    console.log(formData);
  };

  return (
    <div className="App">
      <HeroSection onReferNow={handleReferNow} />
      <ReferralModal open={modalOpen} handleClose={handleCloseModal} handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
