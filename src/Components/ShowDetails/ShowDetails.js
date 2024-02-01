import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./showdetail.css";

const ShowDetails = () => {
    const [show, setShow] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://api.tvmaze.com/shows/${id}`)
            .then((response) => {
                setShow(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log('Error fetching show details:', error);
                navigate("/");
            });
    }, [id]);

    if (!show) {
        return <div>Loading...</div>;
    };

    return (
        <div className='showDetail'>
            {
                show.id &&
                <>
                    <div className='showDetail-flex'>
                        <h1>{show.name}</h1>
                        <button onClick={() => { navigate(`/ticket-book/${id}`) }}>Book Ticket</button>
                    </div>
                    <div className='showDetail-Image'>
                        {
                            show.image ?
                                <img src={show.image.original} alt="Banner" /> :
                                <p>No Image Found</p>
                        }
                    </div>
                    <p>{show.summary}</p>
                    <div className='details'>
                        <h2>Language -- <span>{show.language}</span></h2>
                        <h2>Ratings -- <span>{show.rating.average}</span></h2>
                        <h2>Release Date -- <span>{show.premiered}</span></h2>
                    </div>
                </>
            }
        </div>
    );
};

export default ShowDetails;