import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home_Card = ({ icon, tag, link }) => {

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
        <div className={`home-card bg-white rounded shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.2)] mt-[2rem] sm:mt-[6rem] w-auto sm:w-[25rem] h-[30rem] hover:animate-pop-out-tilt ${animationClass}`}>
            <Link to={`${link}`}>
                <div className='flex flex-col items-center'>
                    <div>{icon}</div>
                    <div className='text-slate-500 text-[50px] font-[900] h-[144px]'>{tag}</div>
                </div>
            </Link>
        </div>
    )
}

export default Home_Card
