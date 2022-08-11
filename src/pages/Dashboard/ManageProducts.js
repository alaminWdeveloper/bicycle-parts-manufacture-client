import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ProductTable from './ProductTable';

const ManageProducts = () => {
    const [ deleteProduct, setDeleteProduct ] = useState( null );
    const { data: products, isLoading, refetch } = useQuery( [ 'products' ], () => fetch( 'https://peaceful-shore-44176.herokuapp.com/product', {
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
                <h3 className='text-xl text-secondary font-bold'>All Products</h3>
                <Link className="btn-xs btn btn-secondary text-white" to="/dashboard/addProduct">Add New</Link>
            </div>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map( ( product, index ) => <ProductTable setDeleteProduct={setDeleteProduct} refetch={refetch} index={index} key={product._id} product={product}></ProductTable> )
                    }
                </tbody>
            </table>
            {
                deleteProduct && <DeleteConfirmModal refetch={refetch} setDeleteProduct={setDeleteProduct} deleteProduct={deleteProduct}></DeleteConfirmModal>
            }
        </div>
    );
};

export default ManageProducts;