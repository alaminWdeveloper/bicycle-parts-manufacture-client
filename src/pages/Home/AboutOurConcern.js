import React from 'react';
import { Link } from "react-router-dom";
import banner2 from '../../assets/image/banner-2.jpg';
import tools from '../../assets/image/Bicycle service isometric composition.jpg';

const AboutOurConcern = () => {
    return (
        <section style={{ background: `url(${ banner2 })`, backgroundSize: 'cover' }}>

            <div className="hero py-6 lg:py-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={tools} className="lg:max-w-md rounded-lg shadow-2xl" alt='banner' />
                    <div className='mt-10 lg:mt-0'>
                        <h1 className="text-3xl lg:text-4xl font-bold">About Bicycle Manufacturer Industries Ltd.</h1>
                        <p className="py-6 text-black lg:w-3/4">Bicycle Manufacturer has one primary goal to provide top quality products and unparalleled services to all our customers. We have a solid commitment working hard and meeting all our customers requirements. <br /><br />

                            Bicycle Manufacturer businesses are based on a great heritage built on strong ethical principles, namely honesty, integrity, inattentiveness, and the highest levels of professionalism. With several business units, Bicycle Manufacturer has anchored its name in Bangladesh businesses and households alike, as well as in international markets.</p>
                        <Link to="/about" className="btn uppercase btn-primary">Read More</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutOurConcern;