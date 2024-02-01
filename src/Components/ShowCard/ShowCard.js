import React from 'react';
import { Link } from 'react-router-dom';
import "./showcard.css";

const ShowCard = ({ id, title, displayImage }) => {
    return (
        <Link className='link' to={`/details/${id}`}>
            <div className="show-card" >
                {
                    displayImage == null ?
                        <p>No Image Found</p> :
                        <img src={displayImage.original} alt="display" />
                }
                <p>{title}</p>
            </div>
        </Link>
    );
};

export default ShowCard;