import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import MyOrderTable from './MyOrderTable';

const MyOrders = () => {
    const [ user ] = useAuthState( auth );
    const { data: orders, isLoading } = useQuery( [ 'orders' ], () => fetch( `https://peaceful-shore-44176.herokuapp.com/order/${ user.email }`, {
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
                <h3 className='text-xl text-secondary font-bold'>My Orders</h3>
            </div>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Sub Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map( ( order, index ) => <MyOrderTable index={index} key={order._id} order={order}></MyOrderTable> )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;