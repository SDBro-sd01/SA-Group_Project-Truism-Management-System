package com.example.jobmanagement.entity;


import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class PartTimeJob extends Job{
    private Double hourlyWage;
}
