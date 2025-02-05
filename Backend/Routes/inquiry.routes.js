// routes/appointmentRoutes.js
import express from 'express';
import { createAppointment, getAllAppointments, deleteAppointment } from '../controller/Inquiry.controller.js';

const router = express.Router();


router.post('/save', createAppointment);
router.get('/getall', getAllAppointments);
router.delete('/delete/:id', deleteAppointment);

export default router;
