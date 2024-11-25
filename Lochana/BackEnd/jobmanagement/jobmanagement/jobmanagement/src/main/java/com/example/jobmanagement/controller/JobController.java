package com.example.jobmanagement.controller;

import com.example.jobmanagement.dto.JobDTO;
import com.example.jobmanagement.entity.Job;
import com.example.jobmanagement.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/TM/jobs")
public class JobController {

    private final JobService jobService;

    @Autowired
    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @PostMapping("/{jobType}")
    public ResponseEntity<Job> createJob(@PathVariable String jobType, @RequestBody JobDTO jobDTO) {
        Job createdJob = jobService.createJob(jobType, jobDTO);
        return ResponseEntity.ok(createdJob);
    }

    @GetMapping
    public ResponseEntity<List<Job>> getAllJobs() {
        List<Job> jobs = jobService.getAllJobs();
        return ResponseEntity.ok(jobs);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Job> getJobById(@PathVariable Long id) {
       return jobService.getJobById(id)
               .map(ResponseEntity::ok)
               .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Job> updateJob(@PathVariable Long id, @RequestBody JobDTO jobDTO) {
        Job updatedJob = jobService.updateJob(id, jobDTO);
        return ResponseEntity.ok(updatedJob);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJob(@PathVariable Long id) {
        jobService.deleteJob(id);
        return ResponseEntity.noContent().build();
    }
}
