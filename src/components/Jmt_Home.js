import React, { useEffect, useState } from 'react';
import KakaoMapMain from './maps/KakaoMapMain';
import { Modal } from '@mui/material';

const Jmt_Home = () => {

    const [open1, setOpen1] = useState(false);

    const [regLat, setRegLat] = useState('');
    const [regLon, setRegLon] = useState('');

    useEffect(() => {

    }, []);

    const handleAdd = () => {
        setOpen1(true);
    }

    const cards = ['화왕돈까스', '황포냉면', '고기익는마을', '덕수파스타', '행복관 구내식당'];
    const cardElements = cards.map((card, index) => (
        <div
            key={index}
            className={`w-[16rem] h-[3rem] shadow-[0px_0px_20px_-4px_rgba(0,0,0,0.2)] text-slate-500 text-[18px] flex justify-start items-center animate-slide-up-repeat`}
            style={{ animationDelay: `${1 + index * 2}s` }} // 첫 시작 딜레이 설정
        >
            {(index % 3 === 0) ?
                <div className='pl-[2rem] text-red-500'>
                    ▲
                </div>
                :
                <div className='pl-[2rem] text-blue-500'>
                    ▼
                </div>
            }
            <div>
                &nbsp;&nbsp;{index + 1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{card}
            </div>
        </div>
    ));

    const close1 = () => {
        setOpen1(false);
    }

    const handleKey = () => {
        return;
    }

    const handleReg = () => {
        return;
    }

    return (
        <div className='flex flex-col sm:flex-row justify-center gap-5 mt-[2rem] sm:mt-10 mb-10 px-40 h-[calc(100vh-40px)]'>
            <div className='flex-1 bg-white rounded p-5 text-center shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.2)] h-full'>
                <KakaoMapMain />
            </div>
            <div className='flex-1 bg-white rounded p-5 text-center shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.2)] h-full'>
                <div className='font-Pretendard flex flex-col items-center h-full'>
                    <div className='flex flex-col sm:flex-row justify-center gap-2 mt-[2rem]'>
                        <select className='border-slate-300 rounded text-slate-500' defaultValue='1'>
                            <option value='1'>가게명</option>
                            <option value='2'>가게주소</option>
                            <option value='3'>메뉴</option>
                        </select>
                        <input className='border-slate-300 rounded' type='text' placeholder='검색어를 입력하세요.' />
                        <button className='bg-green-200 rounded px-[12px] text-slate-500 font-[700] hover:bg-green-400 hover:text-white'>검색</button>
                    </div>
                    <div className='flex flex-row justify-center mt-[5rem]'>
                        <div className='flex flex-col items-center basis-1/2 relative left-[-100px]'>
                            <div className='text-slate-500 text-[32px] font-[700] animate-bounce'>실시간 인기 맛집</div>
                            <div className='flex flex-col mt-[2rem] gap-[2rem]'>
                                {cardElements}
                            </div>
                        </div>
                        <div className='flex justify-center items-center basis-1/2 relative left-[30px] top-[20px]'>
                            <button className='rounded shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.2)] w-[125px] h-[125px] flex flex-col justify-center items-center text-slate-500 font-[700] hover:bg-slate-500 hover:text-white' onClick={handleAdd}>
                                <p className='text-[50px]'>+</p>
                                <p className='relative top-[-10px]'>가게등록</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={open1} onClose={close1}>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl p-2 rounded w-auto font-Pretendard'>
                    <div className='w-[400px] h-[500px]'>
                        <div className='text-center text-[30px] text-slate-500 font-[700] relative top-[30px]'>가게등록</div>
                        <div>
                            <div className='mt-[5rem] flex flex-col justify-between items-center gap-[5rem]'>
                                <div className='flex flex-col items-center gap-[20px]'>
                                    <div className='flex flex-row items-center pr-[1rem]'>
                                        <div className='text-[20px] text-center text-slate-500 w-[6rem]'>가게이름*</div>
                                        <div className='flex flex-row items-center'>
                                            <div className='text-[20px] text-center text-slate-500'>:&nbsp;&nbsp;&nbsp;</div>
                                            <input className='border-slate-200 rounded w-[10rem]' type='text' placeholder='가게이름 입력' onKeyDown={handleKey}></input>
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center pr-[1rem]'>
                                        <div className='text-[20px] text-center text-slate-500 w-[6rem]'>주소*</div>
                                        <div className='flex flex-row items-center'>
                                            <div className='text-[20px] text-center text-slate-500'>:&nbsp;&nbsp;&nbsp;</div>
                                            <input className='border-slate-200 rounded w-[10rem]' type='text' placeholder='주소 입력' onKeyDown={handleKey}></input>
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center relative left-[0px]'>
                                        <button className='bg-green-200 text-slate-400 hover:bg-green-400 hover:text-white text-[18px] font-[700] w-[75px] h-[45px] rounded relative left-[-25px]'>검색</button>
                                        <div className='relative left-[7px]'>
                                            <input className={`border-slate-200 rounded w-[75px] text-slate-500`} type='text' placeholder='위도' value={regLat} disabled></input>
                                            <input className={`border-slate-200 rounded w-[75px] relative left-[10px] text-slate-500`} type='text' placeholder='경도' value={regLon} disabled></input>
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center pr-[1rem]'>
                                        <div className='text-[20px] text-center text-slate-500 w-[6rem]'>전화번호*</div>
                                        <div className='flex flex-row items-center'>
                                            <div className='text-[20px] text-center text-slate-500'>:&nbsp;&nbsp;&nbsp;</div>
                                            <input className={`border-slate-200 rounded w-[10rem]`} type='text' placeholder='전화번호 입력' onKeyDown={handleKey}></input>
                                        </div>
                                    </div>
                                </div>
                                <button className='bg-green-200 text-slate-400 hover:bg-green-400 hover:text-white text-[20px] font-[700] w-[288px] h-[45px] rounded relative top-[-30px]' onClick={handleReg}>
                                    등록하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Jmt_Home;
