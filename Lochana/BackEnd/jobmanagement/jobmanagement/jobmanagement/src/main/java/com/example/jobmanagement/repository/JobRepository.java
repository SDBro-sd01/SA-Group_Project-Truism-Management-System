package com.example.jobmanagement.repository;

import com.example.jobmanagement.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {
}
