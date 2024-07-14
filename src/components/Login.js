import React from 'react'

const Login = () => {
    return (
        <div className='flex justify-center'>
            <div className='bg-white rounded shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.2)] mt-[2rem] sm:mt-[6rem] w-auto sm:w-[25rem] h-[30rem]'>
                <div className='flex flex-col justify-between items-center'>
                    <div className='mt-[2rem] text-[40px] text-slate-500 font-[700]'>Login</div>
                    <form className='mt-[5rem] flex flex-col justify-between items-center gap-[5rem]'>
                        <div className='flex flex-col justify-center items-center gap-[20px]'>
                            <div className='flex flex-row items-center pr-[1rem]'>
                                <div className='text-[20px] text-center text-slate-500 w-[4rem]'>ID : </div>
                                <input className='border-slate-200 rounded' type='text' placeholder='아이디 입력'></input>
                            </div>
                            <div className='flex flex-row items-center pr-[1rem]'>
                                <div className='text-[20px] text-center text-slate-500 w-[4rem]'>PW : </div>
                                <input className='border-slate-200 rounded' type='text' placeholder='비밀번호 입력'></input>
                            </div>
                        </div>
                        <button className='bg-green-200 text-slate-500 hover:bg-green-400 hover:text-white text-[20px] font-[700] w-[18rem] h-[45px] rounded'>
                            로그인
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
