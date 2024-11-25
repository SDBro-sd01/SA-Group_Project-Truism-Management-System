package com.example.transportmanagement.service;

import com.example.transportmanagement.dto.TransportDTO;
import com.example.transportmanagement.entity.Transport;
import com.example.transportmanagement.factory.TransportFactory;
import com.example.transportmanagement.repository.TransportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransportService {

    @Autowired
    private TransportRepository transportRepository;

    public List<Transport> getAllTransports() {
        return transportRepository.findAll();
    }

    public Transport getTransportById(Long id) {
        return transportRepository.findById(id).orElseThrow(() -> new RuntimeException("Transport not found"));
    }

    public Transport createTransport(TransportDTO transportDTO) {
        Transport transport = TransportFactory.createTransport(transportDTO);
        return transportRepository.save(transport);
    }

    public Transport updateTransport(Long id, TransportDTO transportDTO) {
        Transport existingTransport = getTransportById(id);
        existingTransport.setType(transportDTO.getType());
        existingTransport.setName(transportDTO.getName());
        existingTransport.setCapacity(transportDTO.getCapacity());
        existingTransport.setCostPerKm(transportDTO.getCostPerKm());
        return transportRepository.save(existingTransport);
    }

    public void deleteTransport(Long id) {
        transportRepository.deleteById(id);
    }
}

