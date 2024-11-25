import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import transportService from '../services/TransportService';
import './ViewTransports.css';

const ViewTransports = () => {
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

    const handleDelete = (id) => {
        transportService.deleteTransport(id)
            .then(() => {
                setTransports(transports.filter((transport) => transport.id !== id));
                console.log('Transport deleted successfully');
            })
            .catch((error) => {
                console.log('Error deleting transport', error);
            });
    };

    const handleUpdate = (id) => {
        navigate(`/update/transport/${id}`);
    };

    return (
        <div>
            <h2>Transport List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Capacity</th>
                        <th>Cost Per Km (LKR)</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {transports.map((transport) => (
                        <tr key={transport.id}>
                            <td>{transport.id}</td>
                            <td>{transport.type}</td>
                            <td>{transport.name}</td>
                            <td>{transport.capacity}</td>
                            <td>{transport.costPerKm}</td>
                            <td>
                                <button
                                    className="update-button"
                                    onClick={() => handleUpdate(transport.id)}
                                >
                                    Update
                                </button>
                                <button
                                    className="delete-button"
                                    onClick={() => handleDelete(transport.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewTransports;
