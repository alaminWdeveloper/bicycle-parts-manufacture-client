import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const MyReview = () => {
    const [ user ] = useAuthState( auth );
    const handleReview = event => {
        event.preventDefault();
        const review = {
            email: user.email,
            subject: event.target.subject.value,
            message: event.target.message.value,
            rating: event.target.rating.value,
            customerName: user.displayName,
        };
        fetch( 'https://peaceful-shore-44176.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem( 'accessToken' ) }`
            },
            body: JSON.stringify( review )
        } )
            .then( res => res.json() )
            .then( data => {
                console.log( data );
                if ( data ) {
                    toast( `Added your review successfully` );
                    event.target.reset();
                }
                else {
                    toast.error( `Please Try Again` );
                }

            } );
    };
    return (
        <section>
            <form onSubmit={handleReview} className='lg:w-1/2 px-5 lg:px-0 mx-auto text-center'>
                <h3 className="text-secondary text-center text-xl uppercase font-bold mb-5">Reviews</h3>
                <input className='mb-3 w-full input input-bordered bg-white' type="email" name="email" value={user?.email || ''} disabled placeholder='Email' required />
                <input className='mb-3 w-full input input-bordered bg-white' type="text" name="subject" placeholder='Subject' />
                <textarea placeholder='Message' className='mb-3 w-full input input-bordered bg-white' name='message' required></textarea>
                <select name='rating' className="select select-secondary w-full bg-white mb-3">
                    <option value='5'>5 Star</option>
                    <option value='4.5'>4.5 Star</option>
                    <option value='4'>4 Star</option>
                    <option value='3.5'>3.5 Star</option>
                    <option value='3'>3 Star</option>
                </select>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </section>
    );
};

export default MyReview;