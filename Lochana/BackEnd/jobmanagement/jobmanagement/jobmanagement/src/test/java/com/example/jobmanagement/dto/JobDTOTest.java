package com.example.jobmanagement.dto;

import com.example.jobmanagement.entity.Job;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

public class JobDTOTest {

    private JobDTO jobDTO;
    private LocalDate applicationDeadline;

    private LocalDate createdDate;


    @BeforeEach
    public void setUp() {

        jobDTO = new JobDTO();
        applicationDeadline = LocalDate.of(2024, 11, 15);
        createdDate = LocalDate.of(2024, 10, 25);

        jobDTO.setId(1L);
        jobDTO.setTitle("Tour Guide");
        jobDTO.setType("Full-Time");
        jobDTO.setLocation("Colombo beach hotel");
        jobDTO.setQualifications("Tourism certification");
        jobDTO.setApplicationDeadline(applicationDeadline);
        jobDTO.setNote("Send CV to abc@gmail.com");
        jobDTO.setCreatedDate(createdDate);
        jobDTO.setMonthlySalary(50000.0);
        jobDTO.setHourlyWage(null);

    }

    @Test
    public void testGetters() {
        assertNotNull(jobDTO);
        assertEquals(1L, jobDTO.getId());
        assertEquals("Tour Guide", jobDTO.getTitle());
        assertEquals("Full-Time", jobDTO.getType());
        assertEquals("Colombo beach hotel", jobDTO.getLocation());
        assertEquals("Tourism certification", jobDTO.getQualifications());
        assertEquals(applicationDeadline, jobDTO.getApplicationDeadline());
        assertEquals("Send CV to abc@gmail.com", jobDTO.getNote());
        assertEquals(createdDate, jobDTO.getCreatedDate());

        assertEquals(50000.0, jobDTO.getMonthlySalary());
        assertNull(jobDTO.getHourlyWage());
    }

    @Test
    public void testSettingHourlyWage() {
        jobDTO.setHourlyWage(1000.0);
        assertEquals(1000.0, jobDTO.getHourlyWage());
    }
}

