import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateHotel = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [hotel, setHotel] = useState({
        hotelname: '',
        facilities: '',
        location: '',
        pricing: ''
    });

    useEffect(() => {
        fetchHotel();
    }, []);

    const fetchHotel = async () => {
        try {
            const response = await axios.get('http://localhost:8084/api/v1/hotel/getAllHotel');
            const hotelData = response.data.find((h) => h.hotelid === parseInt(id));
            if (hotelData) setHotel(hotelData);
        } catch (error) {
            console.error('Error fetching hotel', error);
        }
    };

    const handleChange = (e) => {
        setHotel({ ...hotel, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8084/api/v1/hotel/update/${id}`, hotel);
            alert('Hotel updated successfully');
            navigate('/');
        } catch (error) {
            console.error('Error updating hotel', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update Hotel</h2>
            <input type="text" name="hotelname" value={hotel.hotelname} onChange={handleChange} required />
            <input type="text" name="facilities" value={hotel.facilities} onChange={handleChange} required />
            <input type="text" name="location" value={hotel.location} onChange={handleChange} required />
            <input type="number" name="pricing" value={hotel.pricing} onChange={handleChange} required />
            <button type="submit">Update Hotel</button>
        </form>
    );
};

export default UpdateHotel;
