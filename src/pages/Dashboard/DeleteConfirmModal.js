import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ( { deleteProduct, setDeleteProduct, refetch } ) => {
    const { _id, name } = deleteProduct;
    console.log( deleteProduct );

    const handleDelete = () => {
        fetch( `https://peaceful-shore-44176.herokuapp.com/product/${ _id }`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem( 'accessToken' ) }`
            }
        } )
            .then( res => res.json() )
            .then( data => {
                console.log( data );
                if ( data.deletedCount ) {
                    toast.success( `Product: ${ name } is deleted` );
                    setDeleteProduct( null );
                    refetch();
                }
            } );
    };

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete {name}?</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;