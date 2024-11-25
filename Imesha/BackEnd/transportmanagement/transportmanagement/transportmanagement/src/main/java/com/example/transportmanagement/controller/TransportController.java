package com.example.transportmanagement.controller;


import com.example.transportmanagement.dto.TransportDTO;
import com.example.transportmanagement.entity.Transport;
import com.example.transportmanagement.service.TransportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transports")
public class TransportController {

    @Autowired
    private TransportService transportService;

    @GetMapping
    public List<Transport> getAllTransports() {
        return transportService.getAllTransports();
    }

    @GetMapping("/{id}")
    public Transport getTransportById(@PathVariable Long id) {
        return transportService.getTransportById(id);
    }

    @PostMapping
    public Transport createTransport(@RequestBody TransportDTO transportDTO) {
        return transportService.createTransport(transportDTO);
    }

    @PutMapping("/{id}")
    public Transport updateTransport(@PathVariable Long id, @RequestBody TransportDTO transportDTO) {
        return transportService.updateTransport(id, transportDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteTransport(@PathVariable Long id) {
        transportService.deleteTransport(id);
    }
}
