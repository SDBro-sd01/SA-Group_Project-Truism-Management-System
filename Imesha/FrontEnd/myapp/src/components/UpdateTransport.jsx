import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import transportService from '../services/TransportService';
import './TransportForm.css';

const UpdateTransport = () => {
    const { id } = useParams();
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [capacity, setCapacity] = useState('');
    const [costPerKm, setCostPerKm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        transportService.getTransportById(id)
            .then((response) => {
                const transport = response.data;
                setType(transport.type);
                setName(transport.name);
                setCapacity(transport.capacity);
                setCostPerKm(transport.costPerKm);
            })
            .catch((error) => {
                console.log('Error fetching transport', error);
            });
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedTransport = { type, name, capacity, costPerKm };

        transportService.updateTransport(id, updatedTransport)
            .then((response) => {
                console.log('Transport updated successfully', response.data);
                navigate('/view-transport');
            })
            .catch((error) => {
                console.log('Error updating transport', error);
            });
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleUpdate}>
                <div className="heading">
                    <h4>Update Transport</h4>
                </div>

                <label>
                    Type:
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
                </label>

                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>

                <label>
                    Capacity (persons):
                    <input type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
                </label>

                <label>
                    Cost Per Km (LKR):
                    <input type="number" step="0.01" value={costPerKm} onChange={(e) => setCostPerKm(e.target.value)} />
                </label>

                <button type="submit">Update Transport</button>
            </form>
        </div>
    );
};

export default UpdateTransport;
