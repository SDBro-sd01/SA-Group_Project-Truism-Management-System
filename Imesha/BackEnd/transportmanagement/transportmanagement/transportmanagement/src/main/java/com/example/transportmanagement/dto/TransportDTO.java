package com.example.transportmanagement.dto;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Setter
@Getter
public class TransportDTO {
    private String type;
    private String name;
    private int capacity;
    private double costPerKm;
}
