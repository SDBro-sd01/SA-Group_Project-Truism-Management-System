import axios from 'axios';

class StudentService {
    getAllStudents() {
        return axios.get('http://localhost:8080/students');
    }

    getStudentById(id) {
        return axios.get(`http://localhost:8080/students/${id}`);
    }

    addStudent(student) {
        return axios.post('http://localhost:8080/students', student);
    }

    updateStudent(id, student) {
        return axios.put(`http://localhost:8080/students/${id}`, student);
    }

    deleteStudent(id) {
        return axios.delete(`http://localhost:8080/students/${id}`);
    }
}

const studentService = new StudentService();
export default studentService;