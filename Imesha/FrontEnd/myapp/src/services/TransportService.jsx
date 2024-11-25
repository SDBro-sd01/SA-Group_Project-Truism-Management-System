import axios from 'axios';

class TransportService {
    getAllTransports() {
        return axios.get('http://localhost:8080/TM/api/transports');
    }

    getTransportById(id) {
        return axios.get(`http://localhost:8080/TM/api/transports/${id}`);
    }

    addTransport(transport) {
        return axios.post('http://localhost:8080/TM/api/transports', transport);
    }

    updateTransport(id, transport) {
        return axios.put(`http://localhost:8080/TM/api/transports/${id}`, transport);
    }

    deleteTransport(id) {
        return axios.delete(`http://localhost:8080/TM/api/transports/${id}`);
    }
}

const transportService = new TransportService();
export default transportService;
