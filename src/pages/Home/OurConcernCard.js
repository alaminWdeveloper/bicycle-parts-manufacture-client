import React from 'react';
import { Link } from "react-router-dom";

const OurConcernCard = ( { service } ) => {
    const { title, description, img } = service;
    return (
        <div className="card bg-base-100 shadow-xl mt-5">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
            <div className="card-actions justify-center mb-5">
                <Link to="/services" className="btn uppercase btn-primary">Details</Link>
            </div>
        </div>
    );
};

export default OurConcernCard;