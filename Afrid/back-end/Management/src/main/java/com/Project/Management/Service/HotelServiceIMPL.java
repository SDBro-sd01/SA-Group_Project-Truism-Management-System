package com.Project.Management.Service;

import com.Project.Management.DTO.HotelDTO;
import com.Project.Management.DTO.HotelSaveDTO;
import com.Project.Management.Entity.Hotel;
import com.Project.Management.HotelRepo.HotelRepo;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class HotelServiceIMPL implements HotelService{

    @Autowired
    private HotelRepo hotelRepo;

    @Override
    public Hotel addHotel(HotelSaveDTO hotelSaveDTO) {

        Hotel hotel = new Hotel(

                hotelSaveDTO.getHotelname(),
                hotelSaveDTO.getFacilities(),
                hotelSaveDTO.getLocation(),
                hotelSaveDTO.getPricing()
        );
        hotelRepo.save(hotel);
        return  hotel;
    }


    @Override
    public List<HotelDTO> getAllHotels() {
        List<Hotel> getHotels = hotelRepo.findAll();
        List<HotelDTO> hotelDTOList = new ArrayList<>();
        for(Hotel a:getHotels)
        {
            HotelDTO hotelDTO = new HotelDTO(
                    a.getHotelid(),
                    a.getHotelname(),
                    a.getFacilities(),
                    a.getLocation(),
                    a.getPricing()
            );
            hotelDTOList.add(hotelDTO);

        }

        return hotelDTOList;

    }

    @Override
    public Hotel updateHotel(int hotelid, Hotel hotel){

        Hotel existingHotel = hotelRepo.findById(hotelid).orElse(null);

        if (existingHotel == null){
            return null;
        }
        else{

            existingHotel.setHotelname(hotel.getHotelname());
            existingHotel.setFacilities(hotel.getFacilities());
            existingHotel.setLocation(hotel.getLocation());
            existingHotel.setPricing(hotel.getPricing());
            return hotelRepo.save(existingHotel);

        }

    }
    @Override
    public boolean deleteHotel(int id) {

        if(hotelRepo.existsById(id))
        {
            hotelRepo.deleteById(id);
        }
        else
        {
            System.out.println("Hotel ID Not Found");
        }
        return true;
    }

}
