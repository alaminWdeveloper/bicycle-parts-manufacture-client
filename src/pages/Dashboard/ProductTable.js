import React from 'react';

const ProductTable = ( { product, index, setDeleteProduct } ) => {
    const { name, price, description, image } = product;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-20 rounded">
                        <img src={image} alt="Product" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{description}</td>
            <td>${price}</td>
            <td><button className="btn btn-xs btn-warning">Edit</button></td>
            <td>
                <label onClick={() => setDeleteProduct( product )} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error modal-button">Delete</label>

            </td>
        </tr>
    );
};

export default ProductTable;