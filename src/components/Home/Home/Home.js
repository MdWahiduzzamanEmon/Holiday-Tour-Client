import React from 'react';
import Benefits from '../../../Pages/Benefits/Benefits';
import OurService from '../OurService/OurService';
import TopBanner from '../ToBanner/TopBanner';
import T_destinations from '../T_destinations/T_destinations';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <T_destinations />
            <OurService />
            <Benefits/>
        </div>
    );
};

export default Home;