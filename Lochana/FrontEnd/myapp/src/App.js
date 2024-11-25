import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import JobTable from './components/JobTable';
import JobUpdateForm from './components/JobUpdateForm';
import JobPostForm from './components/JobPostForm';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';


function App() {
  return (
    <Router>
      <Routes>
 
      <Route path="/jobs/view" element={<JobTable />} />
      <Route path="/jobs/add" element={<JobPostForm />} />
      <Route path="/jobs/update/:id" element={<JobUpdateForm />} />
      <Route path="/joblist" element={<JobList />} />
      <Route path="/jobs/:id" element={<JobDetails />} />

      </Routes>
    </Router>
  )
}

export default App;
