package com.example.packagemanagement.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TourismPackageDTO {

    private Long id;
    private String name;
    private String description;
    private double price;
    private int duration;
    private String destination;


}
