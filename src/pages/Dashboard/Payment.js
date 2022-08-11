import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe( 'pk_test_51LRsdMF5KgJvVVYzb13wfDmC04ervS9MIC3fPtO3BSIuojuUTDW9ptxWR4C9qzNFZmd7irpHiCJwkBZbnIAPOKxS00fdTB2Jv5' );
const Payment = () => {
    const { id } = useParams();
    const { data: order, isLoading } = useQuery( [ 'order', id ], () => fetch( `https://peaceful-shore-44176.herokuapp.com/order/${ id }` ).then( res => res.json() ) );

    if ( isLoading ) {
        return <Loading></Loading>;
    }

    return (
        <div className='mt-5'>
            <div className="card w-3/4 mx-auto bg-base-100 shadow-xl mb-3">
                <div className="card-body">
                    <p className='text-success font-bold'>Hello, {order.customerName}</p>
                    <h2 className="card-title">Please Pay for : <span className='text-orange-700'>{order.name}</span></h2>
                    <p>Your Product Quantity is: <span className='text-orange-700'>{order.qty} pcs</span></p>
                    <p>Unit Price: <span className='text-orange-700'>${order.price}</span></p>
                    <p>Please, Total Pay: <span className='text-orange-700 font-bold'>${order.subTotal}</span></p>
                </div>
            </div>
            <div className="card w-3/4 mx-auto bg-base-100 shadow-xl mb-3">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;