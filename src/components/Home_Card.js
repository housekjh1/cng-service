import React, { useEffect, useState } from 'react'
import '../css/Anime.css';

const Home_Card = ({ icon, tag }) => {

    const [animationClass, setAnimationClass] = useState('animate-slide-up');

    useEffect(() => {
        const handleAnimationEnd = () => {
            setAnimationClass('');
        };

        const cardElement = document.querySelector('.home-card');
        cardElement.addEventListener('animationend', handleAnimationEnd);

        return () => {
            cardElement.removeEventListener('animationend', handleAnimationEnd);
        };
    }, []);

    return (
        <div className={`home-card bg-white rounded shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.2)] mt-[2rem] sm:mt-[6rem] w-auto sm:w-[25rem] h-[30rem] ${animationClass} hover:animate-pop-out-tilt`}>
            <div className='flex flex-col items-center'>
                <div>{icon}</div>
                <div className='text-slate-500 text-[50px] font-[900]'>{tag}</div>
            </div>
        </div>
    )
}

export default Home_Card
