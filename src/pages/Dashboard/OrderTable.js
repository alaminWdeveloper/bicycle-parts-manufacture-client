import React from 'react';

const OrderTable = ( { order, index } ) => {
    const { name, qty, price, subTotal, transactionId, paid, email, phone, image } = order;
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
            <td>{email}</td>
            <td>{phone}</td>
            <td>{qty} pcs</td>
            <td>${price}</td>
            <td>${subTotal}</td>
            <td>

                {
                    ( subTotal && !paid ) && <button className='btn btn-xs btn-primary'>Pending</button>

                }
                {
                    ( transactionId && paid ) && <button className='btn btn-xs btn-success'>Paid</button>
                }
            </td>
        </tr>
    );
};

export default OrderTable;