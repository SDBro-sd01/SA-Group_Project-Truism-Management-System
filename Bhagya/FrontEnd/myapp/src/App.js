
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTourismPackage from './components/AddTourismPackage';
import ViewTourismPackages from './components/ViewTourismPackages';
import UpdateTourismPackage from './components/UpdateTourismPackage';
import TourismPackageCardList from './components/TourismPackageCardList';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Tourism Package Management</h1>
        <Routes>
          <Route path="/view-package" element={<ViewTourismPackages />} />

          <Route path="/add-package" element={<AddTourismPackage />} />

          <Route path="/update/package/:id" element={<UpdateTourismPackage />} />

          <Route path="/package-list" element={<TourismPackageCardList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


