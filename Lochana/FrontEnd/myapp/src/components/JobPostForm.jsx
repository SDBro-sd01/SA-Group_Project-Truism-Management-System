import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import jobService from '../services/JobService';
import './JobForm.css';

const JobPostForm = () => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    const [qualifications, setQualifications] = useState('');
    const [monthlySalary, setMonthlySalary] = useState('');
    const [hourlyWage, setHourlyWage] = useState('');
    const [applicationDeadline, setApplicationDeadline] = useState('');
    const [note, setNote] = useState('');
    const [createdDate, setCreatedDate] = useState('');

    

    const navigate = useNavigate();

    const saveJob = (e) => {
        e.preventDefault();

        const jobDTO = { title, location, qualifications, applicationDeadline, note, createdDate,

        ...(type === 'fulltime' && {monthlySalary}),
        ...(type === 'parttime' && {hourlyWage}) };


        jobService.addJob(type.toLowerCase(), jobDTO)
        .then(response => {
            console.log('Job posted successfully:', response.data);
            navigate('/jobs/view');
        })
        .catch(error => {
            console.log('Something went wrong:', error);
        });
    };





  return (
    <div className="container-SF">
    <form className="forms-SF" onSubmit={saveJob}>
        <div className="heading-SF">
            <h4>Post a New Job</h4>
        </div>

       <label className="label-SF">
        Job Title:
        <input type="text" className="title-SF" value={title} onChange={(e) => setTitle(e.target.value)} required/>
       </label>

       <label className="label-SF">
        Type:
        <select className="type-SF" value={type} onChange={(e) => {setType(e.target.value); setMonthlySalary(''); setHourlyWage('');}} required>
            <option value="">Select Type</option>
            <option value="fulltime">Full-Time</option>
            <option value="parttime">Part-Time</option>
        </select>
       </label>

       {type === 'fulltime' && (
        <label className="label-SF">
            Monthly Salary:
            <input type="number" className="salary-SF" value={monthlySalary} onChange={(e) => setMonthlySalary(e.target.value)} required />
        </label>
       )}

       {type === 'parttime' && (
        <label className="label-SF">
            Hourly Wage:
            <input type="number" className="salary-SF" value={hourlyWage} onChange={(e) => setHourlyWage(e.target.value)} required />
        </label>
       )}


       <label className="label-SF">
        Location:
        <input type="text" className="location-SF" value={location} onChange={(e) => setLocation(e.target.value)} required/>
       </label>

       <label className="label-SF">
        Qualifications:
        <textarea className="qualifications-SF" value={qualifications} onChange={(e) => setQualifications(e.target.value)} required/>
       </label>


       <label className="label-SF">
        Application Deadline:
        <input type="date" className="applicationDeadline-SF" value={applicationDeadline} onChange={(e) => setApplicationDeadline(e.target.value)} required />
       </label>


       <label className="label-SF">
        Note:
        <textarea className="note-SF" value={note} onChange={(e) => setNote(e.target.value)} required/>
       </label>

       <label className="label-SF">
        Created Date:
        <input type="date" className="createdDate-SF" value={createdDate} onChange={(e) => setCreatedDate(e.target.value)} required />
       </label>


       

       <button className="button-SF"  type="submit">Post Job</button>


    </form>
  
</div>
  );
};

export default JobPostForm;
