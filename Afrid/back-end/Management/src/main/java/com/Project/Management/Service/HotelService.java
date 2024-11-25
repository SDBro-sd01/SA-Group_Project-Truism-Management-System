package com.Project.Management.Service;

import com.Project.Management.DTO.HotelDTO;
import com.Project.Management.DTO.HotelSaveDTO;
import com.Project.Management.Entity.Hotel;

import java.util.List;

public interface HotelService {
    Hotel addHotel(HotelSaveDTO hotelSaveDTO);

    List<HotelDTO> getAllHotels();

    Hotel updateHotel(int hotelid, Hotel hotel);

    boolean deleteHotel(int id);

}
