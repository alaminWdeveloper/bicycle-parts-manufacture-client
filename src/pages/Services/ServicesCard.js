import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const ServicesCard = ( { product, setOrder } ) => {
    const { name, price, image, description } = product;
    const navigate = useNavigate();
    const [ user ] = useAuthState( auth );
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p>{description}</p>
                </div>
                <div className="card-actions justify-center mb-5">
                    {
                        user ? <label htmlFor="booking-modal" onClick={() => setOrder( product )} disabled={product.length === 0} className="btn btn-sm bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold border-0">Buy Now</label> : navigate( '/login' )
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;