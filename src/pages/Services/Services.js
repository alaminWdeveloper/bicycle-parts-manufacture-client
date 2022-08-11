import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Footer from '../Shared/Footer/Footer';
import Loading from '../Shared/Loading/Loading';
import ServiceBookingModal from './ServiceBookingModal';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [ order, setOrder ] = useState( null );
    const { data: products, isLoading, refetch } = useQuery( [ 'products' ], () => fetch( 'https://peaceful-shore-44176.herokuapp.com/product', {
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${ localStorage.getItem( 'accessToken' ) }`
        }
    } ).then( res => res.json() ) );

    if ( isLoading ) {
        return <Loading></Loading>;
    }

    return (
        <section>
            <div className='py-6 lg:py-12'>
                <h3 className='text-secondary font-bold text-center text-4xl'>Available Product</h3>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 my-5'>
                    {
                        products?.map( product => <ServicesCard key={product._id} product={product} setOrder={setOrder}></ServicesCard> )
                    }
                </div>
                {order && <ServiceBookingModal refetch={refetch} order={order} setOrder={setOrder}></ServiceBookingModal>}
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Services;