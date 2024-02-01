import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import "./booking.css";

const BookingForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movieDetails, setMovieDetails] = useState(null);
    const [userName, setUsername] = useState("");
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        axios.get(`https://api.tvmaze.com/shows/${id}`)
            .then((response) => {
                setMovieDetails(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log('Error fetching movie details:', error);
                navigate("/");
            });
    }, [id]);

    const handleBooking = (e) => {
        e.preventDefault();
        localStorage.setItem('userName', userName);
        localStorage.setItem('userEmail', userEmail);
        navigate('/');
    };

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className='booking'>
            <form onSubmit={handleBooking}>
                <h1>Booking Form</h1>
                <h2> Movie Name: <span> {movieDetails.name} </span> </h2>
                <label>
                    User Name:
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='UserName'
                        required
                    />
                </label>
                <label>
                    User Email:
                    <input
                        type="email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder='Email'
                        required
                    />
                </label>
                <button type="submit">Book Ticket</button>
            </form>
        </div>
    );
};

export default BookingForm;