import React from 'react';
import Home_Card from './Home_Card';

const Home = () => {

    const jmt = <svg className='text-slate-500 mt-[37px]' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="300px" width="300px" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="m12 5.5 6 4.5v9H6v-9l6-4.5M12 3 4 9v12h16V9l-8-6zm-.5 6.5v3H11v-3h-1v3h-.5v-3h-1v3c0 .83.67 1.5 1.5 1.5v4h1v-4c.83 0 1.5-.67 1.5-1.5v-3h-1zm1.5 2v3h1V18h1V9.5c-1.1 0-2 .9-2 2z"></path>
    </svg>

    const board = <svg className='text-slate-500 mt-[70px] mb-[42px]' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="225px" width="225px" xmlns="http://www.w3.org/2000/svg">
        <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm144 418c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h42v36c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-36h42c3.3 0 6 2.7 6 6z">
        </path>
    </svg>

    const question = <svg className='text-slate-500 mt-[50px] mb-[38px]' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="250px" width="250px" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14">
        </path>
    </svg>

    return (
        <div className='flex flex-row justify-center gap-[5rem]'>
            <Home_Card icon={jmt} tag='맛집' link='/jmt' />
            <Home_Card icon={board} tag='게시판' link='/join' />
            <Home_Card icon={question} tag='미정' link='/' />
        </div>
    );
}

export default Home;
