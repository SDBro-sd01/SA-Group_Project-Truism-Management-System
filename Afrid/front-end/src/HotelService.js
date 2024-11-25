import axios from "axios";

const BASE_URL = "http://localhost:8084/api/v1/hotel";

class HotelService {
  getAllHotels() {
    return axios.get(`${BASE_URL}/getAllHotel`);
  }

  addHotel(hotel) {
    return axios.post(`${BASE_URL}/save`, hotel);
  }

  updateHotel(hotelId, hotel) {
    return axios.put(`${BASE_URL}/update/${hotelId}`, hotel);
  }

  deleteHotel(hotelId) {
    return axios.delete(`${BASE_URL}/deletehotel/${hotelId}`);
  }
}

export default new HotelService();
