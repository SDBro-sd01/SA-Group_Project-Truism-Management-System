import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import transportService from '../services/TransportService';
import './TransportCardList.css';

const TransportCardList = () => {
    const [transports, setTransports] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        transportService.getAllTransports()
            .then((response) => {
                setTransports(response.data);
            })
            .catch((error) => {
                console.log('Error fetching transports', error);
            });
    }, []);

    if (transports.length === 0) {
        return <div>Loading...</div>;
    }

    const handleBookClick = (id) => {
        navigate('/transport-list'); 
    };

    return (
        <div className="transport-card-list">
            <h3>Available Transports</h3>
            <div className="card-container">
                {transports.map((transport) => (
                    <div key={transport.id} className="transport-card">
                        <h4>{transport.name}</h4>
                        <p><strong>Type:</strong> {transport.type}</p>
                        <p><strong>Capacity:</strong> {transport.capacity} persons</p>
                        <p><strong>Cost Per Km:</strong> {transport.costPerKm} LKR</p>
                        <button 
                            className="details-button" 
                            onClick={() => handleBookClick(transport.id)}
                        >
                            Book Transport
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransportCardList;
