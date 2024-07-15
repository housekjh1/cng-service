import React, { useEffect, useState } from 'react';
import KakaoMapMain from './maps/KakaoMapMain';

const Jmt_Home = () => {
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setViewportHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const cards = ['화왕돈까스', '황포냉면', '고기익는마을', '덕수파스타', '행복관 구내식당'];
    const cardElements = cards.map((card, index) => (
        <div
            key={index}
            className={`w-[16rem] h-[3rem] shadow-[0px_0px_20px_-4px_rgba(0,0,0,0.2)] text-slate-500 text-[18px] flex flex-row justify-start items-center animate-slide-up-repeat`}
            style={{ animationDelay: `${1 + index * 2}s` }} // 첫 시작 딜레이 설정
        >
            <div className='pl-[2rem]'>{(index % 2 === 0) ? '🔺' : '🔻'} {index + 1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{card}</div>
        </div>
    ));

    return (
        <div className='flex flex-col sm:flex-row justify-center gap-5 mt-[2rem] sm:mt-10 mb-10 px-40' style={{ height: viewportHeight - 40 }}>
            <div className='flex-1 bg-white rounded p-5 text-center shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.2)]'>
                <KakaoMapMain />
            </div>
            <div className='flex-1 bg-white rounded p-5 text-center shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.2)]'>
                <div className='font-Pretendard flex flex-col items-center'>
                    <form className='flex flex-col sm:flex-row justify-center gap-2 mt-[2rem]'>
                        <select className='border-slate-300 rounded text-slate-500'>
                            <option>가게명</option>
                            <option>가게주소</option>
                            <option>메뉴</option>
                        </select>
                        <input className='border-slate-300 rounded' type='text' placeholder='검색어를 입력하세요.' />
                        <button className='bg-green-200 rounded px-[12px] text-slate-500 font-[700] hover:bg-green-400 hover:text-white'>검색</button>
                    </form>
                    <div className='flex flex-row justify-center gap-[16rem] mt-[5rem]'>
                        <div className='flex flex-col items-center'>
                            <div className='text-slate-500 text-[32px] font-[700] animate-bounce'>실시간 인기 맛집</div>
                            <div className='flex flex-col mt-[2rem] gap-[2rem]'>
                                {cardElements}
                            </div>
                        </div>
                        <div>
                            <div>옵션</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jmt_Home;
