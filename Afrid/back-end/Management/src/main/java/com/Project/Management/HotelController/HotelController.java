package com.Project.Management.HotelController;

import com.Project.Management.DTO.HotelDTO;
import com.Project.Management.DTO.HotelSaveDTO;
import com.Project.Management.Entity.Hotel;
import com.Project.Management.Service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/hotel")
public class HotelController {

    @Autowired
    private HotelService hotelService;

    @PostMapping(path = "/save")
    public Hotel saveHotel(@RequestBody HotelSaveDTO hotelSaveDTO) {
        return hotelService.addHotel(hotelSaveDTO);
    }

    @GetMapping(path = "/getAllHotel")
    public List<HotelDTO> getAllHotel() {

        List<HotelDTO> allHotels = hotelService.getAllHotels();
        return allHotels;
    }

    @PutMapping(path = "update/{hotelid}")
    public Hotel updateHotel(@PathVariable int hotelid, @RequestBody Hotel hotel) {
        return hotelService.updateHotel(hotelid, hotel);
    }

    @DeleteMapping(path = "/deletehotel/{id}")
    public String deleteHotel(@PathVariable(value = "id") int id) {
        boolean deletehotel = hotelService.deleteHotel(id);
        return "deleted";
    }

}
