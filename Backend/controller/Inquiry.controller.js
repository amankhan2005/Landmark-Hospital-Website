// controllers/appointmentController.js
import Appointment from '../model/Inquery.model.js'

export const createAppointment = async (req, res) => {
  const { department, requestedDoctor, patientName, mobileNo, email, date, time } = req.body;

  if (!department || !requestedDoctor || !patientName || !mobileNo || !email || !date || !time) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newAppointment = new Appointment({
      department,
      requestedDoctor,
      patientName,
      mobileNo,
      email,
      date,
      time,
    });

    await newAppointment.save();
    res.status(201).json({ message: 'Appointment created successfully!', appointment: newAppointment });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ message: 'Error creating appointment', error });
  }
};

export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ message: 'Error fetching appointments', error });
  }
};

export const deleteAppointment = async (req, res) => {
  const { id } = req.params;

  try {
    const appointment = await Appointment.findByIdAndDelete(id);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    console.error('Error deleting appointment:', error);
    res.status(500).json({ message: 'Error deleting appointment', error });
  }
};
