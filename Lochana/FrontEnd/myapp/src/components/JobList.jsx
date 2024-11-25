import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import jobService from '../services/JobService';
import './JobList.css';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [jobTypeFilter, setJobTypeFilter] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        jobService.getAllJobs()
            .then((response) => {
                setJobs(response.data);
            })
            .catch((error) => {
                console.log('Error fetching jobs:', error);
            });
    }, []);

    const handleViewDetails = (id) => {
        navigate(`/jobs/${id}`);
    };

    const filteredJobs = jobs.filter(job => {
        const isTitleMatch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
        const isTypeMatch = jobTypeFilter ? job.type === jobTypeFilter : true;
        return isTitleMatch && isTypeMatch;
});

  return (
    <div className="container-VC">
        <h2 className="heading-VC">Available Jobs</h2>

        <div className="searchfilter-VC">
            <input type="text" placeholder="Search by Job Title" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            
            <select value={jobTypeFilter} onChange={(e) => setJobTypeFilter(e.target.value)} >
                <option value="">Filter by Job Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                
            </select>
        </div>


        <div className="cardlist-VC">
            {filteredJobs.map((job) => (
                    <div className="card-VC" key={job.id}>
                        <h3>{job.title}</h3>
                        <p><strong>Job Type:</strong> {job.type}</p>
                        <p><strong>Location:</strong> {job.location}</p>
                        <button className="viewDetailsbtn-VC" onClick={() => handleViewDetails(job.id)}>View Details</button>
                    </div>
            ))}
        </div>

      
    </div>
  );
};

export default JobList;
