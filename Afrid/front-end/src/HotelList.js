import React, { useEffect, useState } from "react";
import HotelService from "./HotelService";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await HotelService.getAllHotels();
      setHotels(response.data);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  const deleteHotel = async (id) => {
    try {
      await HotelService.deleteHotel(id);
      fetchHotels(); // Refresh list after deletion
    } catch (error) {
      console.error("Error deleting hotel:", error);
    }
  };

  return (
    <div>
      <h2>Hotel List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Facilities</th>
            <th>Location</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => (
            <tr key={hotel.hotelid}>
              <td>{hotel.hotelid}</td>
              <td>{hotel.hotelname}</td>
              <td>{hotel.facilities}</td>
              <td>{hotel.location}</td>
              <td>{hotel.pricing}</td>
              <td>
                <button onClick={() => deleteHotel(hotel.hotelid)}>Delete</button>
                {/* Add an Edit button here */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HotelList;
