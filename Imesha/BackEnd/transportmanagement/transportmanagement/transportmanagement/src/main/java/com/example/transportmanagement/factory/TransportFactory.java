package com.example.transportmanagement.factory;


import com.example.transportmanagement.dto.TransportDTO;
import com.example.transportmanagement.entity.Transport;

public class TransportFactory {

    public static Transport createTransport(TransportDTO transportDTO) {
        return new Transport(
                null,
                transportDTO.getType(),
                transportDTO.getName(),
                transportDTO.getCapacity(),
                transportDTO.getCostPerKm()
        );
    }
}
