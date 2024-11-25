import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import tourismPackageService from '../services/TourismPackageService';
import './TourismPackageForm.css';

const UpdateTourismPackage = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('');
    const [destination, setDestination] = useState('');
    const navigate = useNavigate();

    const packageDescriptions = {
        'adventure tours': 'Explore thrilling adventure tours with mountain treks and safaris.',
        'city tours': 'Visit the best cities with guided city tours and local experiences.',
        'beach holidays': 'Relax on stunning beaches with all-inclusive beach holiday packages.',
        'camping': 'Enjoy nature with exciting camping trips and outdoor adventures.',
        'cultural events': 'Experience the best cultural events, festivals, and local heritage.',
    };

    useEffect(() => {
        tourismPackageService.getPackageById(id)
            .then((response) => {
                const tourismPackage = response.data;
                setName(tourismPackage.name);
                setDescription(tourismPackage.description);
                setPrice(tourismPackage.price);
                setDuration(tourismPackage.duration);
                setDestination(tourismPackage.destination);
            })
            .catch((error) => {
                console.log('Error fetching package', error);
            });
    }, [id]);

    const handlePackageNameChange = (e) => {
        const selectedName = e.target.value;
        setName(selectedName);
        setDescription(packageDescriptions[selectedName] || ''); 
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedPackage = { name, description, price, duration, destination };

        tourismPackageService.updatePackage(id, updatedPackage)
            .then((response) => {
                console.log('Package updated successfully', response.data);
                navigate('/view-package');
            })
            .catch((error) => {
                console.log('Error updating package', error);
            });
    };

    return (
        <div className="container">
            <form className="forms" onSubmit={handleUpdate}>
                <div className="heading">
                    <h4>Update Tourism Package</h4>
                </div>

                <label>
                    Package Name:
                    <select className="name" value={name} onChange={handlePackageNameChange} required>
                        <option value="">Select Name</option>
                        {Object.keys(packageDescriptions).map((packageName) => (
                            <option key={packageName} value={packageName}>
                                {packageName}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    Description:
                    <textarea className="description" value={description} readOnly /> {/* Read-only description */}
                </label>

                <label>
                    Price (LKR):
                    <input type="number" className="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </label>

                <label>
                    Duration (days):
                    <input type="number" className="duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
                </label>

                <label>
                    Destination:
                    <input type="text" className="destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
                </label>

                <button type="submit">Update Package</button>
            </form>
        </div>
    );
};

export default UpdateTourismPackage;
