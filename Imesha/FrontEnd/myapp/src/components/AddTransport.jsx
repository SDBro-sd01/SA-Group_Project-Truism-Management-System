import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import transportService from '../services/TransportService';
import './TransportForm.css';

const AddTransport = () => {
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [capacity, setCapacity] = useState('');
    const [costPerKm, setCostPerKm] = useState('');
    const navigate = useNavigate();

    const saveTransport = (e) => {
        e.preventDefault();

        const transport = { type, name, capacity, costPerKm };

        transportService.addTransport(transport)
            .then((response) => {
                console.log('Transport added successfully', response.data);
                navigate('/view-transport');
            })
            .catch((error) => {
                console.log('Something went wrong', error);
            });
    };

    return (
        <div className="container">
            <form className="form">
                <div className="heading">
                    <h4>Add Transport</h4>
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

                <button onClick={saveTransport}>Submit</button>
            </form>
        </div>
    );
};

export default AddTransport;
