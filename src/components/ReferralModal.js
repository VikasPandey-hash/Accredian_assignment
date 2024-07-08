// src/components/ReferralModal.js
import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import '../App.css'

const ReferralModal = ({ open, handleClose, handleSubmit }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    course: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = () => {
    handleSubmit(formData);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="modal-box">
        <h2 >Refer a Friend</h2>
        <TextField label="Referrer Name" name="referrerName" onChange={handleChange}  required />
        <TextField label="Referrer Email" name="referrerEmail" onChange={handleChange} required />
        <TextField label="Referee Name" name="refereeName" onChange={handleChange} required />
        <TextField label="Referee Email" name="refereeEmail" onChange={handleChange} required />
        <TextField label="Course" name="course" onChange={handleChange} required />
        <Button variant="contained" color="primary" onClick={submitForm}>Submit</Button>
      </Box>
    </Modal>
  );
};

export default ReferralModal;
