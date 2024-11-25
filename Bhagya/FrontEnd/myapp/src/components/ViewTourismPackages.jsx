import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import tourismPackageService from '../services/TourismPackageService';
import './ViewTourismPackages.css';

const ViewTourismPackages = () => {
    const [packages, setPackages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        tourismPackageService.getAllPackages()
            .then((response) => {
                setPackages(response.data);
            })
            .catch((error) => {
                console.log('Error fetching packages', error);
            });
    }, []);

    const handleDelete = (id) => {
        tourismPackageService.deletePackage(id)
            .then(() => {
                setPackages(packages.filter(tourismPackage => tourismPackage.id !== id));
                console.log('Package deleted successfully');
            })
            .catch((error) => {
                console.log('Error deleting package', error);
            });
    };

    const handleUpdate = (id) => {
        navigate(`/update/package/${id}`);
    };

    return (
        <div>
            <h2>Tourism Package List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Package Name</th>
                        <th>Description</th>
                        <th>Price (LKR)</th>
                        <th>Duration (Days)</th>
                        <th>Destination</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {packages.map((tourismPackage) => (
                        <tr key={tourismPackage.id}>
                            <td>{tourismPackage.id}</td>
                            <td>{tourismPackage.name}</td>
                            <td>{tourismPackage.description}</td>
                            <td>{tourismPackage.price}</td>
                            <td>{tourismPackage.duration}</td>
                            <td>{tourismPackage.destination}</td>
                            <td>
                                <button className="update-button" onClick={() => handleUpdate(tourismPackage.id)}>Update</button>
                                <button className="delete-button" onClick={() => handleDelete(tourismPackage.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewTourismPackages;
