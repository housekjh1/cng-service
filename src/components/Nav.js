import { Modal } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { GiTalk } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Nav = () => {

    const [realname, setRealname] = useState(null);
    const [userData, setUserData] = useState(null);
    const [nameTag, setNameTag] = useState(null);
    const [modalTag, setModalTag] = useState(null);
    const [manageInTag, setManageInTag] = useState(null);
    const [userListTag, setUserListTag] = useState(null);
    const [userEditTag, setUserEditTag] = useState(null);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    const memberPW1 = useRef(null);
    const memberPW2 = useRef(null);
    const manageSel = useRef(null);
    const manageIn = useRef('');
    const editRole = useRef('');
    const editEnable = useRef('');
    const editPunish = useRef('');

    const settings = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg">
        <path d="M413.967 276.8c1.06-6.235 1.06-13.518 1.06-20.8s-1.06-13.518-1.06-20.8l44.667-34.318c4.26-3.118 5.319-8.317 2.13-13.518L418.215 115.6c-2.129-4.164-8.507-6.235-12.767-4.164l-53.186 20.801c-10.638-8.318-23.394-15.601-36.16-20.801l-7.448-55.117c-1.06-4.154-5.319-8.318-10.638-8.318h-85.098c-5.318 0-9.577 4.164-10.637 8.318l-8.508 55.117c-12.767 5.2-24.464 12.482-36.171 20.801l-53.186-20.801c-5.319-2.071-10.638 0-12.767 4.164L49.1 187.365c-2.119 4.153-1.061 10.399 2.129 13.518L96.97 235.2c0 7.282-1.06 13.518-1.06 20.8s1.06 13.518 1.06 20.8l-44.668 34.318c-4.26 3.118-5.318 8.317-2.13 13.518L92.721 396.4c2.13 4.164 8.508 6.235 12.767 4.164l53.187-20.801c10.637 8.318 23.394 15.601 36.16 20.801l8.508 55.117c1.069 5.2 5.318 8.318 10.637 8.318h85.098c5.319 0 9.578-4.164 10.638-8.318l8.518-55.117c12.757-5.2 24.464-12.482 36.16-20.801l53.187 20.801c5.318 2.071 10.637 0 12.767-4.164l42.549-71.765c2.129-4.153 1.06-10.399-2.13-13.518l-46.8-34.317zm-158.499 52c-41.489 0-74.46-32.235-74.46-72.8s32.971-72.8 74.46-72.8 74.461 32.235 74.461 72.8-32.972 72.8-74.461 72.8z">
        </path>
    </svg>

    const logout = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z">
        </path>
    </svg>

    const members = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg">
        <path d="M336 256c-20.56 0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52 15.47 16.62 23 39.22 21.26 63.63-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256zm66-88zm65.83 264H204.18a27.71 27.71 0 0 1-22-10.67 30.22 30.22 0 0 1-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05 31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 0 1-5.32 25.78A27.68 27.68 0 0 1 467.83 432zM147 260c-35.19 0-66.13-32.72-69-72.93-1.42-20.6 5-39.65 18-53.62 12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52-2.87 40.2-33.8 72.91-68.93 72.91zm65.66 31.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46 0-58.07 7.68-80.57 21.62-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 0 0 4.79 23.36A25.32 25.32 0 0 0 41.72 400h111a8 8 0 0 0 7.87-6.57c.11-.63.25-1.26.41-1.88 8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 0 0-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89z">
        </path>
    </svg>

    const edits = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="15px" width="15px" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" d="M0 0h24v24H0z"></path><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z">
        </path>
    </svg>

    const isLogin = async (hasToken) => {
        const formData = new URLSearchParams();
        formData.append("hasToken", hasToken);

        await fetch(process.env.REACT_APP_SERVER_URL + "getUser", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData,
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.key === "error") localStorage.removeItem("jwt");
                if (data.key === "error" && data.value === "tokenError") {
                    alert("토큰 오류!\n다시 로그인해 주세요.");
                    window.location.href = "/login";
                    return;
                } else if (data.key === "error" && data.value === "findError") {
                    alert("질의 오류!\n다시 로그인해 주세요.");
                    window.location.href = "/login";
                    return;
                } else if (data.key === "error" && data.value === "notEnabled") {
                    alert("계정이 활성화되지 않았습니다.\n관리자에게 문의해 주세요.");
                    window.location.href = "/login";
                    return;
                } else if (data.key === "error" && data.value === "punished") {
                    alert("정지된 계정입니다.\n관리자에게 문의해 주세요.");
                    window.location.href = "/login";
                    return;
                } else if (data.key === "success") {
                    setRealname(data.value);
                    setUserData(data.data);
                    return;
                } else {
                    alert("원인을 알 수 없는 에러");
                    return;
                };
            })
            .catch(e => console.log(e));
    };

    const doChangePW = async (pw1, pw2) => {
        if (pw1.replace(' ', '').length === pw1.length && pw2.replace(' ', '').length === pw2.length && pw1.length === pw1.trim().length && pw2.length === pw2.trim().length && pw1.trim().length !== 0 && pw2.trim().length !== 0 && pw1 === pw2 && pw1.length >= 8 && pw2.length >= 8) {
            console.log(pw1.trim(), pw2.trim());
            const formData = new URLSearchParams();
            formData.append("username", userData.username);
            formData.append("password", pw1);

            await fetch(process.env.REACT_APP_SERVER_URL + "member/changePW", {
                method: "PUT",
                headers: {
                    'Authorization': localStorage.getItem("jwt"),
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData,
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.key === "success" && data.value === "updated") {
                        alert("비밀번호가 변경되었습니다.\n다시 로그인 해주세요.");
                        close2();
                        localStorage.removeItem("jwt");
                        window.location.href = "/login";
                    } else {
                        alert("에러가 발생하였습니다.");
                        close2();
                    }
                })
                .catch(e => console.log(e));
        } else if ((pw1.replace(' ', '').length !== pw1.length && pw2.replace(' ', '').length !== pw2.length) || pw1.length !== pw1.trim().length || pw2.length !== pw2.trim().length) {
            alert("공백은 사용할 수 없습니다.");
        } else if (pw1.length < 8 || pw2.length < 8) {
            alert("비밀번호는 8자리 이상으로 입력해 주세요.");
        } else {
            alert("비밀번호를 확인해주세요.");
        }
    }

    const doListSearch = async (manSel, manIn, manPg) => {
        const formData = new URLSearchParams();

        if (isNaN(manPg)) {
            formData.append("mode", manSel);
            formData.append("value", manIn.replaceAll(' ', ''));
        } else {
            formData.append("mode", manSel);
            formData.append("value", manIn.replaceAll(' ', ''));
            formData.append("page", parseInt(manPg, 10));
        }

        await fetch(process.env.REACT_APP_SERVER_URL + "admin/getUserList", {
            method: "POST",
            headers: {
                'Authorization': localStorage.getItem("jwt"),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData,
        })
            .then(resp => resp.json())
            .then(data => {
                let users = data.users;
                setUserListTag(
                    <div>
                        {users.map((item, idx) => (
                            <div key={`users${idx}`} className='flex flex-row text-[14px] text-slate-500 text-center justify-center my-2'>
                                <div className='w-[100px]'>{item.username}</div>
                                <div className='w-[100px]'>{item.realname}</div>
                                <div className='w-[100px]'>{item.role.slice(5)}</div>
                                <div className='w-[100px]'>{item.enabled === true ? '활성' : '비활성'}</div>
                                <div className='w-[100px]'>{item.punished === false ? '정상' : '밴'}</div>
                                <div className='w-[100px]'>{item.createDate.split('T')[0].replaceAll('-', '').slice(2) + ' ' + item.createDate.split('T')[1].slice(0, 5)}</div>
                                {item.role !== "ROLE_ADMIN" ? <button className='w-[80px] flex justify-center hover:text-blue-500' onClick={() => manUserEdit(item.username)}>{edits}</button> : <div className='w-[80px]'></div>}
                            </div>
                        ))}
                    </div>
                );
            })
            .catch(e => console.log(e));
    };

    const manUserEdit = async (id) => {
        const formData = new URLSearchParams();
        formData.append("username", id);

        await fetch(process.env.REACT_APP_SERVER_URL + "admin/userEdit", {
            method: "POST",
            headers: {
                'Authorization': localStorage.getItem("jwt"),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData,
        })
            .then(resp => resp.json())
            .then(data => {
                const user = data.data;
                setOpen4(true);
                setUserEditTag(
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl p-2 rounded w-auto font-Pretendard">
                        <div className='flex flex-col justify-center items-center gap-[20px] w-[700px] h-[250px]'>
                            <div className='flex flex-row text-[18px] text-slate-500 text-center font-[700] justify-center'>
                                <div className='w-[150px]'>계정명</div>
                                <div className='w-[150px]'>권한</div>
                                <div className='w-[150px]'>상태</div>
                                <div className='w-[150px]'>밴</div>
                            </div>
                            <div className='flex flex-row text-[18px] text-slate-500 text-center justify-center'>
                                <div className='w-[150px] relative top-[7px] overflow-auto'>
                                    {user.username}
                                </div>
                                <div className='w-[150px]'>
                                    <select ref={editRole} className='border-slate-300 rounded w-[130px]' defaultValue={user.role}>
                                        <option value='ROLE_MANAGER'>MANAGER</option>
                                        <option value='ROLE_MEMBER'>MEMBER</option>
                                    </select>
                                </div>
                                <div className='w-[150px]'>
                                    <select ref={editEnable} className='border-slate-300 rounded w-[130px]' defaultValue={user.enabled}>
                                        <option value='true'>활성</option>
                                        <option value='false'>비활성</option>
                                    </select>
                                </div>
                                <div className='w-[150px]'>
                                    <select ref={editPunish} className='border-slate-300 rounded w-[130px]' defaultValue={user.punished}>
                                        <option value='true'>밴</option>
                                        <option value='false'>정상</option>
                                    </select>
                                </div>
                            </div>
                            <button className='bg-green-200 text-slate-400 hover:bg-green-400 hover:text-white text-[18px] font-[700] w-[18rem] h-[40px] rounded relative top-[20px]' onClick={() => doEditUser(user.username, editRole.current.value, editEnable.current.value, editPunish.current.value)}>
                                변경하기
                            </button>
                        </div>
                    </div>
                )
            })
            .catch(e => console.log(e));
    }

    const doEditUser = async (username, role, enable, punish) => {
        const formData = new URLSearchParams();
        formData.append("username", username);
        formData.append("role", role);
        formData.append("enabled", enable);
        formData.append("punished", punish);

        await fetch(process.env.REACT_APP_SERVER_URL + "admin/updateUser", {
            method: "PUT",
            headers: {
                'Authorization': localStorage.getItem("jwt"),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData,
        })
            .then(resp => resp.text())
            .then(data => console.log(data))
            .catch(e => console.log(e));

        alert("회원정보를 수정하였습니다.");
        close4();
        setUserListTag(null);
    }

    useEffect(() => {
        const hasToken = localStorage.getItem("jwt");
        if (hasToken) {
            isLogin(hasToken);
        } else {
            setRealname(null);
        }
        setManageInTag(<input ref={manageIn} type='text' className={`text-[16px] text-slate-500 border-slate-400 rounded`} onKeyDown={manageInKey}></input>);
    }, []);

    useEffect(() => {
        if (realname) {
            setNameTag(
                <div>
                    <button className='text-[25px] text-slate-500 hover:text-blue-500' onClick={handleClick}>{realname}&nbsp;님</button>
                </div>
            )
        } else {
            setNameTag(null);
        }
    }, [realname]);

    useEffect(() => {
        if (userData) {
            setModalTag(
                userData.role === "ROLE_ADMIN" ?
                    <div className='flex flex-col sm:flex-row justify-center items-center gap-[50px] w-[500px] h-[300px]'>
                        <button className='flex flex-col justify-center items-center text-slate-500 font-[700] hover:text-blue-500 rounded p-2 gap-2 w-[150px] h-[150px] shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.2)]' onClick={handleManage}>
                            <div>
                                {members}
                            </div>
                            <div className='flex flex-col justify-center items-center text-[20px]'>
                                <p>회원관리</p>
                            </div>
                        </button>
                        <button className='flex flex-col justify-center items-center text-slate-500 font-[700] hover:text-blue-500 rounded p-2 gap-2 w-[150px] h-[150px] shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.2)]' onClick={handleLogout}>
                            <div>
                                {logout}
                            </div>
                            <div className='flex flex-col justify-center items-center text-[20px]'>
                                <p>로그아웃</p>
                            </div>
                        </button>
                    </div>
                    : userData.role === "ROLE_MANAGER" || userData.role === "ROLE_MEMBER" ?
                        <div className='flex flex-col sm:flex-row justify-center items-center gap-[50px] w-[500px] h-[300px]'>
                            <button className='flex flex-col justify-center items-center text-slate-500 font-[700] hover:text-blue-500 rounded p-2 gap-2 w-[150px] h-[150px] shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.2)]' onClick={handleSettings}>
                                <div>
                                    {settings}
                                </div>
                                <div className='flex flex-col justify-center items-center text-[20px]'>
                                    <p>비밀번호</p>
                                    <p>변경</p>
                                </div>
                            </button>
                            <button className='flex flex-col justify-center items-center text-slate-500 font-[700] hover:text-blue-500 rounded p-2 gap-2 w-[150px] h-[150px] shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.2)]' onClick={handleLogout}>
                                <div>
                                    {logout}
                                </div>
                                <div className='flex flex-col justify-center items-center text-[20px]'>
                                    <p>로그아웃</p>
                                </div>
                            </button>
                        </div>
                        : <div className='text-[25px] text-slate-500'>Error</div>
            );
        };
    }, [userData]);

    useEffect(() => {
        if (open2) {
            setTimeout(() => {
                if (memberPW1.current) {
                    memberPW1.current.focus();
                }
            }, 10);
        }
    }, [open2]);

    const handleClick = () => {
        setOpen1(true);
    }

    const handleSettings = () => {
        setOpen2(true);
    }

    const handleManage = () => {
        setOpen3(true);
    }

    const close1 = () => {
        setOpen1(false);
    }

    const close2 = () => {
        setOpen2(false);
    }

    const close3 = () => {
        setOpen3(false);
        setManageInTag(<input ref={manageIn} type='text' className={`text-[16px] text-slate-500 border-slate-400 rounded`} onKeyDown={manageInKey}></input>);
        setUserListTag(null);
    }

    const close4 = () => {
        setOpen4(false);
        setUserEditTag(null);
    }

    const handleKey = (e) => {
        if (e.key === "Enter") {
            doChangePW(memberPW1.current.value, memberPW2.current.value);
        }
    }

    const manageInKey = (e) => {
        if (e.key === "Enter") {
            doListSearch(manageSel.current.value, manageIn.current.value);
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("jwt");
        alert("로그아웃하셨습니다.\n로그인 창으로 되돌아갑니다.");
        window.location.href = "/login";
    }

    const manageSelChange = () => {
        setUserListTag(null);
        if (manageSel.current.value === '1') {
            setManageInTag(<input ref={manageIn} type='text' className={`text-[16px] text-slate-500 border-slate-400 rounded`} onKeyDown={manageInKey}></input>);
        } else {
            setManageInTag(<input ref={manageIn} type='text' className={`text-[16px] text-slate-500 border-slate-400 rounded hidden`} onKeyDown={manageInKey}></input>);
            manageIn.current.value = '';
        }
    }

    return (
        <div className='bg-white rounded p-5 mx-20 text-center shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.2)]'>
            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2 font-Ownglyph_ryuttung">
                <Link to="/">
                    <button className='flex flex-row text-slate-500 hover:text-blue-500'>
                        <div className='text-[30px] mt-[10px] mr-[10px]'>
                            <GiTalk />
                        </div>
                        <div className="text-[30px]">창녕군 커뮤니티</div>
                    </button>
                </Link>
                {nameTag ||
                    <div>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                            <Link to="/login"><button className="text-[25px] text-slate-500 hover:text-blue-500">로그인</button></Link>
                            <div className="text-[25px] text-slate-500 hover:text-blue-500">/</div>
                            <Link to="/join"><button className="text-[25px] text-slate-500 hover:text-blue-500">회원가입</button></Link>
                        </div>
                    </div>
                }
            </div>
            <Modal open={open1} onClose={close1}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl p-2 rounded w-auto font-Pretendard">
                    {modalTag}
                </div>
            </Modal>
            <Modal open={open2} onClose={close2}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl p-2 rounded w-auto font-Pretendard">
                    <div className='flex flex-col justify-center items-center gap-[20px] w-[400px] h-[400px]'>
                        <div className='text-[30px] text-slate-500 font-[700]'>비밀번호 변경</div>
                        <div className='flex flex-row items-center pr-[1rem] mt-[30px]'>
                            <div className='text-[20px] text-center text-slate-500 w-[6rem]'>비밀번호*</div>
                            <div className='flex flex-row items-center'>
                                <div className='text-[20px] text-center text-slate-500'>:&nbsp;&nbsp;&nbsp;</div>
                                <input ref={memberPW1} className='border-slate-200 rounded w-[12rem]' type='password' name='changePW1' onKeyDown={handleKey} placeholder='비밀번호 입력'></input>
                            </div>
                        </div>
                        <div className='flex flex-row items-center pr-[1rem] relative top-[-8px]'>
                            <div className='text-[20px] text-center text-slate-500 w-[6rem]'>비밀번호<br />확인*</div>
                            <div className='flex flex-row items-center'>
                                <div className='text-[20px] text-center text-slate-500'>:&nbsp;&nbsp;&nbsp;</div>
                                <input ref={memberPW2} className='border-slate-200 rounded w-[12rem]' type='password' name='changePW2' onKeyDown={handleKey} placeholder='비밀번호 확인 입력'></input>
                            </div>
                        </div>
                        <button className='bg-green-200 text-slate-400 hover:bg-green-400 hover:text-white text-[20px] font-[700] w-[18rem] h-[45px] rounded relative top-[30px]' onClick={() => doChangePW(memberPW1.current.value, memberPW2.current.value)}>
                            변경하기
                        </button>
                    </div>
                </div>
            </Modal>
            <Modal open={open3} onClose={close3}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl p-2 rounded w-auto font-Pretendard">
                    <div className='flex flex-col justify-center items-center gap-[20px] w-[800px] h-[400px]'>
                        <div className='flex flex-row justify-center items-center gap-[20px]'>
                            <div className='text-[30px] text-slate-500 font-[700]'>회원관리</div>
                            <select ref={manageSel} className='text-[16px] text-slate-500 border-slate-300 rounded' onChange={manageSelChange}>
                                <option value='1'>계정명/사용자명</option>
                                <option value='2'>비활성화</option>
                                <option value='3'>계정정지</option>
                            </select>
                            {manageInTag}
                            <button className='bg-green-200 text-slate-400 hover:bg-green-400 hover:text-white text-[18px] font-[700] w-[70px] h-[45px] rounded' onClick={() => doListSearch(manageSel.current.value, manageIn.current.value)}>
                                검색
                            </button>
                        </div>
                        <div className='flex flex-col w-[700px] h-[300px] gap-[10px]'>
                            <div className='flex flex-row text-[18px] text-slate-500 text-center font-[700] justify-center'>
                                <div className='w-[100px]'>계정명</div>
                                <div className='w-[100px]'>사용자명</div>
                                <div className='w-[100px]'>권한</div>
                                <div className='w-[100px]'>상태</div>
                                <div className='w-[100px]'>밴</div>
                                <div className='w-[100px]'>가입일</div>
                                <div className='w-[80px]'></div>
                            </div>
                            <div className='flex flex-col overflow-auto w-[700px] h-[300px]'>
                                {userListTag}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal open={open4} onClose={close4}>
                <div>
                    {userEditTag}
                </div>
            </Modal>
        </div>
    )
}

export default Nav
