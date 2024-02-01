import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './Components/ShowList/ShowList';
import ShowDetails from './Components/ShowDetails/ShowDetails';
import BookingForm from './Components/Booking/BookingForm';

const App = () => {
    return (
        <div className='main'>
            <Router>
                <Routes>
                    <Route path="/" element={<ShowList />} />
                    <Route path="/details/:id" element={<ShowDetails />} />
                    <Route path="/ticket-book/:id" element={<BookingForm />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;