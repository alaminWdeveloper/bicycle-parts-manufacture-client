import React from 'react';
import Footer from '../Shared/Footer/Footer';
import AboutOurConcern from './AboutOurConcern';
import CustomerReview from './CustomerReview';
import HomePageBanner from './HomePageBanner';
import OurConcern from './OurConcern';

const Home = () => {
    return (
        <div>
            <HomePageBanner></HomePageBanner>
            <OurConcern></OurConcern>
            <AboutOurConcern></AboutOurConcern>
            <CustomerReview></CustomerReview>


            <Footer></Footer>
        </div>
    );
};

export default Home;