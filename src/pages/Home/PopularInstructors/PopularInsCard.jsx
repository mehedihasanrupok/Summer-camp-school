import React from 'react';

const PopularInsCard = ({ people }) => {
    const { image, name, email, enrollCount } = people;

    return (
        <div className="card bg-base-100 shadow-xl group">
        <figure>
            <img src={image} alt="Shoes" className="w-full group-hover:scale-125 transition" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">Instructor Name: {name}</h2>
            <p>
                <span className="font-medium">Instructor Email:</span> {email} <br />
                <span className="font-medium">Enrolled Students:</span> {enrollCount} <br />
            </p>
            <div className="card-actions">
                
            </div>
        </div>
    </div>
    );
};

export default PopularInsCard;