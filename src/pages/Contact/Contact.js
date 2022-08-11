import React from 'react';
import banner2 from '../../assets/image/banner.jpg';
import Footer from '../Shared/Footer/Footer';

const Contact = () => {
    return (
        <section>
            <div style={{ background: `url(${ banner2 })`, backgroundSize: 'cover' }} className="py-8">
                <div className=''>
                    <h2 className="text-secondary text-center text-3xl uppercase font-bold">Contact Us</h2>
                    <h2 className="text-3xl text-center lg:text-4xl py-4 text-white font-bold">Stay connected with us</h2>
                </div>
                <div className="hero lg:py-6">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-white text-center lg:text-left w-96 mb-5 lg:mb-0 lg:ml-12">
                            <p className="w-full"><strong>Address: </strong>House 06, Road 01, Dhanmondi, Dhaka-1205.</p>
                            <p className="w-full"><strong>Email: </strong>info@bicycle.com</p>
                            <p className="w-full"><strong>Phone: </strong>+880 1518-729991</p>
                        </div>
                        <form className='rounded-lg text-center shadow-2xl w-96'>
                            <input className='mb-3 w-full input input-bordered bg-white' type="email" name="email" placeholder='Email' /><br />
                            <input className='mb-3 w-full input input-bordered bg-white' type="text" name="subject" placeholder='Subject' /><br />
                            <textarea placeholder='Message' className='mb-3 w-full input input-bordered bg-white' name='message'></textarea><br />
                            <button className="btn uppercase btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Contact;