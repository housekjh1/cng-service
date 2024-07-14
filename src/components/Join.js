import React from 'react'
import '../css/Anime.css';

const Join = () => {
    return (
        <div className='flex justify-center'>
            <div className='bg-white rounded shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.2)] mt-[2rem] sm:mt-[4rem] w-auto sm:w-[25rem] h-[39rem] animate-slide-up'>
                <div className='flex flex-col justify-between items-center font-Pretendard'>
                    <div className='mt-[2rem] text-[40px] text-slate-500 font-[900]'>Join</div>
                    <form className='mt-[5rem] flex flex-col justify-between items-center gap-[5rem]'>
                        <div className='flex flex-col items-center gap-[20px]'>
                            <div className='flex flex-row items-center pr-[1rem]'>
                                <div className='text-[20px] text-center text-slate-500 w-[6rem]'>아이디*</div>
                                <div className='flex flex-row items-center'>
                                    <div className='text-[20px] text-center text-slate-500'>:&nbsp;&nbsp;&nbsp;</div>
                                    <input className='border-slate-200 rounded w-[10rem]' type='text' placeholder='아이디 입력'></input>
                                </div>
                            </div>
                            <div className='flex flex-row items-center pr-[1rem]'>
                                <div className='text-[20px] text-center text-slate-500 w-[6rem]'>이름*</div>
                                <div className='flex flex-row items-center'>
                                    <div className='text-[20px] text-center text-slate-500'>:&nbsp;&nbsp;&nbsp;</div>
                                    <input className='border-slate-200 rounded w-[10rem]' type='text' placeholder='이름 입력'></input>
                                </div>
                            </div>
                            <div className='flex flex-row items-center pr-[1rem]'>
                                <div className='text-[20px] text-center text-slate-500 w-[6rem]'>비밀번호*</div>
                                <div className='flex flex-row items-center'>
                                    <div className='text-[20px] text-center text-slate-500'>:&nbsp;&nbsp;&nbsp;</div>
                                    <input className='border-slate-200 rounded w-[10rem]' type='password' placeholder='비밀번호 입력'></input>
                                </div>
                            </div>
                            <div className='flex flex-row items-center pr-[1rem] relative top-[-8px]'>
                                <div className='text-[20px] text-center text-slate-500 w-[6rem]'>비밀번호<br />확인*</div>
                                <div className='flex flex-row items-center'>
                                    <div className='text-[20px] text-center text-slate-500'>:&nbsp;&nbsp;&nbsp;</div>
                                    <input className='border-slate-200 rounded w-[10rem]' type='password' placeholder='비밀번호 확인 입력'></input>
                                </div>
                            </div>
                        </div>
                        <button className='bg-green-200 text-slate-400 hover:bg-green-400 hover:text-white text-[20px] font-[700] w-[18rem] h-[45px] rounded hover:animate-grow'>
                            회원가입
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Join
