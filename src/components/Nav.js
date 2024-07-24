import { Box, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { GiTalk } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Nav = () => {

    const [realname, setRealname] = useState(null);
    const [nameTag, setNameTag] = useState(null);
    const [open1, setOpen1] = useState(false);

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
                if (data.key === "error" && data.value === "tokenError") {
                    console.log("토큰오류");
                } else if (data.key === "error" && data.value === "findError") {
                    console.log("질의오류");
                } else if (data.key === "error" && data.value === "notEnabled") {
                    console.log("활성화오류");
                } else if (data.key === "error" && data.value === "punished") {
                    console.log("계정정지");
                } else if (data.key === "success") {
                    console.log(data);
                    setRealname(data.value);
                } else {
                    console.log("원인을 알 수 없는 에러");
                }
            })
            .catch(e => console.log(e));
    };

    useEffect(() => {
        const hasToken = localStorage.getItem("jwt");
        if (hasToken) {
            isLogin(hasToken);
        } else {
            setRealname(null);
        }
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

    const handleClick = () => {
        setOpen1(true);
    }

    const close1 = () => {
        setOpen1(false);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
    };

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
                <Box sx={style} className="rounded w-auto">
                    <div className='text-[25px] text-slate-500'>테스트</div>
                </Box>
            </Modal>
        </div>
    )
}

export default Nav
