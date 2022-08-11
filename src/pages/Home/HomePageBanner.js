import React from 'react';
import { Link } from "react-router-dom";
import bg from '../../assets/image/banner.jpg';

const HomePageBanner = () => {
    return (
        <div style={{ background: `url(${ bg })`, backgroundSize: 'cover' }} className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-4xl lg:text-6xl text-orange-400 font-bold">Welcome To Our Website</h1>
                    <p className="py-6 text-2xl lg:text-3xl max-w-xxl text-white">Our cordial welcome goes to you! Thank you for trusting us and appreciating our venture! We are nothing without customers!</p>
                    <Link to="/contact" className="btn uppercase btn-primary">Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default HomePageBanner;