import axios from 'axios';

class JobService {
    getAllJobs() {
        return axios.get('http://localhost:8080/TM/jobs');
    }

    getJobById(id) {
        return axios.get(`http://localhost:8080/TM/jobs/${id}`);
    }

    addJob(jobType, jobDTO) {
        return axios.post(`http://localhost:8080/TM/jobs/${jobType}`, jobDTO);
    }

    updateJob(id, jobDTO) {
        return axios.put(`http://localhost:8080/TM/jobs/${id}`, jobDTO);
    }

    deleteJob(id) {
        return axios.delete(`http://localhost:8080/TM/jobs/${id}`);
    }
}

const jobService = new JobService();
export default jobService;