

import axios from 'axios';

class LibraryUserService {
    getAllUsers() {
        return axios.get('http://localhost:8080/libraryusers');
    }

    addUser(user) {
        return axios.post('http://localhost:8080/libraryusers', user);
    }

    updateUser(id, user) {
        return axios.put(`http://localhost:8080/libraryusers/${id}`, user);
    }

    deleteUser(id) {
        return axios.delete(`http://localhost:8080/libraryusers/${id}`);
    }
}

const libraryUserService = new LibraryUserService();
export default libraryUserService;
