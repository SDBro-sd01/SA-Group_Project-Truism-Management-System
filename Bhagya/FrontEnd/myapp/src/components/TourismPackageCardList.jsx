import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  
import tourismPackageService from '../services/TourismPackageService';
import './TourismPackageCard.css';

const TourismPackageCardList = () => {
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

    if (packages.length === 0) {
        return <div>Loading...</div>;
    }

    const handleBookClick = (id) => {
        navigate('/package-list');  
    };

    return (
        <div className="package-card-list">
            <h3>Available Tourism Packages</h3>
            <div className="card-container">
                {packages.map((tourismPackage) => (
                    <div key={tourismPackage.id} className="package-card">
                        <h4>{tourismPackage.name}</h4>
                        <p><strong>Description:</strong> {tourismPackage.description}</p>
                        <p><strong>Price:</strong> {tourismPackage.price} LKR</p>
                        <p><strong>Duration:</strong> {tourismPackage.duration} days</p>
                        <p><strong>Destination:</strong> {tourismPackage.destination}</p>
                        <button className="book-button" onClick={() => handleBookClick(tourismPackage.id)}>
                            Book
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TourismPackageCardList;
