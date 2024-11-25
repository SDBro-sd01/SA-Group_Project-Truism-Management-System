import axios from 'axios';

class TourismPackageService {
    getAllPackages() {
        return axios.get('http://localhost:8080/TM/api/packages');
    }

    getPackageById(id) {
        return axios.get(`http://localhost:8080/TM/api/packages/${id}`);
    }

    addPackage(tourismPackage) {
        return axios.post('http://localhost:8080/TM/api/packages', tourismPackage);
    }

    updatePackage(id, tourismPackage) {
        return axios.put(`http://localhost:8080/TM/api/packages/${id}`, tourismPackage);
    }

    deletePackage(id) {
        return axios.delete(`http://localhost:8080/TM/api/packages/${id}`);
    }
}

const tourismPackageService = new TourismPackageService();
export default tourismPackageService;
