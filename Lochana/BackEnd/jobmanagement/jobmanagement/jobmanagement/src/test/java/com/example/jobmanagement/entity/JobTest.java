package com.example.jobmanagement.entity;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

public class JobTest {

    private Job job;
    private LocalDate applicationDeadline;
    private LocalDate createdDate;

    private static class TestJob extends Job {}

    @BeforeEach
    public void setUp() {
        applicationDeadline = LocalDate.of(2024, 11, 15);
        createdDate = LocalDate.of(2024, 10, 25);
        job = new TestJob();
        job.setTitle("Tour Guide");
        job.setType("Full-Time");
        job.setLocation("Colombo beach hotel");
        job.setQualifications("Tourism certification");
        job.setApplicationDeadline(applicationDeadline);
        job.setNote("Send CV to abc@gmail.com");
        job.setCreatedDate(createdDate);
    }



    @Test
    public void testJobCreation() {

        assertNotNull(job);
        assertEquals("Tour Guide", job.getTitle());
        assertEquals("Full-Time", job.getType());
        assertEquals("Colombo beach hotel", job.getLocation());
        assertEquals("Tourism certification", job.getQualifications());
        assertEquals(applicationDeadline, job.getApplicationDeadline());
        assertEquals("Send CV to abc@gmail.com", job.getNote());
        assertEquals(createdDate, job.getCreatedDate());

    }
}

