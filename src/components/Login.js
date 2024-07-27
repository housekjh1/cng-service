import React, { useEffect, useRef, useState } from 'react'

const Login = () => {

    const id = useRef();

    useEffect(() => {
        id.current.focus();
        const isAuthenticated = localStorage.getItem('jwt');
        if (isAuthenticated) {
            window.location.href = '/';
        }
    }, []);

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        // console.log(e.target.name, e.target.value);
    }

    const login = async () => {
        if (user.username.trim() === '' || user.password.trim() === '') {
            alert("아이디 또는 비밀번호를 확인해주세요.");
            return;
        }
        await fetch(process.env.REACT_APP_SERVER_URL + 'login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        })
            .then(resp => {
                const jwtToken = resp.headers.get('Authorization');
                if (jwtToken !== null) {
                    localStorage.setItem("jwt", jwtToken);
                    window.location.href = '/';
                } else {
                    alert("아이디 또는 비밀번호를 확인해주세요.");
                }
            })
            .catch(e => console.log(e));
    }

    const handleOnKeyDown = (e) => {
        if (e.key === 'Enter') {
            login();
        }
    };

    return (
        <div className='flex justify-center'>
            <div className='bg-white rounded shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.2)] mt-[2rem] sm:mt-[6rem] w-auto sm:w-[25rem] h-[30rem] animate-slide-up'>
                <div className='flex flex-col justify-between items-center font-Pretendard'>
                    <div className='mt-[2rem] text-[40px] text-slate-500 font-[900]'>Login</div>
                    <div className='mt-[5rem] flex flex-col justify-between items-center gap-[5rem]'>
                        <div className='flex flex-col items-center gap-[20px]'>
                            <div className='flex flex-row items-center pr-[1rem]'>
                                <div className='text-[20px] text-center text-slate-500 w-[6rem]'>아이디</div>
                                <div className='flex flex-row items-center'>
                                    <div className='text-[20px] text-center text-slate-500'>:&nbsp;&nbsp;&nbsp;</div>
                                    <input ref={id} className='border-slate-200 rounded w-[10rem]' type='text' name='username' onChange={handleChange} onKeyDown={handleOnKeyDown} placeholder='아이디 입력'></input>
                                </div>
                            </div>
                            <div className='flex flex-row items-center pr-[1rem]'>
                                <div className='text-[20px] text-center text-slate-500 w-[6rem]'>비밀번호</div>
                                <div className='flex flex-row items-center'>
                                    <div className='text-[20px] text-center text-slate-500'>:&nbsp;&nbsp;&nbsp;</div>
                                    <input className='border-slate-200 rounded w-[10rem]' type='password' name='password' onChange={handleChange} onKeyDown={handleOnKeyDown} placeholder='비밀번호 입력'></input>
                                </div>
                            </div>
                        </div>
                        <button className='bg-green-200 text-slate-400 hover:bg-green-400 hover:text-white text-[20px] font-[700] w-[18rem] h-[45px] rounded' onClick={login}>
                            로그인
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
