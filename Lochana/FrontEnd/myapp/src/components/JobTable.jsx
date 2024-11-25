import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import jobService from '../services/JobService';
import './JobTable.css';

const JobTable = () => {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        jobService.getAllJobs()
            .then((response) => {
                setJobs(response.data);
            })
            .catch((error) => {
                console.log('Error fetching jobs:', error);
            });
    }, [navigate]);

    const handleUpdate = (id) => {
        navigate(`/jobs/update/${id}`);

    };

    const handleDelete = (id) => {
        jobService.deleteJob(id)
             .then(() => {
                setJobs(jobs.filter(job => job.id !== id));
             })
             .catch((error) => {
                console.error("Error deleting job:", error);
             });
    };

    

  return (
    <div>
      <h2 className="heading-VT">Job Management</h2>
      <table>
        <thead>
            <tr>
                <th>Job ID</th>
                <th>Job Title</th>
                <th>Job Type</th>
                <th>Location</th>
                <th>Qualifications</th>
                <th>Monthly Salary</th>
                <th>Hourly Wage</th>
                <th>Application Deadline</th>
                <th>Note</th>
                <th>Created Date</th>    
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {jobs.map(job => (
                <tr key={job.id}>
                    <td>{job.id}</td>
                    <td>{job.title}</td>
                    <td>{job.type}</td>
                    <td>{job.location}</td>
                    <td>{job.qualifications}</td>
                    <td>{job.monthlySalary !== undefined && job.monthlySalary !== null ? `LKR ${job.monthlySalary.toLocaleString()}` : 'N/A'}</td>
                    <td>{job.hourlyWage !== undefined && job.hourlyWage !== null ? `LKR ${job.hourlyWage.toLocaleString()} per hour` : 'N/A'}</td>
                    <td>{job.applicationDeadline}</td>
                    <td>{job.note}</td>
                    <td>{job.createdDate}</td>
                    <td>
                        <button className="updatebtn-VT" onClick={() => handleUpdate(job.id)}>Update</button>
                        <button className="deletebtn-VT" onClick={() => handleDelete(job.id)}>Delete</button>
                    </td>

                </tr>

            ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default JobTable;
