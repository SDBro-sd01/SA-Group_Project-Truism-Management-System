import React, { useState } from "react";
import HotelService from "./HotelService";

const AddHotel = () => {
  const [hotel, setHotel] = useState({
    hotelname: "",
    facilities: "",
    location: "",
    pricing: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotel({ ...hotel, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await HotelService.addHotel(hotel);
      alert("Hotel added successfully");
      setHotel({
        hotelname: "",
        facilities: "",
        location: "",
        pricing: "",
      });
    } catch (error) {
      console.error("Error adding hotel:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Hotel</h2>
      <div>
        <label>Hotel Name:</label>
        <input
          type="text"
          name="hotelname"
          value={hotel.hotelname}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Facilities:</label>
        <input
          type="text"
          name="facilities"
          value={hotel.facilities}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={hotel.location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Pricing:</label>
        <input
          type="number"
          name="pricing"
          value={hotel.pricing}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Hotel</button>
    </form>
  );
};

export default AddHotel;
