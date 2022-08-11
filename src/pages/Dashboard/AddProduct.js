import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';


const AddProduct = () => {
    const [ isLoading, setLoading ] = useState( false );
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    if ( isLoading ) {
        return <Loading></Loading>;
    }
    const imageStorageKey = `0b609486fbb202f1f14c9a68dec09863`;

    const onSubmit = async data => {
        const image = data.image[ 0 ];
        const formData = new FormData();
        formData.append( 'image', image );
        setLoading( true );
        const url = `https://api.imgbb.com/1/upload?key=${ imageStorageKey }`;
        fetch( url, {
            method: 'POST',
            body: formData
        } )
            .then( res => res.json() )
            .then( result => {
                if ( result.success ) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        image: img
                    };
                    //Send to database 
                    fetch( 'https://peaceful-shore-44176.herokuapp.com/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${ localStorage.getItem( 'accessToken' ) }`
                        },
                        body: JSON.stringify( product )
                    } )
                        .then( res => res.json() )
                        .then( data => {
                            if ( data.insertedId ) {
                                toast.success( "Product added successfully." );
                                navigate( '/dashboard/manageProducts' );
                                reset();
                            }
                            else {
                                toast.error( 'Failed to add product.' );
                            }
                        } );
                }
            } );

    };
    return (
        <form onSubmit={handleSubmit( onSubmit )} className='grid grid-cols-1 gap-5 max-w-md mx-auto'>
            <div className='flex justify-between py-3'>
                <h3 className='text-xl text-secondary font-bold text-center'>Add a New Product</h3>
                <Link className="btn-xs btn btn-secondary text-white" to="/dashboard/manageProducts">View All</Link>
            </div>
            <div className="form-control w-full max-w-md">
                <input type="text" placeholder="Name" className="w-full input input-secondary bg-white max-w-md" {...register( "name",
                    {
                        required: {
                            value: true,
                            message: 'Name is required'
                        }
                    } )}
                />
                <label className="label">
                    {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                </label>
            </div>
            <div className="form-control w-full max-w-md">
                <input type="text" placeholder="description" className="w-full input input-secondary bg-white max-w-md" {...register( "description",
                    {
                        required: {
                            value: true,
                            message: 'Description is required'
                        }
                    } )}
                />
                <label className="label">
                    {errors.description?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.description.message}</span>}
                </label>
            </div>
            <div className="form-control w-full max-w-md">
                <input type="number" placeholder="price" className="w-full input input-secondary bg-white max-w-md" {...register( "price",
                    {
                        required: {
                            value: true,
                            message: 'price is required'
                        }
                    } )}
                />
                <label className="label">
                    {errors.price?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.price.message}</span>}
                </label>
            </div>
            <div className="form-control w-full max-w-md">
                <input type="file" className="w-full input input-secondary bg-white max-w-md" {...register( "image",
                    {
                        required: {
                            value: true,
                            message: 'Image is required'
                        }
                    } )}
                />
                <label className="label">
                    {errors.image?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.image.message}</span>}
                </label>
            </div>
            <input type="submit" value="ADD" className="btn bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold border-0 w-full max-w-md" />
        </form>
    );
};

export default AddProduct;