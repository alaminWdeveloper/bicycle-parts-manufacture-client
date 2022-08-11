import React from 'react';
import image1 from '../../assets/image/workshop-1.jpg';
import image2 from '../../assets/image/bike-creation-workshop2 .jpg';
import image3 from '../../assets/image/bicycle-gear-3.jpg';
import OurConcernCard from './OurConcernCard';

const OurConcern = () => {
    const services = [
        { _id: 1, title: 'Bicycle Workshop', description: 'The gears, wheels, tyres, frames and brakes of a bicycle all come together through an intricate network of international trade.', img: image1 },
        { _id: 2, title: 'Bicycle Creation', description: 'The gears, wheels, tyres, frames and brakes of a bicycle all come together through an intricate network of international trade.', img: image2 },
        { _id: 3, title: 'Bicycle Parts', description: 'The gears, wheels, tyres, frames and brakes of a bicycle all come together through an intricate network of international trade.', img: image3 }
    ];
    return (
        <div className='my-14 lg:my-28'>
            <h2 className='text-center text-4xl uppercase'>Our Concern</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-5'>
                {
                    services.map( service => <OurConcernCard key={service._id} service={service}></OurConcernCard> )
                }
            </div>
        </div>
    );
};

export default OurConcern;