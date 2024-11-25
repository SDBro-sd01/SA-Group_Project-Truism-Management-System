package com.example.jobmanagement.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class JobDTO {
    private Long id;
    private String title;
    private String type;
    private String location;
    private String qualifications;
    private LocalDate applicationDeadline;
    private String note;
    private LocalDate createdDate;
    private Double monthlySalary;
    private Double hourlyWage;



}
