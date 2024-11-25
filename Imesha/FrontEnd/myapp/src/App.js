import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTransport from './components/AddTransport';
import UpdateTransport from './components/UpdateTransport';
import ViewTransports from './components/ViewTransports';
import TransportCardList from './components/TransportCardList';

const App = () => {
    return (
        <Router>
            <div>
                
                <Routes>
                    <Route path="/transport-list" element={<TransportCardList />} />
                    <Route path="/add-tansport" element={<AddTransport />} />
                    <Route path="/update/transport/:id" element={<UpdateTransport />} />
                    <Route path="/view-transport" element={<ViewTransports />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;


