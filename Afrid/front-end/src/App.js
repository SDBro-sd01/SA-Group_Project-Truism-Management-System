import React from "react";
import HotelList from "./HotelList";
import AddHotel from "./AddHotel";
import UpdateHotel from './UpdateHotel';

function App() {
  return (
    <div>
      <h1>Hotel Management System</h1>
      <AddHotel />
      <HotelList />
    </div>
  );
}

export default App;
