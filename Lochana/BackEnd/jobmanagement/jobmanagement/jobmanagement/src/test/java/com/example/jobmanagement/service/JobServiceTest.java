package com.example.jobmanagement.service;

import com.example.jobmanagement.dto.JobDTO;
import com.example.jobmanagement.entity.FullTimeJob;
import com.example.jobmanagement.entity.Job;
import com.example.jobmanagement.entity.PartTimeJob;
import com.example.jobmanagement.repository.JobRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class JobServiceTest {

    private JobService jobService;
    private JobRepository jobRepository;

    @BeforeEach
    void setUp() {
        jobRepository = Mockito.mock(JobRepository.class);
        jobService = new JobService(jobRepository);
    }

    @Test
    void testCreateFullTimeJob() {
        JobDTO fullTimeJobDTO = new JobDTO();
        fullTimeJobDTO.setTitle("Tour Guide");
        fullTimeJobDTO.setType("Full-Time");
        fullTimeJobDTO.setLocation("Colombo beach hotel");
        fullTimeJobDTO.setQualifications("Tourism certification");
        fullTimeJobDTO.setApplicationDeadline(LocalDate.of(2024, 12, 31));
        fullTimeJobDTO.setNote("Send CV to abc@gmail.com");
        fullTimeJobDTO.setCreatedDate(LocalDate.of(2024, 11, 19));
        fullTimeJobDTO.setMonthlySalary(50000.0);

        FullTimeJob expectedJob = new FullTimeJob();
        expectedJob.setTitle("Tour Guide");
        expectedJob.setType("Full-Time");
        expectedJob.setLocation("Colombo beach hotel");
        expectedJob.setQualifications("Tourism certification");
        expectedJob.setApplicationDeadline(LocalDate.of(2024, 12, 31));
        expectedJob.setNote("Send CV to abc@gmail.com");
        expectedJob.setCreatedDate(LocalDate.of(2024, 11, 19));
        expectedJob.setMonthlySalary(50000.0);

        when(jobRepository.save(any(Job.class))).thenReturn(expectedJob);

        Job createdJob = jobService.createJob("fulltime", fullTimeJobDTO);

        assertNotNull(createdJob);
        assertTrue((createdJob instanceof FullTimeJob));
        assertEquals("Tour Guide", createdJob.getTitle());
        assertEquals("Full-Time", createdJob.getType());
        assertEquals("Colombo beach hotel", createdJob.getLocation());
        assertEquals("Tourism certification", createdJob.getQualifications());
        assertEquals(LocalDate.of(2024, 12, 31), createdJob.getApplicationDeadline());
        assertEquals("Send CV to abc@gmail.com", createdJob.getNote());
        assertEquals(LocalDate.of(2024, 11, 19), createdJob.getCreatedDate());
        assertEquals(50000.0, ((FullTimeJob) createdJob).getMonthlySalary());

        verify(jobRepository, times(1)).save(any(Job.class));

    }

    @Test
    void testCreatePartTimeJob() {
        JobDTO partTimeJobDTO = new JobDTO();
        partTimeJobDTO.setTitle("Tour Guide");
        partTimeJobDTO.setType("Part-Time");
        partTimeJobDTO.setLocation("Colombo beach hotel");
        partTimeJobDTO.setQualifications("Tourism certification");
        partTimeJobDTO.setApplicationDeadline(LocalDate.of(2024, 12, 31));
        partTimeJobDTO.setNote("Send CV to abc@gmail.com");
        partTimeJobDTO.setCreatedDate(LocalDate.of(2024, 11, 19));
        partTimeJobDTO.setMonthlySalary(500.0);

        PartTimeJob expectedJob = new PartTimeJob();
        expectedJob.setTitle("Tour Guide");
        expectedJob.setType("Part-Time");
        expectedJob.setLocation("Colombo beach hotel");
        expectedJob.setQualifications("Tourism certification");
        expectedJob.setApplicationDeadline(LocalDate.of(2024, 12, 31));
        expectedJob.setNote("Send CV to abc@gmail.com");
        expectedJob.setCreatedDate(LocalDate.of(2024, 11, 19));
        expectedJob.setHourlyWage(500.0);

        when(jobRepository.save(any(Job.class))).thenReturn(expectedJob);

        Job createdJob = jobService.createJob("parttime", partTimeJobDTO);

        assertNotNull(createdJob);
        assertTrue((createdJob instanceof PartTimeJob));
        assertEquals("Tour Guide", createdJob.getTitle());
        assertEquals("Part-Time", createdJob.getType());
        assertEquals("Colombo beach hotel", createdJob.getLocation());
        assertEquals("Tourism certification", createdJob.getQualifications());
        assertEquals(LocalDate.of(2024, 12, 31), createdJob.getApplicationDeadline());
        assertEquals("Send CV to abc@gmail.com", createdJob.getNote());
        assertEquals(LocalDate.of(2024, 11, 19), createdJob.getCreatedDate());
        assertEquals(500.0, ((PartTimeJob) createdJob).getHourlyWage());

        verify(jobRepository, times(1)).save(any(Job.class));


    }
}
