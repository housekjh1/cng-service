import React from 'react';
import Home_Card from './Home_Card';

const Home = () => {
    return (
        <div className='flex flex-row justify-center gap-[5rem]'>
            <Home_Card name='1' num='2' />
            <Home_Card />
            <Home_Card />
        </div>
    );
}

export default Home;
