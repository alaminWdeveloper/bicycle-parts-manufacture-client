import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import OrderTable from './OrderTable';

const ManageOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery( [ 'orders' ], () => fetch( 'https://peaceful-shore-44176.herokuapp.com/order', {
        headers: {
            authorization: `Bearer ${ localStorage.getItem( 'accessToken' ) }`
        }
    } ).then( res => res.json() ) );

    if ( isLoading ) {
        return <Loading></Loading>;
    }
    return (
        <div className="overflow-x-auto">
            <div className='flex justify-between py-3'>
                <h3 className='text-xl text-secondary font-bold'>All Orders</h3>
            </div>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map( ( order, index ) => <OrderTable refetch={refetch} index={index} key={order._id} order={order}></OrderTable> )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;