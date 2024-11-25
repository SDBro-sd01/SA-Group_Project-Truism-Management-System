package com.example.jobmanagement.factory;

import com.example.jobmanagement.entity.FullTimeJob;
import com.example.jobmanagement.entity.Job;
import com.example.jobmanagement.entity.PartTimeJob;

public class JobFactory {

    public static Job createJob(String jobType) {
        Job job;
        switch (jobType.toLowerCase()) {
            case "fulltime":
                job = new FullTimeJob();
                job.setType("Full-Time");
                break;
            case "parttime":
                job = new PartTimeJob();
                job.setType("Part-Time");
                break;
            default:
                throw new IllegalArgumentException("Unknown job type: " + jobType);
        }
        return job;
    }
}
