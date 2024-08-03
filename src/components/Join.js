import React, { useEffect, useRef, useState } from 'react'

const Join = () => {

    const containsKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const isKoreanOnly = /^[ㄱ-ㅎㅏ-ㅣ가-힣]+$/;
    const isAlphaNumeric = /^[a-zA-Z0-9]+$/;
    const userID = useRef('');
    const userRealname = useRef('');
    const userPW1 = useRef('');
    const userPW2 = useRef('');
    const [pwBorder, setPwBorder] = useState('border-slate-200');

    const handleJoin = async () => {
        setPwBorder('border-slate-200');
        if (userID.current.value.replaceAll(' ', '') === '') {
            alert("아이디는 필수 값입니다.");
            userID.current.focus();
            return;
        } else if (userID.current.value.replaceAll(' ', '') !== userID.current.value) {
            alert("아이디에 공백을 넣지 말아 주세요.");
            userID.current.value = userID.current.value.replaceAll(' ', '');
            userID.current.focus();
            return;
        } else if (userID.current.value.length < 5) {
            alert("아이디는 최소 5자리 이상 입력해 주세요.");
            userID.current.focus();
            return;
        } else if (containsKorean.test(userID.current.value)) {
            alert("아이디에 한글은 사용하실 수 없습니다.");
            userID.current.focus();
            return;
        } else if (!isAlphaNumeric.test(userID.current.value)) {
            alert("아이디는 영문과 숫자만 사용 가능합니다.");
            userID.current.focus();
            return;
        } else if (userRealname.current.value.replaceAll(' ', '') === '') {
            alert("이름은 필수 값입니다.");
            userRealname.current.focus();
            return;
        } else if (userRealname.current.value.replaceAll(' ', '') !== userRealname.current.value) {
            alert("이름에 공백을 넣지 말아 주세요.");
            userRealname.current.value = userRealname.current.value.replaceAll(' ', '');
            userRealname.current.focus();
            return;
        } else if (userRealname.current.value.length < 2) {
            alert("이름은 최소 2자리 이상 입력해 주세요.");
            userRealname.current.focus();
            return;
        } else if (!isKoreanOnly.test(userRealname.current.value)) {
            alert("이름은 한글만 사용 가능합니다.");
            userRealname.current.focus();
            return;
        } else if (userPW1.current.value.replaceAll(' ', '') === '') {
            alert("비밀번호는 필수 값입니다.");
            userPW1.current.focus();
            return;
        } else if (userPW1.current.value.replaceAll(' ', '') !== userPW1.current.value) {
            alert("비밀번호에 공백을 넣지 말아 주세요.");
            userPW1.current.focus();
            return;
        } else if (userPW1.current.value.length < 8) {
            alert("비밀번호는 최소 8자리 이상 입력해 주세요.");
            userPW1.current.focus();
            return;
        } else if (userPW1.current.value !== userPW2.current.value) {
            alert("비밀번호 확인이 일치하지 않습니다.");
            setPwBorder('border-red-500');
            return;
        }
        console.log(userID.current.value, userRealname.current.value, userPW1.current.value);

        const formData = new URLSearchParams();
        formData.append("username", userID.current.value);
        formData.append("realname", userRealname.current.value);
        formData.append("password", userPW1.current.value);

        await fetch(process.env.REACT_APP_SERVER_URL + "join", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData,
        })
            .then(resp => resp.text())
            .then(data => {
                console.log(data);
                if (data === "ok") {
                    alert("가입을 환영합니다.\n로그인을 해주세요.");
                    window.location.href = "/login";
                } else if (data === "usernameDuplication") {
                    alert("이미 존재하는 회원입니다.");
                    return;
                } else if (data === "error") {
                    alert("회원가입에 실패하였습니다.");
                    return;
                } else {
                    alert("원인을 알 수 없는 에러.");
                    return;
                }
            })
            .catch(e => console.log(e));
    }

    useEffect(() => {
        userID.current.focus();
    }, []);

    const handleKey = (e) => {
        if (e.key === "Enter") {
            handleJoin();
        }
    }

    return (
        <div className='flex justify-center'>
            <div className='bg-white rounded shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.2)] mt-[2rem] sm:mt-[4rem] w-auto sm:w-[25rem] h-[602px] animate-slide-up'>
                <div className='flex flex-col justify-between items-center font-Pretendard'>
                    <div className='mt-[2rem] text-[40px] text-slate-500 font-[900]'>Join</div>
                    <div className='mt-[5rem] flex flex-col justify-between items-center gap-[5rem]'>
                        <div className='flex flex-col items-center gap-[20px]'>
                            <div className='flex flex-row items-center pr-[1rem]'>
                                <div className='text-[20px] text-center text-slate-500 w-[6rem]'>아이디*</div>
                                <div className='flex flex-row items-center'>
                                    <div className='text-[20px] text-center text-slate-500'>:&nbsp;&nbsp;&nbsp;</div>
                                    <input ref={userID} className='border-slate-200 rounded w-[10rem]' type='text' placeholder='아이디 입력' onKeyDown={handleKey}></input>
                                </div>
                            </div>
                            <div className='flex flex-row items-center pr-[1rem]'>
                                <div className='text-[20px] text-center text-slate-500 w-[6rem]'>이름*</div>
                                <div className='flex flex-row items-center'>
                                    <div className='text-[20px] text-center text-slate-500'>:&nbsp;&nbsp;&nbsp;</div>
                                    <input ref={userRealname} className='border-slate-200 rounded w-[10rem]' type='text' placeholder='이름 입력' onKeyDown={handleKey}></input>
                                </div>
                            </div>
                            <div className='flex flex-row items-center pr-[1rem]'>
                                <div className='text-[20px] text-center text-slate-500 w-[6rem]'>비밀번호*</div>
                                <div className='flex flex-row items-center'>
                                    <div className='text-[20px] text-center text-slate-500'>:&nbsp;&nbsp;&nbsp;</div>
                                    <input ref={userPW1} className={`${pwBorder} rounded w-[10rem]`} type='password' placeholder='비밀번호 입력' onKeyDown={handleKey}></input>
                                </div>
                            </div>
                            <div className='flex flex-row items-center pr-[1rem] relative top-[-8px]'>
                                <div className='text-[20px] text-center text-slate-500 w-[6rem]'>비밀번호<br />확인*</div>
                                <div className='flex flex-row items-center'>
                                    <div className='text-[20px] text-center text-slate-500'>:&nbsp;&nbsp;&nbsp;</div>
                                    <input ref={userPW2} className={`${pwBorder} rounded w-[10rem]`} type='password' placeholder='비밀번호 확인 입력' onKeyDown={handleKey}></input>
                                </div>
                            </div>
                        </div>
                        <button className='bg-green-200 text-slate-400 hover:bg-green-400 hover:text-white text-[20px] font-[700] w-[18rem] h-[45px] rounded relative top-[-20px]' onClick={handleJoin}>
                            회원가입
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join
