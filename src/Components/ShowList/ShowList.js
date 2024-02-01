import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './showlist.css';
import ShowCard from '../ShowCard/ShowCard';

const ShowList = () => {
    const [shows, setShows] = useState([]);
    const [input, setInput] = useState("");

    const handleSearch = () => {
        if (input) {
            axios.get(`https://api.tvmaze.com/search/shows?q=${input}`)
                .then((response) => {
                    setShows(response.data);
                    setInput("");
                    console.log(response.data);
                })
                .catch((error) => console.log('Error fetching shows:', error));
        } else {
            alert("Give correct value");
        };
    };

    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
            .then((response) => {
                setShows(response.data);
                console.log(response.data);
            })
            .catch((error) => console.log('Error fetching shows:', error));
    }, []);

    return (
        <div>
            <h1>Show Lists</h1>
            <div className='searchbar'>
                <input type="text" placeholder='Search Shows' value={input} onChange={(e) => setInput(e.target.value)} required />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className='card-div'>
                {
                    shows.length > 0 ?
                        <>
                            {
                                shows.map((item, index) =>
                                    <ShowCard key={index + 1} id={item.show.id} title={item.show.name} displayImage={item.show.image} />
                                )
                            }
                        </> :
                        <>
                            <p>No Shows Found</p>
                        </>
                }
            </div>
        </div>
    );
};

export default ShowList;