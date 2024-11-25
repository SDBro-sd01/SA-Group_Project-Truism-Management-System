import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jobService from '../services/JobService';
import './JobForm.css';


const JobUpdateForm = () => {
    const {id} = useParams();
    
    const [jobDetails, setJobDetails] = useState({
        title: '',
        type: '',
        location: '',
        qualifications: '',
        monthlySalary: null,
        hourlyWage: null,
        applicationDeadline: '',
        note: '',
        createdDate: '',
    });


    const navigate = useNavigate();

    useEffect(() => {
        jobService.getJobById(id)
        .then(response => {
            const job = response.data;
            
            setJobDetails(job);
            
            

        })
        .catch(error => {
            console.log('Error fetching job details:', error);

        });
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedJob = {
            ...jobDetails,
            applicationDeadline: jobDetails.applicationDeadline, 
        };





        jobService.updateJob(id, updatedJob)
        .then(response => {
            console.log('Job updated successfully:', response.data);
            navigate('/jobs/view');
        })
        .catch(error => {
            console.log('Error updating job:', error);
        });
    };


    const handleChange = (e) => {
        setJobDetails({
            ...jobDetails,
            [e.target.name]: e.target.value,
        });
    };




  return (
    <div className="container-SF">
    <form className="forms-SF" onSubmit={handleUpdate}>
        <div className="heading-SF">
            <h4>Update Job Information</h4>
        </div>




       <label className="label-SF">
        Application Deadline:
        <input type="date" className="applicationDeadline-SF" name="applicationDeadline" value={jobDetails.applicationDeadline} onChange={handleChange} required />
       </label>


      


       

       <button className="button-SF"  type="submit">Update Job</button>


    </form>
  
</div>
  );
};

export default JobUpdateForm;
