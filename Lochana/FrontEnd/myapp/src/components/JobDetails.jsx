import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import jobService from '../services/JobService';
import './JobDetails.css';

const JobDetails = () => {
    const {id} = useParams();
    const [job, setJob] = useState([]);

    useEffect(() => {
        jobService.getJobById(id)
            .then((response) => {
                setJob(response.data);
            })
            .catch((error) => {
                console.log('Error fetching job details:', error);
            })
    }, [id]);

    if (!job) {
        return <p>Loading job details.....</p>;
    }


  return (
    <div className= "container-VC">
        <div className="card-VC">
                <h2 className="heading-VC">{job.title}</h2>
                <p><strong>Type:</strong> {job.type}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Qualifications:</strong> {job.qualifications}</p>
                <p><strong>Monthly Salary:</strong> {job.monthlySalary !== undefined ? `LKR${job.monthlySalary.toLocaleString()}` : 'N/A'}</p>
                <p><strong>Hourly Wage:</strong> {job.hourlyWage !== undefined ? `LKR${job.hourlyWage.toLocaleString()} per hour` : 'N/A'}</p>
                <p><strong>Application Deadline:</strong> {job.applicationDeadline}</p>
                <p> {job.note}</p>


        </div>
      
    </div>
  );
};

export default JobDetails;
