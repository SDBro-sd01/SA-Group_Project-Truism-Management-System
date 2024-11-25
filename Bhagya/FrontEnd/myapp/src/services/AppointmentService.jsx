import axios from 'axios';

class AppointmentService {
    getAllAppointments() {
        return axios.get('http://localhost:8080/api/appointments');
    }

    getAppointmentByPatientId(patientId) {
        return axios.get(`http://localhost:8080/api/appointments/patient/${patientId}`);
    }

    getAppointmentByDoctorId(doctorId) {
        return axios.get(`http://localhost:8080/api/appointments/doctor/${doctorId}`);
    }

    getAppointmentById(id) {
        return axios.get(`http://localhost:8080/api/appointments/${id}`);
    }

    createAppointment(appointment) {
        return axios.post('http://localhost:8080/api/appointments', appointment);
    }

    

    confirmAppointment(id) {
        return axios.put(`http://localhost:8080/api/appointments/${id}/confirm`);
    }

    rescheduleAppointment(id, rescheduledAppointment) {
        return axios.put(`http://localhost:8080/api/appointments/${id}/reschedule`, rescheduledAppointment);
    }

    cancelAppointment(id) {
        return axios.put(`http://localhost:8080/api/appointments/${id}/cancel`);
    }

    requestCancelAppointment(id) {
        return axios.put(`http://localhost:8080/api/appointments/${id}/request-cancel`);
    }


    deleteAppointment(id) {
        return axios.delete(`http://localhost:8080/api/appointments/${id}`);
    }
}

const appointmentService = new AppointmentService();
export default appointmentService;