// src/components/HeroSection.js
import React from 'react';
import { Button } from '@mui/material';

const HeroSection = ({ onReferNow }) => (
  <div className="hero">
    <h1>Refer & Earn</h1>
    
    <Button variant="contained" color="primary" onClick={onReferNow}>Refer Now</Button>
  </div>
);

export default HeroSection;
