import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const ServiceBookingModal = ( { order, setOrder, refetch } ) => {
    const { name, price, description, image } = order;
    const [ user, loading ] = useAuthState( auth );

    if ( loading ) {
        return <Loading></Loading>;
    }

    const handleBooking = event => {
        event.preventDefault();
        const qty = event.target.qty.value;
        const subTotal = ( qty * price ) + '';
        const booking = {
            price,
            subTotal,
            name,
            description,
            image,
            qty: event.target.qty.value,
            phone: event.target.phone.value,
            customerName: user.displayName,
            email: user.email
        };
        fetch( 'https://peaceful-shore-44176.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem( 'accessToken' ) }`
            },
            body: JSON.stringify( booking )
        } )
            .then( res => res.json() )
            .then( data => {
                if ( data.success ) {
                    toast( `Your Product Booking Successfully` );
                    refetch();
                    setOrder( null );
                }
                else {
                    toast.error( `Please Try Again` );
                }

            } );
    };
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold text-secondary">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 mt-5'>
                        <input className='w-full input input-secondary bg-white' type="text" name="productName" value={name} disabled />
                        <select name='qty' className="select select-secondary w-full bg-white">
                            <option value='50'>50 pcs</option>
                            <option value='100'>100 pcs</option>
                            <option value='150'>150 pcs</option>
                            <option value='200'>200 pcs</option>
                        </select>
                        <input className='w-full input input-secondary bg-white' type="text" name="name" value={user?.displayName || ''} disabled />
                        <input className='w-full input input-secondary bg-white' type="text" name="phone" placeholder='Phone Number' required />
                        <input className='w-full input input-secondary bg-white' type="text" name="email" value={user?.email || ''} disabled />
                        <input className='btn bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold border-0 w-full' type="submit" value='Order Now' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceBookingModal;