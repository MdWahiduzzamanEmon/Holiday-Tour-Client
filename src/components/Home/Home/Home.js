import React, { useEffect } from 'react';
import Benefits from '../../../Pages/Benefits/Benefits';
import ClientWords from '../../../Pages/ClientWords/ClientWords';
import OurService from '../OurService/OurService';
import TopBanner from '../ToBanner/TopBanner';
import T_destinations from '../T_destinations/T_destinations';

const Home = () => {
useEffect(() => { window.scrollTo({
  top: 0,
  left: 100,
  behavior: 'smooth'
})},[])
    return (
        <div>
            <TopBanner />
            <T_destinations />
            <OurService />
            <Benefits />
            <ClientWords/>
        </div>
    );
};

export default Home;