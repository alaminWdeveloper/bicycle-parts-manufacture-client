import React from 'react';
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-8xl text-orange-500 font-bold">404</h1>
                    <h2 className='text-5xl font-bold py-3'>OPPS! PAGE NOT BE FOUND</h2>
                    <p className="py-6 text-3xl max-w-xxl">Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarily unavailable.</p>
                    <Link to="/" className="btn uppercase btn-primary">Back to Home Page</Link>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;