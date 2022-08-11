import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const CustomerReview = () => {
    const [ reviews, setReviews ] = useState( [] );
    useEffect( () => {
        fetch( 'https://peaceful-shore-44176.herokuapp.com/review' )
            .then( res => res.json() )
            .then( data => {
                setReviews( data );
            } );
    }, [] );
    return (
        <section className='py-6'>
            <h2 className='text-center text-4xl uppercase'>Product Review</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-5'>
                {
                    reviews.slice( -3 ).map( review => <div key={review._id} className="card bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{review.subject}</h2>
                            <p>{review.message}</p>
                            <p>Ratings: {review.rating} star</p>
                        </div>
                        <div className="card-actions justify-center mb-5">
                            <Link to="/services" className="btn uppercase btn-primary">Details</Link>
                        </div>
                    </div> )
                }
            </div>
        </section>
    );
};

export default CustomerReview;