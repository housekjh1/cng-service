import React from 'react';
import KakaoMapMain from './maps/KakaoMapMain';

const Home = () => {
    return (
        <div className='flex-1 h-full bg-white rounded p-5 text-center shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.2)] mb-10'>
            <div className='font-Ownglyph_UNZ'>
                {/* <form className="flex flex-col sm:flex-row justify-start items-center gap-3">
                    <input className="border-slate-300 rounded text-slate-500 w-0 sm:w-auto" type="text" id="search" name="search" placeholder="가게를 검색하세요." />
                    <button className="p-1 px-1 w-auto sm:w-[40px] bg-green-500 hover:bg-green-700 font-bold text-white rounded">검색</button>
                </form> */}
            </div>
            <KakaoMapMain />
        </div>
    );
}

export default Home;
