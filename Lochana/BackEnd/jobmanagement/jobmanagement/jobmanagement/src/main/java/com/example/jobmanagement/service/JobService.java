package com.example.jobmanagement.service;

import com.example.jobmanagement.dto.JobDTO;
import com.example.jobmanagement.entity.FullTimeJob;
import com.example.jobmanagement.entity.Job;
import com.example.jobmanagement.entity.PartTimeJob;
import com.example.jobmanagement.factory.JobFactory;
import com.example.jobmanagement.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobService {

   private final JobRepository jobRepository;

   @Autowired
   public JobService(JobRepository jobRepository) {
      this.jobRepository = jobRepository;
   }

   public Job createJob(String jobType, JobDTO jobDTO) {
      Job job = JobFactory.createJob(jobType);
      job.setTitle(jobDTO.getTitle());
      job.setLocation(jobDTO.getLocation());
      job.setQualifications(jobDTO.getQualifications());
      job.setApplicationDeadline(jobDTO.getApplicationDeadline());
      job.setNote(jobDTO.getNote());
      job.setCreatedDate(jobDTO.getCreatedDate());

      if (job instanceof FullTimeJob) {
         ((FullTimeJob) job).setMonthlySalary(jobDTO.getMonthlySalary());
      } else if (job instanceof PartTimeJob) {
         ((PartTimeJob) job).setHourlyWage(jobDTO.getHourlyWage());
      }

      return jobRepository.save(job);
   }

   public List<Job> getAllJobs() {
      return jobRepository.findAll();
   }

   public Optional<Job> getJobById(Long id) {
      return jobRepository.findById(id);
   }

   public void deleteJob(Long id) {
      jobRepository.deleteById(id);
   }

   public Job updateJob(Long id, JobDTO jobDTO) {
      Job job = jobRepository.findById(id).orElseThrow(() -> new RuntimeException("Job not found"));
      job.setTitle(jobDTO.getTitle());
      job.setLocation(jobDTO.getLocation());
      job.setQualifications(jobDTO.getQualifications());
      job.setApplicationDeadline(jobDTO.getApplicationDeadline());
      job.setNote(jobDTO.getNote());
      job.setCreatedDate(jobDTO.getCreatedDate());


      if (job instanceof FullTimeJob) {
         ((FullTimeJob) job).setMonthlySalary(jobDTO.getMonthlySalary());
      } else if (job instanceof PartTimeJob) {
         ((PartTimeJob) job).setHourlyWage(jobDTO.getHourlyWage());
      }

      return jobRepository.save(job);

   }

}

